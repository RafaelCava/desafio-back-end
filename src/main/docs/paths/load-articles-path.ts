export const loadArticlesPath = {
  get: {
    tags: ['Article'],
    summary: 'API to list all articles',
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
