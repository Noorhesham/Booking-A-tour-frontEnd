"use server";
import { API_URL } from "@/constants/constants";
import { UpdatePasswordSchema } from "@/schemas";
import { cookies } from "next/headers";
import { z } from "zod";
export const updatePass = async (values: z.infer<typeof UpdatePasswordSchema>) => {
  const validateFields = UpdatePasswordSchema.safeParse(values);
  if (!validateFields.success) return { error: "invalid fields!" };
  const { passwordConfirm, passwordCurrent, password } = validateFields.data;
  try {
    const token = cookies().get("jwt")?.value;
    const res = await fetch(`${API_URL}/users/updateMyPassword`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ passwordConfirm, passwordCurrent, password }),
      credentials: "include",
    }).then((res) => res.json());
    console.log(res);
    cookies().set('jwt',res.token)
    return res;
  } catch (err: any) {
    if (err.message === "Failed to fetch")
      err.message = `Unable to reach the server. Please check your internet connection...`;
    throw err;
  }
};
