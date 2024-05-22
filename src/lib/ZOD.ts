import { z } from "zod";

export const ZOD = {
  login: z.object({
    email: z.string().email().min(3, "email cannot be less than 3 characters").max(32, "email cannot be more than 32 characters "),
    password: z.string().min(8, "password cannot be less than 8 characters").max(32, "password cannot be more than 32 characters ")
  }),
  signup: z.object({
    fullName: z.string().min(3, "full name cannot be less than 3 characters").max(32, "full name cannot be more than 32 characters "),
    email: z.string().email().min(3, "email cannot be less than 3 characters").max(32, "email cannot be more than 32 characters "),
    password: z.string().min(8, "password cannot be less than 8 characters").max(32, "password cannot be more than 32 characters "),
    password_confirmation: z.string().min(1).max(20),
    agreeToUseCondition: z.boolean().refine((val) => val === true, {
      message: "Please agree to user agreement",
      path: ["agreeToUseCondition"]
    })
  }).refine((data) => data.password === data.password_confirmation, {
    message: "Passwords don't match",
    path: ["password_confirmation"],
  }),
  sendAMessage: z.object({
    email: z.string().email().min(3, "email cannot be less than 3 characters").max(32, "email cannot be more than 32 characters "),
    name: z.string().min(3, "name cannot be less than 3 characters").max(32, "name cannot be more than 32 characters "),
    phone: z.string().min(8, "phone cannot be less than 8 characters").max(32, "phone cannot be more than 32 characters "),
    city: z.string().min(3, "city cannot be less than 3 characters ").max(32, "city cannot be more than 32 characters "),
    sideNote: z.string().min(3, "city cannot be less than 3 characters ").max(255, "city cannot be more than 32 characters "),
    contactPermission: z.boolean().default(false)
  }),

} 