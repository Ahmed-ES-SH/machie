"use client";
import React, { useState, useEffect } from "react";
import Input_Image from "./Input_Image";
import { instance } from "../Api/axios";
import { usePathname, useRouter } from "next/navigation";
import { Apis } from "../Api/Api";
import Input_Images from "../Input_Images";
import Cookie from "cookie-universal";

interface formtype {
  inputs: { [key: string]: string }[];
  api: string;
  direct: string;
  category: boolean;
  image_or_images: boolean;
}

interface Typeform {
  [key: string]: any;
}

export default function Form({
  inputs,
  api,
  direct,
  category,
  image_or_images,
}: Typeform) {
  const [form, setform] = useState<Typeform>({});
  const [errors, seterrors] = useState<any>({});
  const [refresh, setrefresh] = useState(false);
  const [categories, setcategories] = useState([]);
  const [vendors, setvendors] = useState<any>([]);
  const [images, setimages] = useState<File[]>([]);
  const [image, setimage] = useState<any>("");
  const router = useRouter();
  const pathname = usePathname();
  const cookie = Cookie();

  useEffect(() => {
    const initialFormState = inputs.reduce(
      (acc: { [key: string]: string }, input: { [key: string]: string }) => {
        acc[input.name] = "";
        return acc;
      },
      {} as { [key: string]: string }
    );

    setform(initialFormState);
  }, [inputs]);

  useEffect(() => {
    const getdata = async (api: string, set: any) => {
      try {
        const res = await instance.get(api).then((data) => set(data.data));
      } catch (err) {
        console.log(err);
      }
    };

    getdata(Apis.categories, setcategories);
    getdata(Apis.vendors, setvendors);
  }, []);

  const handelchange = (e: any) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      for (const key in form) {
        formData.append(key, form[key]);
      }

      if (!image_or_images) {
        for (let i = 0; i < images.length; i++) {
          formData.append("images[]", images[i]);
        }
      }

      if (image_or_images) {
        formData.append("image", image);
      }

      const res = await instance.post(api, formData);
      if (api == "/login") {
        cookie.set("token", res.data.access_token);
      }
      router.push(direct);
      setrefresh((prev) => !prev);
      console.log(res);
    } catch (error: any) {
      console.error("Error:", error);
      seterrors(error.response.data.errors);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`relative hidden-scrollbar w-full ${
          pathname == "/signin" ? "h-fit" : "h-screen"
        } overflow-y-auto bg-secend_dash mt-8 z-[3] bg-transparent`}
      >
        {direct == "/dashbord/products" && category && (
          <div>
            <div>
              <label
                htmlFor="vendor"
                className="block text-sm font-medium text-secend_text max-lg:text-white max-lg:font-light font-serif text-md py-2"
              >
                Vendors
              </label>
              <select
                onChange={handelchange}
                id="vendor_id"
                name="vendor_id"
                className="block w-full my-2 text-secend_text rounded-md shadow-md outline-none py-2"
              >
                <option>Select option</option>
                {vendors.length >= 1 &&
                  vendors.map((vendor: any, index: number) => (
                    <option value={vendor.id} key={index}>
                      {vendor.vendor_name}
                    </option>
                  ))}
              </select>
            </div>
          </div>
        )}
        {category && (
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-secend_text max-lg:text-white max-lg:font-light font-serif text-md py-2"
            >
              Category
            </label>
            <select
              onChange={handelchange}
              id="category"
              name="category"
              className="block w-full my-2 text-secend_text rounded-md shadow-md outline-none py-2"
            >
              <option>Select option</option>
              {categories.length >= 1 &&
                categories.map((cat: any, index: number) => (
                  <option value={cat.title} key={index}>
                    {cat.title}
                  </option>
                ))}
            </select>
          </div>
        )}
        {inputs &&
          inputs.map((input: { [key: string]: string }, index: number) => (
            <div key={index}>
              <label
                htmlFor={input.title}
                className="block text-sm font-medium dark:text-secend_text   font-serif text-md py-2"
              >
                {input.title}
              </label>
              <input
                id={input.title}
                className="p-4 duration-150 outline-none focus:valid:border-green-400 focus:invalid:border-red-400 border-2 border-secend_text dark:border-gray-300 my-2 w-full rounded-md text-sm text-black dark:text-gray-700 shadow-sm"
                name={input.name}
                type={input.type}
                placeholder={input.placeholder}
                onChange={handelchange}
              />
              <div>
                {errors[input.name] &&
                  Array.isArray(errors[input.name]) &&
                  errors[input.name].map((error: string, index: number) => (
                    <p
                      key={index}
                      className="px-2 py-2 w-full rounded-md bg-red-500 text-white"
                    >
                      {error}
                    </p>
                  ))}
              </div>
            </div>
          ))}
        {pathname !== "/signin" ? (
          image_or_images ? (
            <Input_Image image={image} setimage={setimage} />
          ) : (
            <Input_Images images={images} setimages={setimages} />
          )
        ) : (
          ""
        )}
        <input
          className="p-4 px-12 my-4 mx-2 hover:scale-105 hover:bg-transparent border border-transparent cursor-pointer duration-300 hover:border-orange-400 rounded-md block bg-orange-400 dark:text-white w-fit lg:ml-auto"
          type="submit"
          value={`${pathname == "/signin" ? "Sign" : "Add"}`}
        />
      </form>
    </>
  );
}
