import z from 'zod'

const BaseSchema = z.object({
  description: z.string().trim().min(3).max(255),
  price: z.string(),
  category: z.string().trim().min(3).max(255),
  type: z.enum(['income', 'outcome']),
})

export const NewTransactionSchema = BaseSchema

export type NewTransactionSchema = z.infer<typeof NewTransactionSchema>
export type NewTransactionSchemaInput = z.input<typeof NewTransactionSchema>
