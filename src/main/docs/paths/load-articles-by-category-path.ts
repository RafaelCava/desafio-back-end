export const loadArticlesByCategoryPath = {
  get: {
    tags: ['Article'],
    summary: 'API to list articles by category',
    parameters: [
      {
        in: 'path',
        name: 'category',
        required: true,
        schema: {
          type: 'string',
        },
      },
    ],
    responses: {
      200: {
        description: 'Success',
        content: {
          'application/json': {
            schema: {
              $ref: '#/schemas/articles',
            },
          },
        },
      },
    },
  },
}
