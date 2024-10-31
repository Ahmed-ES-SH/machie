"use client";
import React, { useState, useEffect, useContext, createContext } from "react";
import { instance } from "../_components/Api/axios";
import localforage from "localforage";

const Data = createContext<any>(null);

export default function Data_provider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setproducts] = useState<any>([]);
  const [categories, setcategories] = useState<any>([]);
  const [currentuser, setcurrentuser] = useState<any>(null);
  const [bestsellers, setbestsellers] = useState<any>([]);
  const [newproducts, setnewproducts] = useState<any>([]);

  useEffect(() => {
    async function getData(
      api: string,
      setData: React.Dispatch<React.SetStateAction<any>>
    ) {
      const res = await instance.get(api);
      setData(res.data);
    }

    getData("/products", setproducts);
    getData("/categories", setcategories);
    getData("/user", setcurrentuser);
  }, []);

  useEffect(() => {
    setbestsellers(products.slice(0, 4));
    setnewproducts(products.slice(20, 30));
  }, [products]);

  useEffect(() => {
    localforage.setItem("newproducts", newproducts);
  }, [newproducts]);

  useEffect(() => {
    async function loadNewProducts() {
      const cachedNewProducts = await localforage.getItem("newproducts");
      if (cachedNewProducts) {
        setnewproducts(cachedNewProducts);
      }
    }
    loadNewProducts();
  }, []);

  return (
    <Data.Provider
      value={{
        products,
        bestsellers,
        newproducts,
        setproducts,
        categories,
        setcategories,
        currentuser,
      }}
    >
      {children}
    </Data.Provider>
  );
}

export function Use_data() {
  return useContext(Data);
}
