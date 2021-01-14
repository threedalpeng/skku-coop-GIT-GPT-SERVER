import { Global, Module } from '@nestjs/common';
import { EngineController } from './engine.controller';
import { EngineService } from './engine.service';

@Global()
@Module({
  controllers: [EngineController],
  providers: [EngineService],
  exports: [EngineService],
})
export class EngineModule {}
