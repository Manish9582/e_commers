import { ReponseController } from "@/constants/method";
import { schemeShopKepeer } from "@/validations/shopkepeer_scheme";
import { NextRequest } from "next/server";

export const ShopKepeerMethod = (data: NextRequest) => {
  try {
    const { error, value } = schemeShopKepeer.validate(data, {
      abortEarly: false,
      stripUnknown: true,
    });

    const Error: object[] = [];
    if (error) {
      error?.details.map((data) => {
        Error.push({
          name: data.path[0],
          message: data.message,
        });
      });
      return ReponseController(true, "All are ok", 422, [], Error);
    }

    console.log("validate value return", value);
    return ReponseController(true, "All are ok", 200);
  } catch {
    return ReponseController(false, "All are not ok", 500);
  }
};
