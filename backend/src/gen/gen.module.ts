import { Module } from '@nestjs/common';
import { EngineModule } from 'src/engine/engine.module';
import { GenController } from './gen.controller';
import { GenService } from './gen.service';

@Module({
  imports: [EngineModule],
  controllers: [GenController],
  providers: [GenService],
})
export class GenModule {}
