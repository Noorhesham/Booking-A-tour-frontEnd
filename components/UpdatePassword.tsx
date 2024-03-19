"use client";
import { updatePass } from "@/actions/updatePass";
import { UpdatePasswordSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormError from "./FormError";

const UpdatePassword = () => {
  const { register, reset, handleSubmit, formState } = useForm<z.infer<typeof UpdatePasswordSchema>>({
    resolver: zodResolver(UpdatePasswordSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const onSubmit = (data: z.infer<typeof UpdatePasswordSchema>) => {
    startTransition(async () => {
      await updatePass(data)
        .then((data) => {
          console.log(data);
          if (data.error) {
            reset();
            setError(data.message);
          }
        })
        .catch(() => setError("something went wrong !"));
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form form-user-password">
      <div className="form__group">
        <label htmlFor="password-current" className="form__label">
          Current password
        </label>
        <input
          {...register("passwordCurrent")}
          type="password"
          id="password-current"
          className="form__input"
          placeholder="••••••••"
        />
        {formState.errors.passwordCurrent?.message && <FormError error={formState.errors.passwordCurrent.message} />}
      </div>

      <div className="form__group">
        <label htmlFor="password" className="form__label">
          New password
        </label>
        <input type="password" id="password" className="form__input" placeholder="••••••••" {...register("password")} />
        {formState.errors.password?.message && <FormError error={formState.errors.password.message} />}
      </div>

      <div className="form__group ma-bt-lg">
        <label htmlFor="password-confirm" className="form__label">
          Confirm password
        </label>
        <input
          type="password"
          id="password-confirm"
          className="form__input"
          placeholder="••••••••"
          {...register("passwordConfirm")}
        />
        {formState.errors.passwordConfirm?.message && <FormError error={formState.errors.passwordConfirm.message} />}
      </div>

      <div className="form__group right">
        <button className="btn btn--small btn--green btn--save-password">Save password</button>
      </div>
      {error && <FormError error={error} />}
    </form>
  );
};

export default UpdatePassword;
