import { DataSource } from "typeorm"
export default new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345678',
    database: 'human_talent',
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    migrations: ['src/domain/migrations/*{.ts,.js}']
})

