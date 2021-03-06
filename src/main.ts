import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(`\tš server run on port:\t${process.env.PORT}`);
  console.log(`\tš± mode:\t\t${process.env.NODE_ENV}`);
  console.log(`\tš» env file path:\t.env.${process.env.NODE_ENV}`);
  console.log(`\tš® enter with:\t\thttp://localhost:${process.env.PORT}`);
  console.log();
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidUnknownValues: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  await app.listen(process.env.PORT);
}
bootstrap();