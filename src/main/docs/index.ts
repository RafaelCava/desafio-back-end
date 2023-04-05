import paths from './paths'
import schemas from './schemas'

export default {
  openapi: '3.0.0',
  info: {
    title: 'Back End challenge',
    description: 'API developed for Back End challenge.',
    version: '2.0.0',
    contact: {
      name: 'Rafael Cavalcante',
      email: 'ra.facavalcante@hotmail.com',
      url: 'https://www.linkedin.com/in/rafael-cavalcantee/',
    },
  },
  servers: [
    {
      url: '/api',
    },
  ],
  tags: [
    {
      name: 'Article',
    },
  ],
  paths,
  schemas,
}
