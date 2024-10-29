import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  // Create HTTP application
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3001);

  // Create gRPC Microservice
  const grpcApp = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'order', // Must match the package name in your .proto file
        protoPath: join(__dirname, './proto/order.proto'), // Path to your .proto file
        url: '0.0.0.0:50052', // Bind to 0.0.0.0 so that it is accessible across the Docker network
      },
    },
  );

  await grpcApp.listen();
}
bootstrap();
