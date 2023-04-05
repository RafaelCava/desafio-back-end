export const articleSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'number',
    },
    title: {
      type: 'string',
    },
    author: {
      type: 'string',
    },
    content: {
      type: 'string',
    },
    date: {
      type: 'string',
    },
    category: {
      type: 'string',
    },
  },
}
