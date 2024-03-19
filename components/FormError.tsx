import React from "react";

const FormError = ({ error }: { error: string }) => {
  return <p className=" font-semibold text-red-500 mt-2 text-2xl">{error}</p>;
};

export default FormError;
