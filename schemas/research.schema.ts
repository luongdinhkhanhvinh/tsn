import { z } from "zod";

export const formResearchSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters.")
    .max(50, "Full name must be at most 50 characters."),
  nickname: z
    .string()
    .max(50, "Nickname must be at most 50 characters.")
    .optional(),
  gender: z.string().min(1, "Gender is required."),
  day: z
    .string()
    .min(1, "Day is required.")
    .max(2, "Day must be at most 2 characters."),
  month: z
    .string()
    .min(1, "Month is required.")
    .max(2, "Month must be at most 2 characters."),
  year: z
    .string()
    .min(4, "Year must be 4 characters.")
    .max(4, "Year must be 4 characters."),
  checkCompatibility: z.boolean(),
  partnerName: z
    .string()
    .max(50, "Partner name must be at most 50 characters.")
    .optional(),
  partnerDay: z
    .string()
    .max(2, "Partner day must be at most 2 characters.")
    .optional(),
  partnerMonth: z
    .string()
    .max(2, "Partner month must be at most 2 characters.")
    .optional(),
  partnerYear: z
    .string()
    .max(4, "Partner year must be at most 4 characters.")
    .optional(),
  checkPhoneNumbers: z.boolean(),
  phoneNumbers: z
    .string()
    .max(500, "Phone numbers must be at most 500 characters.")
    .optional(),
});

export interface IFormResearchSchema extends z.infer<typeof formResearchSchema> {}
