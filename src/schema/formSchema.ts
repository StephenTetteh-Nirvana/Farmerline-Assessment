import * as z from "zod/v4"

//Defining schema
export const formSchema = z.object({
  farmerId: z.string().max(4),
  firstName: z.string().min(2, "Please enter your first name"),
  lastName: z.string().min(2, "Please enter your last name."),
  region: z.string().min(5, "Please enter your region (eg.Central)" ),
  district: z.string().min(5, "Please enter your district (eg.Accra)"),
  contactNumber: z.string().min(10, "Number should be at least 10 characters"),
  registrationDate: z.string(),
  productsPurchased: z.array(z.string())
})

export type FormData = z.infer<typeof formSchema>
export type SchemaErrors = Partial<Record<keyof FormData,string[]>> //setting errors state wth types that match incoming ZodErrors