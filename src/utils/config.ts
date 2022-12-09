import dotenv from "dotenv";
dotenv.config();

export const DATABASE_HOST_NAME = process.env.DB_HOST;
export const DATABASE_NAME = process.env.DB_NAME;
export const DATABASE_USERNAME = process.env.DB_USERNAME;
export const DATABASE_PASSWORD = process.env.DB_PASSWORD;
export const DATABASE_PORT = process.env.DB_PORT;

export const PORT = process.env.APP_PORT;