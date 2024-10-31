"use client";
import React, { useState, useEffect, useContext, createContext } from "react";
import { prodcttype } from "../constants/types";
import { useRouter } from "next/navigation";

const Cart = createContext<any>(null);

export default function Cart_provider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [initialState, setinitialState] = useState([]);
  const [cartitems, setcartitems] = useState<{ [key: string]: any }[] | any>(
    initialState
  );

  const router = useRouter();

  useEffect(() => {
    const items = localStorage.getItem("cartitems");
    if (items) {
      setcartitems(JSON.parse(items));
    }
  }, []);

  useEffect(() => {
    if (cartitems.length > 0) {
      localStorage.setItem("cartitems", JSON.stringify(cartitems));
    }
  }, [cartitems]);

  // دالة للحصول على كمية المنتج بناءً على العنوان
  function getquantity(title: string) {
    return (
      cartitems.find((item: { [key: string]: string }) => item.title === title)
        ?.quantity || 0 // تغيير القيمة الافتراضية إلى 0
    );
  }

  // دالة لإزالة منتج من السلة بناءً على العنوان
  function removeitem(title: string) {
    const updatedItems = cartitems.filter(
      (item: { [key: string]: string }) => item.title !== title
    );
    setcartitems(updatedItems);
  }

  // دالة لزيادة كمية المنتج بناءً على العنوان
  function increasequantity(title: string) {
    setcartitems((items: { [key: string]: any }[]) => {
      const itemExists = items.find((item) => item.title === title);
      if (itemExists) {
        return items.map((item) => {
          if (item.title === title) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      } else {
        // إذا لم يكن موجودًا، يمكن إضافة المنتج كمستجد
        return [...items, { title, quantity: 1 }]; // تأكد من وجود خاصية السعر
      }
    });
  }

  // دالة لتقليل كمية المنتج بناءً على العنوان
  function decreasequantity(title: string) {
    setcartitems((items: { [key: string]: any }[]) => {
      const item = items.find((item) => item.title === title);
      if (item) {
        if (item.quantity === 1) {
          // إذا كانت الكمية 1، قم بإزالته
          return items.filter((item) => item.title !== title);
        } else {
          // تقليل الكمية
          return items.map((item) => {
            if (item.title === title) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          });
        }
      }
      return items; // إذا لم يكن هناك منتج مطابق، ارجع نفس العناصر
    });
  }

  // دالة لحساب المجموع الكلي
  function gettotal() {
    const total = cartitems.reduce((total: number, item: any) => {
      const quantity = item.quantity || 0; // التأكد من أن الكمية صحيحة
      const price = !isNaN(parseFloat(item.price)) ? parseFloat(item.price) : 0;
      return total + quantity * price; // جمع السعر
    }, 0);

    return total.toFixed(2); // استخدم toFixed فقط عند إرجاع النتيجة
  }
  // دالة لمسح السلة
  function Clear_cart() {
    localStorage.removeItem("cartitems");
    setcartitems([]); // تأكد من تحديث حالة السلة
    router.refresh();
  }

  return (
    <Cart.Provider
      value={{
        cartitems,
        setcartitems,
        getquantity,
        increasequantity,
        decreasequantity,
        gettotal,
        Clear_cart,
      }}
    >
      {children}
    </Cart.Provider>
  );
}

export function Usecart() {
  return useContext(Cart);
}
