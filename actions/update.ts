"use server";
import { API_URL } from "@/constants/constants";
import { UpdateSchema } from "@/schemas";
import { cookies } from "next/headers";
import { z } from "zod";
export const update = async (values: z.infer<typeof UpdateSchema>) => {
  const validateFields = UpdateSchema.safeParse(values);
  if (!validateFields.success) return { error: "invalid fields!" };
  const { email, name } = validateFields.data;
  try {
    const token = cookies().get("jwt")?.value;
    const res = await fetch(`${API_URL}/users/updateMe`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ email, name }),
      credentials: "include",
    }).then((res) => res.json());
    console.log(res);
    return res;
  } catch (err: any) {
    if (err.message === "Failed to fetch")
      err.message = `Unable to reach the server. Please check your internet connection...`;
    throw err;
  }
};
