"use client";
import React, { useState } from "react";
import { Minus, Plus, Heart } from "lucide-react";
import { Usecart } from "@/app/context/Cart_context";
import { prodcttype } from "@/app/constants/types";

export default function CounterAndFavbtn({ product }: { product: any }) {
  const { cartitems, setcartitems, increasequantity, decreasequantity } =
    Usecart();
  const [isInCart, setIsInCart] = useState(false);
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showPopupwhishlist, setshowPopupwhishlist] = useState(false);
  const [showPopcard, setshowPopcard] = useState(false);

  const handleAddToCart = () => {
    setcartitems((prev: { [key: string]: any }[]) => {
      const items = prev ?? [];
      const itemExists = items.find((item) => item.title === product.title);

      if (itemExists) {
        // إذا كان المنتج موجودًا بالفعل، زيادة الكمية
        increasequantity(itemExists.title);
        setIsInCart(true);
        setshowPopcard(true);
        setTimeout(() => setshowPopcard(false), 2000);
        return items; // أعد العناصر بدون تغيير
      }

      // إذا لم يكن المنتج موجودًا، أضفه إلى السلة
      const newItem = { ...product, quantity: 1 };
      setIsInCart(true);
      setshowPopcard(true);
      setTimeout(() => setshowPopcard(false), 2000);
      return [...items, newItem]; // أعد العناصر الجديدة
    });
  };

  const handleDecreaseQuantity = () => {
    const itemExists = cartitems.find(
      (item: prodcttype) => item.title === product.title
    );
    if (itemExists) {
      decreasequantity(itemExists.title);
    }
  };

  const toggleWishlist = () => {
    setIsInWishlist((prev) => !prev);
    const message = isInWishlist
      ? "Removed from wishlist!"
      : "Added to wishlist!";
    setshowPopupwhishlist(true);
    setTimeout(() => setshowPopupwhishlist(false), 2000);
    // هنا يمكنك إضافة منطق إضافي لحفظ حالة المفضلة
  };

  return (
    <>
      <div className="max-md:flex-col max-md:items-start flex items-center gap-6 px-3 py-6 pb-4 border-b w-full">
        <div className="counter max-md:w-full max-md:ml-0 ml-4 flex items-center max-md:justify-between gap-3 px-2 py-3 border rounded-md dark:text-white dark:bg-secend_dash">
          <button onClick={handleDecreaseQuantity}>
            <Minus />
          </button>
          <p>
            {cartitems.find((item: prodcttype) => item.title === product.title)
              ?.quantity || 1}
          </p>
          <button onClick={handleAddToCart}>
            <Plus />
          </button>
        </div>
        <button
          className={`px-8 py-3 text-white text-center rounded-md ${
            isInCart ? "bg-gray-400" : "bg-green-400"
          } max-md:w-full`}
          onClick={handleAddToCart}
        >
          {isInCart ? "Added to Cart" : "Add to Cart"}
        </button>
        <div className="center dark:text-white" onClick={toggleWishlist}>
          <Heart className={`${isInWishlist ? "text-red-500" : ""}`} />
          <p>{isInWishlist ? "In wishlist" : "Add to wishlist"}</p>
        </div>
      </div>
      {showPopupwhishlist && (
        <div className="fixed top-0 left-0 right-0 flex justify-center mt-4">
          <div className="bg-green-600 text-white px-4 py-2 rounded-md">
            {isInWishlist
              ? "Product added to wishlist!"
              : "Product removed from wishlist!"}
          </div>
        </div>
      )}
      {showPopcard && (
        <div className="fixed top-0 left-0 right-0 flex justify-center mt-4">
          <div className="bg-green-600 text-white px-4 py-2 rounded-md">
            {isInCart
              ? "Product added to Card!"
              : "Product removed from wishlist!"}
          </div>
        </div>
      )}
    </>
  );
}
