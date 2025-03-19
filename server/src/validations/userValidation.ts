import Joi from "joi";

export const userAuthValidation=Joi.object({
    name: Joi.string().min(3).max(30).required().messages({
        "string.base": "Name should be a type of text",
        "string.empty": "Name is required",
        "string.min": "Name should have a minimum length of {#limit}",
        "string.max": "Name should have a maximum length of {#limit}",
        "any.required": "Name is required",
      }),
    phone: Joi.string()
    .pattern(new RegExp("^((\\+91)|(91))?[6-9]\\d{9}$"))
    .messages({
      "string.base": "Phone number should be a type of text",
      "string.pattern.base": "Enter a valid phone number with country code"
  }),
  email: Joi.string()
  .email({ minDomainSegments: 2, tlds: { allow: [ "com", "net", "org", "edu", "gov", "io", "co", "biz", "info", "me", 
    "tv", "us", "uk", "ca", "de", "jp", "fr", "au", "in", "cn", "br",
    "ru", "za", "mx", "es", "nl", "se", "no", "fi", "dk", "ch", "it",
    "pl", "gr", "tr", "kr", "ar", "cl", "nz", "sg", "hk", "my", "th",
    "id", "vn", "ph", "sa", "ae", "il", "eg", "pk", "ng", "ke", "ug","services"] } }),
    password: Joi.string()
    .messages({
      "string.base": "Password should be a type of text",
    }),
    status: Joi.string()
    .valid("student", "employee") 
    .required()
    .messages({
      "any.only": "Status must be either 'student' or 'employee'",
     
    }),
})

export const userLoginValidation=Joi.object({
    password: Joi.string()
    .messages({
      "string.base": "Password should be a type of text",
    }),
    phone: Joi.string()
    .pattern(new RegExp("^((\\+91)|(91))?[6-9]\\d{9}$"))
    .messages({
      "string.base": "Phone number should be a type of text",
      "string.pattern.base": "Enter a valid phone number with country code"
  }),   
});