import { Controller, Get, Header, Param, Sse } from '@nestjs/common';
import { AppService } from './app.service';
import { Observable, interval, map } from 'rxjs';

export interface MessageEvent {
  data: string;
}


@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('/sse')
  // @Sse()
  // @Header('Content-type', 'text/event-stream')
  // sse(): Observable<any> {
  //   return interval(2000).pipe(map((_) => ({ data: 'hello world2' })));
  // }

  @Sse('/sse')
  sse(): Observable<MessageEvent> {
    return interval(2000).pipe(map((_) => {
      return { data:'hello world' }
    } ));
  }
}
