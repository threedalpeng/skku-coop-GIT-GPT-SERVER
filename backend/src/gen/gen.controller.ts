import { Body, Controller, Get, Post } from '@nestjs/common';
import { GenService } from './gen.service';

@Controller('gen')
export class GenController {
  constructor(private readonly genService: GenService) {}

  @Get()
  sayGen() {
    return 'Gen!';
  }

  @Post()
  getGeneratedTexts(@Body() textData: { seedText: string }) {
    return this.genService.getGeneratedText(textData.seedText);
  }
}
