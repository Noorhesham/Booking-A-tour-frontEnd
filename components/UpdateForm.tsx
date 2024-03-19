"use client";

import { update } from "@/actions/update";
import { UpdateSchema } from "@/schemas";
import { UserProp } from "@/types/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { BiLoaderCircle } from "react-icons/bi";
import { z } from "zod";
import FormError from "./FormError";

const UpdateForm = ({ user }: { user: UserProp }) => {
  const { register, reset, handleSubmit } = useForm<z.infer<typeof UpdateSchema>>({
    resolver: zodResolver(UpdateSchema),
    defaultValues: { name: user.name, email: user.email },
  });
  const router = useRouter();
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();
  const onSubmit = (data: z.infer<typeof UpdateSchema>) => {
    startTransition(async () => {
      await update(data)
        .then((data) => {
          console.log(data);
          if (data.error) {
            reset();
            setError(data.message);
          } else router.refresh();
        })
        .catch(() => setError("something went wrong !"));
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form form-user-data">
      <div className="form__group">
        <label htmlFor="name" className="form__label">
          Name
        </label>
        <input type="text" id="name" className="form__input" {...register("name")} required />
      </div>

      <div className="form__group ma-bt-md">
        <label htmlFor="email" className="form__label">
          Email address
        </label>
        <input type="email" id="email" className="form__input" {...register("email")} required name="email" />
      </div>

      <div className="form__group form__photo-upload">
        <img src={`/img/users/${user.photo}`} alt="User photo" className="form__user-photo" />
        <input type="file" className="form__upload" accept="image/*" id="photo" name="photo" />
        <label htmlFor="photo">Choose new photo</label>
      </div>

      <div className="form__group right">
        <button disabled={isPending} className="btn btn--small btn--green">
          {isPending ? <BiLoaderCircle className=" animate-spin" /> : "Save settings"}
        </button>
      </div>
      {error && <FormError error={error}/>}
    </form>
  );
};

export default UpdateForm;
