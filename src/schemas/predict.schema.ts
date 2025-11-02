import { z } from "zod";

export const predictSchema = z.object({
    age: z
        .number()
        .min(16, { message: "Age must be at least 16" })
        .max(100, { message: "Age must be at most 100" }),
    default: z
        .boolean({ message: "Default must be true or false" }),
    balance: z
        .number(),
    housing: z
        .boolean({ message: "Housing must be true or false" }),
    loan: z
        .boolean({ message: "Loan must be true or false" }),
    duration: z
        .number({ message: "Duration must be a number" })
        .min(1, { message: "Duration must be at least 1" }),
    campaign: z
        .number({ message: "Campaign must be a number" })
        .min(0, { message: "Campaign must be at least 0" }),
    pdays: z
        .number({ message: "Pdays must be a number" })
        .min(0, { message: "Pdays must be at least 0" }),
    previous: z
        .number({ message: "Previous must be a number" })
        .min(0, { message: "Previous must be at least 0" }),
    job_id: z
        .number({ message: "Job is required" })
        .min(1, { message: "Job is required" }),
    marital_id: z
        .number({ message: "Marital status is required" })
        .min(1, { message: "Marital status is required" }),
    education_level_id: z
        .number({ message: "Education level is required" })
        .min(1, { message: "Education level is required" }),
    contact_id: z
        .number({ message: "Contact is required" })
        .min(1, { message: "Contact is required" }),
    contact_date: z
        .string({ message: "Date is required" })
        .refine((val) => !isNaN(Date.parse(val)), {
            message: "Invalid date",
        }),
    poutcome_id: z
        .number({ message: "Poutcome is required" })
        .min(1, { message: "Poutcome is required" }),
});
