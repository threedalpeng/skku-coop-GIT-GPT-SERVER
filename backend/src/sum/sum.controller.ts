import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleSrcType, SumSrcType } from 'src/types';
import { SumService } from './sum.service';

@Controller('sum')
export class SumController {
  constructor(private readonly sumService: SumService) {}

  @Get()
  saySum() {
    return 'Sum!';
  }

  @Post('example')
  getExampleText(@Body() srcData: ExampleSrcType) {
    return this.sumService.getExampleText(srcData);
  }

  @Post('single')
  summarizeSingle(@Body() srcData: SumSrcType) {
    return this.sumService.summarizeSingle(srcData);
  }

  @Post('multi')
  summarizeMulti(@Body() srcData: SumSrcType) {
    return this.sumService.summarizeMulti(srcData);
  }
}
