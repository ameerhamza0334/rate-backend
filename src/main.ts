import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './utils/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const configService = app.get(ConfigService);
  // const APP_PORT = configService.get<number>('APP_PORT');
  console.log("post", PORT)
  await app.listen(PORT);
}
bootstrap();
