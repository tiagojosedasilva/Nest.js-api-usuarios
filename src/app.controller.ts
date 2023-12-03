import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { PrismaService } from './database/prisma.service';
import { stringify } from 'querystring';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private prisma: PrismaService
    ) {}

  @Get()
  async getHello(): Promise<string> {
    const user = await this.prisma.user.create({
      data: {
        name: "Tiago José da Silva",
        email: "tiago@jose",
        phone: "2222-2222"
      }
    });
    return stringify(user)
  }
}
