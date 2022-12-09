import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const configService = app.get(ConfigService);
  // const APP_PORT = configService.get<number>('APP_PORT');
  await app.listen('3000');
}
bootstrap();
