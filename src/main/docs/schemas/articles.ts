export const articlesSchema = {
  type: 'array',
  items: {
    $ref: '#/schemas/article',
  },
}
