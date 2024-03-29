"use server";
import { API_URL } from "@/constants/constants";
import { cookies } from "next/headers";
export const getUser = async () => {
    const token=cookies().get('jwt')?.value
  const user = await fetch(`${API_URL}/users/me`,{headers: {
    'Authorization': `Bearer ${token}`
  }}).then((res) => res.json());
  return user?.data?.doc;
};
