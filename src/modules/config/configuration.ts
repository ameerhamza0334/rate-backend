export default () => ({
  db_port: parseInt(process.env.DB_PORT),
  db_host: String(process.env.DB_HOST),
  db_name: String(process.env.DB_NAME),
  db_user: String(process.env.DB_USER),
  db_password: String(process.env.DB_PASSWORD),
});
