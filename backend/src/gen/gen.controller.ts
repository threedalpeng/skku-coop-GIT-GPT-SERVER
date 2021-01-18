import { Body, Controller, Get, Post } from '@nestjs/common';
import { GenType } from 'src/types';
import { GenService } from './gen.service';

@Controller('gen')
export class GenController {
  constructor(private readonly genService: GenService) {}

  @Get()
  sayGen() {
    return 'Gen!';
  }

  @Post()
  getGeneratedTexts(@Body() textData: GenType) {
    return this.genService.getGeneratedText(textData);
  }
}
