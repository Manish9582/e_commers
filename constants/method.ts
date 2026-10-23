const numberReg: RegExp = /^[0-9]+$/;
const stringReg: RegExp = /^[a-zA-Z]+$/;
type DateData = {
  name: string;
  error: string;
};
export const CheckItString = (value: string, name: string) => {
  const data: DateData = {
    name: name,
    error: !stringReg.test(value) ? "Enter a valid string" : "",
  };
  return data;
};

export const checkItNumber = (value: string, name: string) => {
  const data: DateData = {
    name: name,
    error: !numberReg.test(value) ? "Enter a valid number" : "",
  };
  return data;
};

export const CheckLength = (
  value: string,
  name: string,
  min: number,
  max: number,
) => {
  const data: DateData = {
    name: name,
    error:
      max === value.length && value.length === min
        ? " "
        : `Length must be between ${min} and ${max} characters`,
  };
  return data;
};

export const AddToCartMehtod = () => {
  console.log("i am working");
};
