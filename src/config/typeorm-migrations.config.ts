import { DataSource } from "typeorm"
export default new DataSource({
    type: 'postgres',
    host: 'human-talent-postgres',
    port: 5432,
    username: 'postgres',
    password: '123456789',
    database: 'human_talent',
    entities: [__dirname + "/../**/*.entity{.ts,.js}"],
    migrations: ['src/domain/migrations/*{.ts,.js}']
})

