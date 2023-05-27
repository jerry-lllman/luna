import { CallHandler, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

interface Response<T> {
  data: T
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context, next: CallHandler): Observable<Response<T>> {
    return next.handle().pipe(
      map(data => ({
        data,
        status: 0,
        message: 'success',
        extra: {},
        success: true
      }))
    )
  }
}