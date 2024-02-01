import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HelloService } from './hello.service';
import { CreateHelloDto } from './dto/create-hello.dto';
import { UpdateHelloDto } from './dto/update-hello.dto';

@Controller('hello')
export class HelloController {
  constructor(private readonly helloService: HelloService) { }

  @Post()
  create(@Body() createHelloDto: CreateHelloDto) {
    return this.helloService.create(createHelloDto);
  }

  @Get()
  findAll() {
    return this.helloService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.helloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHelloDto: UpdateHelloDto) {
    return this.helloService.update(+id, updateHelloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.helloService.remove(+id);
  }
}
// @Sse('stream')
// stream() {
//   return new Observable((observer) => {
//     observer.next({ data: { msg: 'aaa' } });

//     setInterval(() => {
//       observer.next({ data: { msg: 'bbb' } });
//     }, 2000);

//     setInterval(() => {
//       observer.next({ data: { msg: 'ccc' } });
//     }, 5000);
//   });
// }
