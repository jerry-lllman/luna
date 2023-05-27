import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { AllExceptionsFilter } from './common/exceptions/base.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 添加全局响应拦截器
  app.useGlobalInterceptors(new TransformInterceptor());

  // 添加错误处理
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(3000);
}
bootstrap();
