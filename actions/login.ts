"use server";
import { API_URL } from "@/constants/constants";
import { LoginSchema } from "@/schemas";
import { cookies } from "next/headers";
import { z } from "zod";
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(values);
  if (!validateFields.success) return { error: "invalid fields!" };
  const { email, password } = validateFields.data;
  const requestOptions = {
    method: "POST",
    body: { email, password },
  };
  console.log(requestOptions);
  try {
    const res = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    }).then((res) => res.json());
    console.log(res);
    cookies().set("jwt", res.token);
    return res;
  } catch (err:any) {
    if (err.message === "Failed to fetch")
      err.message = `Unable to reach the server. Please check your internet connection...`;
    throw err;
  }
};
