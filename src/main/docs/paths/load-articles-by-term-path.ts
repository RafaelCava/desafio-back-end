export const loadArticlesByTermPath = {
  get: {
    tags: ['Article'],
    summary: 'API to list articles by term',
    parameters: [
      {
        in: 'path',
        name: 'term',
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
