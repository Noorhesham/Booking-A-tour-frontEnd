"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className=" flex flex-col  text-4xl min-h-[100vh] gap-5 justify-evenly items-center ">
      <h2 className=" text-red-500">{`Something went wrong!`}</h2>
      <h4 className=" text-5xl font-semibold text-gray-800">{`${error || ""} 😢😢`}</h4>
      <button
        className=" bg-red-500 text-gray-200 font-semibold py-2 px-4 rounded-md"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
