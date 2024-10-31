"use client";
import React, { useEffect, useState } from "react";
import { instance } from "../Api/axios";
import { useParams } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  params: { id: string };
};

export default function OrderPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const headers = ["id", "title", "images", "price", "quantity"];

  const [data, setdata] = useState([]);
  const [orderstate, setorderstate] = useState<boolean | null>(null);

  useEffect(() => {
    const res = instance
      .get(`/order/${id}`)
      .then((res) => setdata(res.data.data.order));
  }, [id]);

  const handeledait = async (e: any) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("order_status", orderstate ? "1" : "0"); // تأكد من إرسال قيمة منطقية صحيحة
      const res = await instance.post(`/order/${id}`, form);
      router.push("/dashbord/orders");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-full h-full mt-16 px-1">
        <div className="rounded-sm border h-fit overflow-y-auto border-gray-200/30 text-black mt-2">
          <table className="min-w-full divide-y-2 dark:divide-gray-300/20 divide-black/60  dark:bg-secend_dash bg-light_bg text-sm">
            <thead className="ltr:text-left rtl:text-right">
              <tr>
                {headers.map((head, index) => (
                  <th
                    className="whitespace-nowrap dark:text-secend_text px-4 py-2 font-medium text-left "
                    key={index}
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="dark:odd:divide-y dark:divide-gray-400/50 dark:bg-secend_dash bg-light_bg">
              {data.map((order: any, index) => (
                <tr key={index} className="text-left odd:bg-purple-700/30">
                  <td className="whitespace-nowrap text-cnter  px-4 py-2 font-medium dark:text-secend_text">
                    {order.id}
                  </td>
                  <td className="whitespace-nowrap text-cnter  px-4 py-2 font-medium dark:text-secend_text">
                    {order.title}
                  </td>
                  <td className="whitespace-nowrap text-cnter  px-4 py-2 font-medium dark:text-secend_text">
                    <div className="flex items-center gap-2">
                      {order && (
                        <Image
                          width={1024}
                          height={1280}
                          src={order.images[0]}
                          alt="image"
                          className="w-[80px] h-[80px] rounded-md shadow-md"
                        />
                      )}
                    </div>
                  </td>
                  <td className="whitespace-nowrap text-cnter  px-4 py-2 font-medium dark:text-secend_text">
                    {order.price}
                  </td>
                  <td className="whitespace-nowrap text-cnter  px-4 py-2 font-medium dark:text-secend_text">
                    {order.quantity}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <select
          onChange={(e) => setorderstate(e.target.value === "true")}
          className=" outline-none w-full mt-6 m-auto p-2 py-6  rounded-md dark:bg-secend_dash dark:text-white"
        >
          <option>state of order</option>
          <option value="false">Pending</option>
          <option value="true">Compleated</option>
        </select>
        <button
          onClick={handeledait}
          className="p-4 px-12 my-4 mx-2 hover:scale-105 hover:bg-transparent border border-transparent cursor-pointer duration-300 hover:border-orange-400 rounded-md block bg-orange-400 dark:text-white w-fit lg:ml-auto"
        >
          Done
        </button>
      </div>
    </>
  );
}
