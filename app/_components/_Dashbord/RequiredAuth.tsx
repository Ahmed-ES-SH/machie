"use client";
import React, { useEffect, useState } from "react";
import ForbiddenPage from "./ForbiddenPage";
import { useRouter } from "next/navigation";
import Loading from "../Loading";
import { Use_data } from "@/app/context/Data_context";

const RequiredAuth = ({ children }: { children: React.ReactNode }) => {
  const { currentuser } = Use_data();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  return children;
};

export default RequiredAuth;
