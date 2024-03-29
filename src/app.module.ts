import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { typeOrmConfigAsync } from './config/typeorm.config'
import { TransformInterceptor } from './domain/interceptors/transform.interceptor'
import { Utilities } from './utils/utilities'
import { EmployeeModule } from './modules/employee.module'
import { AuthModule } from './modules/auth.module'
import { UserModule } from './modules/users.module'
import { AuthMiddleware } from './domain/middlewares/auth.middleware'
import { EmployeeController } from './controllers/employee/employee.controller';

@Module({
    imports: [
        TypeOrmModule.forRootAsync(typeOrmConfigAsync),
        AuthModule,
        UserModule,
        EmployeeModule
    ],
    controllers: [AppController, EmployeeController],
    providers: [
        AppService,  
        Utilities,
        {
            provide: APP_INTERCEPTOR,
            useClass: TransformInterceptor,
        }
    ]
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(AuthMiddleware)
        .exclude('/v1/auth/login')
        .forRoutes('*')
    }
}
