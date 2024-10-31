/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { instance } from "../../Api/axios";
import Image from "next/image";
import Loading from "../../Loading";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Edit, Trash } from "lucide-react";
import localforage from "localforage";

///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////
///////////////////////

interface typeorder {
  [key: string]: any;
}

const PaginatedTable: React.FC<{
  headers: string[];
  api: string;
  staticData: { [key: string]: any }[];
  apidelete: string;
}> = ({ headers, api, staticData, apidelete }) => {
  const [data, setdata] = useState<any>([]);
  const [refresh, setrefresh] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const currentdata = api == "" ? staticData : data;
  const totalPages = Math.ceil(currentdata.length / itemsPerPage);

  const handleClick = (page: any) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const currentItems = currentdata.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // useEffect(() => {
  //   const getdata = async () => {
  //     try {
  //       const cashdata = await localforage.getItem(api);
  //       if (cashdata) {
  //         setdata(cashdata);
  //       } else {
  //         const res = await instance.get(api).then((res) => setdata(res.data));
  //         localforage.setItem(api, res.data);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getdata();
  // }, []);

  useEffect(() => {
    localforage.setItem("data", data);
  }, []);

  async function hadledelete(apidelete: string, id: number) {
    try {
      const res = await instance.delete(`${apidelete}/${id}`);
      setdata((prevData: { [key: string]: any }) =>
        prevData.filter((item: any) => item.id !== id)
      );
      setrefresh((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  }

  console.log(data);

  return (
    <div className="rounded-sm border h-[500px] overflow-y-auto border-gray-200/30 text-black mt-2">
      <div className="overflow-x-auto rounded-t-lg">
        <table className="min-w-full divide-y-2 dark:divide-gray-300/20 divide-black/60  dark:bg-secend_dash bg-light_bg text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              {headers.map((head: string, index: number) => (
                <th
                  key={index}
                  className="whitespace-nowrap dark:text-secend_text px-4 py-2 font-medium text-left "
                >
                  {head}
                </th>
              ))}
              {api !== "" && (
                <th className="whitespace-nowrap dark:text-secend_text px-4 py-2 font-medium text-left">
                  Action
                </th>
              )}
            </tr>
          </thead>

          <tbody className="dark:odd:divide-y dark:divide-gray-400/50 dark:bg-secend_dash bg-light_bg">
            {currentItems.length >= 1 ? (
              currentItems.map((item: typeorder, index: number) => (
                <tr className="text-left odd:bg-purple-700/30" key={index}>
                  {headers.map((key: string, index: number) => (
                    <td
                      className="whitespace-nowrap text-cnter  px-4 py-2 font-medium dark:text-secend_text"
                      key={index}
                    >
                      {key == "image" ? (
                        <Image
                          width={1024}
                          height={1280}
                          src={item[key]}
                          alt="logo"
                          className="w-[60px] h-[60px] rounded-full"
                        />
                      ) : key == "images" ? (
                        <div className="flex items-center gap-2 max-w-[200px] overflow-hidden">
                          {item[key].map((src: string, index: number) => (
                            <Image
                              width={1024}
                              height={1280}
                              key={index}
                              src={src}
                              alt="alt"
                              className="w-[50px] h-[40px] rounded-sm"
                            />
                          ))}
                        </div>
                      ) : key == "img" ? (
                        <Image
                          width={1024}
                          height={1280}
                          src={item[key]}
                          alt="logo"
                          className="w-[60px] h-[50px] "
                        />
                      ) : item["created_at"] && key == "created_at" ? (
                        item[key].split("T")[0] +
                        " " +
                        item[key].split("T")[1].split(".")[0]
                      ) : item["updated_at"] && key == "updated_at" ? (
                        item[key].split("T")[0] +
                        " " +
                        item[key].split("T")[1].split(".")[0]
                      ) : key == "status" ? (
                        <p
                          className={`px-3  py-2 rounded-md dark:text-white text-center ${
                            item["status"] == true
                              ? "bg-red-400/20"
                              : "bg-green-400/20"
                          }`}
                        >
                          {item["status"] ? "Compleate" : "Pending"}
                        </p>
                      ) : key == "order" ? (
                        <div className="flex items-center gap-2 ">
                          <p>({item[key].length})</p>
                          {item[key].map(
                            (
                              order: { [key: string]: string },
                              index: number
                            ) => {
                              return (
                                <div key={index} className="">
                                  {order.images && (
                                    <Image
                                      key={index}
                                      src={order.images[0]}
                                      alt="alt"
                                      width={1024}
                                      height={1280}
                                      className="w-[20px] h-[20px] rounded-full"
                                    />
                                  )}
                                </div>
                              );
                            }
                          )}
                        </div>
                      ) : key == "order_status" ? (
                        item[key] == true ? (
                          <p
                            className={`px-3  py-2 rounded-md dark:text-white text-center bg-green-400`}
                          >
                            Compleate
                          </p>
                        ) : (
                          <p
                            className={`px-3  py-2 rounded-md dark:text-white text-center bg-red-400`}
                          >
                            pending
                          </p>
                        )
                      ) : (
                        item[key]
                      )}
                    </td>
                  ))}
                  {api !== "" && (
                    <td>
                      <div className="flex items-center gap-3">
                        <Link
                          className="text-sky-500"
                          href={`/dashbord${api}/${item["id"]}`}
                        >
                          <Edit />
                        </Link>
                        <button
                          onClick={() => hadledelete(apidelete, item["id"])}
                          className="text-red-500"
                        >
                          <Trash />
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={12} className="bg-main_dash">
                  <Loading />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="rounded-b-lg border-t border-gray-200 px-4 py-2">
        <ol className="flex justify-end gap-1 text-xs font-medium">
          <li>
            <button
              onClick={handlePrev}
              className={`inline-flex size-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180 ${
                currentPage === 1 ? "cursor-not-allowed opacity-50" : ""
              }`}
              disabled={currentPage === 1}
            >
              <span className="">
                <ArrowLeft width={12} />
              </span>
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, index) => (
            <li key={index}>
              <button
                onClick={() => handleClick(index + 1)}
                className={`block size-8 rounded border ${
                  currentPage === index + 1
                    ? "border-blue-600 bg-blue-600 "
                    : "border-black/50 dark:bg-main_dash bg-light_bg "
                } dark:text-white text-center leading-8`}
              >
                {index + 1}
              </button>
            </li>
          ))}

          <li>
            <button
              onClick={handleNext}
              className={`inline-flex size-8 items-center justify-center rounded border border-black/50 dark:bg-secend_dash bg-light_bg dark:text-white rtl:rotate-180 ${
                currentPage === totalPages
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              disabled={currentPage === totalPages}
            >
              <span className="">
                <ArrowRight width={12} />
              </span>
            </button>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default PaginatedTable;
