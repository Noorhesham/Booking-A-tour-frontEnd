"use server";
import { API_URL } from "@/constants/constants";
import { cookies } from "next/headers";
export const logout = async () => {
  const res = await fetch(`${API_URL}/users/logout`).then((res) => res.json());
  console.log(res);
  cookies().delete('jwt')
  return res;
};
