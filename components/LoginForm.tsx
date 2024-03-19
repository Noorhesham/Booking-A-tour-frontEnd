"use client";

import { useForm } from "react-hook-form";
import Heading from "./Heading";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/schemas";
import { login } from "@/actions/login";
import { useState, useTransition } from "react";
import { BiLoaderCircle } from "react-icons/bi";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const { reset, register, handleSubmit } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
  });
  const router=useRouter()
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const onsubmit = async (data: z.infer<typeof LoginSchema>) => {
    startTransition(async () => {
      await login(data)
        .then((data) => {
          console.log(data);
          if (data.error) {
            reset();
            setError(data.message);
          }else router.push('/')
        })
        .catch(() => setError("something went wrong !"));
    });
  };

  return (
    <div className="login-form">
      <Heading text="Log into your account" />
      <form onSubmit={handleSubmit(onsubmit)} className="form">
        <div className="form__group">
          <label htmlFor="email" className="form__label">
            Email address
          </label>
          <input {...register("email")} type="email" id="email" className="form__input" />
        </div>
        <div className="form__group">
          <label htmlFor="password" className="form__label">
            Password
          </label>
          <input {...register("password")} type="password" id="password" className="form__input" />
        </div>
        <div className="form__group">
          <button type="submit" className="btn btn--green">
            {isPending ? <BiLoaderCircle className=" animate-spin" /> : "Login"}
          </button>
        </div>
        {error && <p className=" font-semibold text-red-500 text-2xl">{error}</p>}
      </form>
    </div>
  );
};

export default LoginForm;
