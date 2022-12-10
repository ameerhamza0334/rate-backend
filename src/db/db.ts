import { DataSource } from "typeorm"
import { DATABASE_HOST_NAME, DATABASE_NAME, DATABASE_PASSWORD, DATABASE_PORT, DATABASE_USERNAME } from "../utils/config"

const AppDataSource = new DataSource({
    type: "postgres",
    host: DATABASE_HOST_NAME,
    port: Number(DATABASE_PORT),
    username: DATABASE_USERNAME,
    password: DATABASE_PASSWORD,
    database: DATABASE_NAME,
    logging: true,
    entities: [__dirname + '/../**/*.entity.{js,ts}']
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    });

export default AppDataSource

