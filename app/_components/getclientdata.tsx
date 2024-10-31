import react, { useState, useEffect } from "react";
import { instance } from "./Api/axios";

const getClientDate = async (id: number) => {
  const res = instance.get(`/category/${id}`);
};
