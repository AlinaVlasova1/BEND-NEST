import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {

  const cors = require('cors');

  const app = await NestFactory.create(AppModule);

 /* app.enableCors({
    origin: 'http://localhost:4200',
    methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    allowedHeaders: 'Content-Type, Accept',
    credentials: true,
  })*/
  app.use(cors());
  await app.listen(3000);
}
bootstrap();
