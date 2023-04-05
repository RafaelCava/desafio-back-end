export default {
  databaseUrl:
    process.env.DATABASE_URL || 'mysql://root:root@localhost:3306/jurishand',
  port: process.env.PORT || 3000,
}
