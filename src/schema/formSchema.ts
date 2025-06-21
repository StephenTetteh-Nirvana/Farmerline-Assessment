import * as z from "zod/v4"

//Defining schema
export const formSchema = z.object({
  name: z.string().min(5, "Name should be at least 5 characters"),
  location: z.string().min(2)
  .refine((val) => val.includes(","), {
    message: "Please separate region and district with a comma (e.g. Ashanti, Kumasi)",
  })
  .transform((val) => {
    const parts = val.split(",").map((part) => part.trim());
    const [region, district] = parts;
    return `${district}, ${region}`;
  }),
  contactNumber: z.string().min(10, "Number should be at least 10 characters"),
  registrationDate: z.string()
})

export type FormData = z.infer<typeof formSchema>
export type SchemaErrors = Partial<Record<keyof FormData,string[]>> //setting errors state wth types that match incoming ZodErrors