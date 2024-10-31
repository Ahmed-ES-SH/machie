"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { instance } from "../_components/Api/axios";
import { useRouter } from "next/navigation";

const variablesContext = createContext<any>(undefined);

// مزود السياق
export function VariablesProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [open, setopen] = useState("");
  const [opendropdown, setopendropdown] = useState("");
  const [currentuser, setcurrentuser] = useState("");
  const [opensidebar, setopensidebar] = useState(false);
  const [cal, setcal] = useState(false);
  const [shortmenue, setshortmenue] = useState(false);
  const [leftright, setleftright] = useState(false);
  const [width, setWidth] = useState(0); // نبدأ بالقيمة الافتراضية

  useEffect(() => {
    if (typeof window !== "undefined") {
      // التأكد من أن الكود يتم تشغيله على جانب العميل
      const handleResize = () => {
        setWidth(window.innerWidth);
      };

      // تعيين العرض عند التحميل لأول مرة
      setWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      // تنظيف المستمع عند إلغاء تركيب المكون
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <variablesContext.Provider
      value={{
        open,
        setopen,
        cal,
        setcal,
        setopensidebar,
        opensidebar,
        shortmenue,
        setshortmenue,
        leftright,
        setleftright,
        width,
        currentuser,
        setcurrentuser,
        opendropdown,
        setopendropdown,
      }}
    >
      {children}
    </variablesContext.Provider>
  );
}

export function useVariables() {
  return useContext(variablesContext);
}
