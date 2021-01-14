import { Controller, Get } from '@nestjs/common';
import { EngineService } from './engine.service';

@Controller('engine')
export class EngineController {
  constructor(private readonly engineService: EngineService) {}

  @Get('/run')
  runEngine() {
    this.engineService.runEngine();
  }

  @Get('/stop')
  closeEngine() {
    this.engineService.closeEngine();
  }
}
