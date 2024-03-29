import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { health } from './routers/routes';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get(health.HEALTH)
    getHealth(): string {
        return this.appService.getHealth();
    }
}
