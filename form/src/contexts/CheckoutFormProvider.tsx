import * as z from 'zod';

export const PersonalInfoSchema = z.object({
  fullName: z
    .string({ message: 'Full name is required!' })
    .min(1, { message: 'Full name must be longer than 1' }),
  address: z.string().min(1, { message: 'Please provide your address!' }),
  city: z.string().min(1, { message: 'City is required!' }),
  postcode: z.string().min(1, { message: 'Postal code is required!' }),
  country: z.string().length(2),
  phone: z.string().min(1, { message: 'Phone is required!' }),
  birthdate: z.date(),
});

export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;
