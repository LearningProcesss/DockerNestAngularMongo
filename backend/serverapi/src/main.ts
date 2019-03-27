import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  app.enableCors();
  
  await app.listen(process.env.port);
}
// async function bootstrap() {
//   const app = await NestFactory.createMicroservice(AppModule, {
//     transport: Transport.RMQ,
//     options: {
//       urls: [`amqp://localhost:15672`],
//       queue: 'my_queue',
//       queueOptions: { durable: false },
//     }
//   });
  // app.listen(() => console.log('Microservice is listening'));
// }
bootstrap();
