import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

export interface Response<T> {
  data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> {
    let { statusCode } = context.switchToHttp().getResponse();
    return next.handle().pipe(map(data => ({
      code: statusCode,
      time: new Date().toISOString(),
      path: context.switchToHttp().getRequest().url,
      method: context.switchToHttp().getRequest().method,
      host: context.switchToHttp().getRequest().hostname,
      data: data
    })), catchError(err => {
      let status = 500;
      if (err.status) {
        status = err.status;
      }
      throw new HttpException(err.message, status)
    })

    );
  }
}