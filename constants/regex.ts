const numberReg: RegExp = /^[0-9]+$/;
const stringReg: RegExp = /^[a-z A-Z]+$/;

export const CheckItString = (value: string, name: string) => {
  return {
    name: name,
    error: !stringReg.test(value) ? "Enter a valid string" : "",
  };
};

export const checkItNumber = (value: string, name: string) => {
  return {
    name: name,
    error: !numberReg.test(value) ? "Enter a valid number" : "",
  };
};

export const CheckLength = (
  value: string,
  name: string,
  min: number,
  max: number,
) => {
  return {
    name: name,
    error:
      max === value.length && value.length === min
        ? " "
        : `Length must be between ${min} and ${max} characters`,
  };
};

const AcceptGmailOnly: RegExp = /^[a-z0-9.]+\@gmail\.com$/;
export const CheckEmail = (value: string, name: string) => {
  return {
    name: name,
    error: !AcceptGmailOnly.test(value)
      ? "Enter tha correct gmail formate"
      : "",
  };
};

export const PasswordValidate = (value: string, name: string) => {
  if (!/^[A-Z]/.test(value)) {
    return {
      name,
      error: "First Letter is capital",
    };
  }

  if (!/[0-9]/.test(value)) {
    return {
      name,
      error: "Number also required",
    };
  }

  if (!/[!@#$%^&*?]/.test(value)) {
    return {
      name,
      error: "One symblem is required",
    };
  }

  if (value.length < 8) {
    return {
      name,
      error: "Password must be at least 8 characters long",
    };
  }
};
