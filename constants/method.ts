import { NextResponse } from "next/server";

export const AddToCartMehtod = () => {
  console.log("i am working");
};

export const ReponseController = (
  status: boolean,
  message: string,
  code: number,
  data?: object[],
  error?: object[],
) => {
  return NextResponse.json(
    {
      status,
      message,
      data,
      error,
    },
    {
      status: code,
    },
  );
};
