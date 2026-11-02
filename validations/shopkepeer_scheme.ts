import Joi from "joi";

export const schemeShopKepeer = Joi.object({
  // Name
  name: Joi.string().trim().min(3).max(100).required().messages({
    "string.base": "Name must be a string",
    "string.empty": "Name cannot be empty",
    "string.min": "Name must contain at least 3 characters",
    "string.max": "Name cannot exceed 100 characters",
    "any.required": "Name is required",
  }),

  // Email
  email: Joi.string().trim().email().required().messages({
    "string.base": "Email must be a string",
    "string.empty": "Email cannot be empty",
    "string.email": "Please enter a valid email address",
    "any.required": "Email is required",
  }),

  // Phone
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.base": "Phone number must be a string",
      "string.empty": "Phone number cannot be empty",
      "string.pattern.base": "Phone number must contain exactly 10 digits",
      "any.required": "Phone number is required",
    }),

  // Shop Name
  shopName: Joi.string().trim().min(3).max(150).required().messages({
    "string.base": "Shop name must be a string",
    "string.empty": "Shop name cannot be empty",
    "string.min": "Shop name must contain at least 3 characters",
    "string.max": "Shop name cannot exceed 150 characters",
    "any.required": "Shop name is required",
  }),

  // Shop Address
  shopAdress: Joi.string().trim().min(5).max(255).required().messages({
    "string.base": "Shop address must be a string",
    "string.empty": "Shop address cannot be empty",
    "string.min": "Shop address must contain at least 5 characters",
    "string.max": "Shop address cannot exceed 255 characters",
    "any.required": "Shop address is required",
  }),

  // City
  city: Joi.string().trim().min(2).max(100).required().messages({
    "string.base": "City must be a string",
    "string.empty": "City cannot be empty",
    "string.min": "City must contain at least 2 characters",
    "string.max": "City cannot exceed 100 characters",
    "any.required": "City is required",
  }),

  // State
  state: Joi.string().trim().min(2).max(100).required().messages({
    "string.base": "State must be a string",
    "string.empty": "State cannot be empty",
    "string.min": "State must contain at least 2 characters",
    "string.max": "State cannot exceed 100 characters",
    "any.required": "State is required",
  }),

  // Pincode
  pincode: Joi.string()
    .pattern(/^[0-9]{6}$/)
    .required()
    .messages({
      "string.base": "Pincode must be a string",
      "string.empty": "Pincode cannot be empty",
      "string.pattern.base": "Pincode must contain exactly 6 digits",
      "any.required": "Pincode is required",
    }),

  // Password
  password: Joi.string()
    .min(8)
    .max(128)
    .pattern(/^[A-Z]/, { name: "capital letter at the beginning" })
    .pattern(/[0-9]/, { name: "number" })
    .pattern(/[!@#$%^&*?]/, { name: "special character" })
    .required()
    .messages({
      "string.base": "Password must be a string",
      "string.empty": "Password cannot be empty",
      "string.min": "Password must contain at least 8 characters",
      "string.max": "Password cannot exceed 128 characters",
      "string.pattern.name": "Password must include a {{#name}}",
      "any.required": "Password is required",
    }),

  // Terms and Conditions
  check: Joi.boolean().valid(true).required().messages({
    "boolean.base": "Terms acceptance must be true or false",
    "any.only": "You must accept the terms and conditions",
    "any.required": "Please accept the terms and conditions",
  }),
});
