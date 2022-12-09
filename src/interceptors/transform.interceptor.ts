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
    let values = {
      code: statusCode,
      time: new Date().toISOString(),
      path: context.switchToHttp().getRequest().url,
      method: context.switchToHttp().getRequest().method,
      host: context.switchToHttp().getRequest().hostname,
    }
    // return next.handle().pipe(map(data => ({
    //   ...values,
    //   data: data
    // })), catchError(err => {
    //   let status = 500;
    //   if (err.status) {
    //     status = err.status;
    //   }
    //   throw new HttpException(err.message, status)
    // })

    // );
    return next.handle().pipe(
      map(data => {
          let ignoreIntercept = [];

          const { query: { page }, url } = context.switchToHttp().getRequest();
          if (ignoreIntercept.includes(url.split('?')[0])) return data;
          let pageNumber = 1;
          let pageSize = 10;
          // if(page){
          //     pageNumber = page.number,
          //     pageSize = page.size
          // }
          // if(!page){  const page = { number: 1, size: 10 } };

          let responseData;
          let metaData;

          let responseObj = {
              ...values
          };

          if (data.message) {
              Object.assign(responseObj, { message: data.message });
              delete data.message;
          }

          if (data && data.data) {
              Object.assign(responseObj, { data: data.data });
          }
          else {
              responseData = { data }
              Object.assign(responseObj, { ...responseData });
          }

          if (data.meta) {
              metaData = { meta: data.meta };
              Object.assign(responseObj, { ...metaData });
          }
          else {
              metaData = { meta: {} }
              Object.assign(responseObj, { ...metaData });
          }

          return responseObj;

      }),
      catchError(err => {
          let status = 500;
          if (err.status) {
              status = err.status;
          }
          throw new HttpException(err.message, status)
      })
  );
  }
}