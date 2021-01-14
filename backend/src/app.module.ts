import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GenModule } from './gen/gen.module';
import { EngineModule } from './engine/engine.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', 'frontend', 'build'),
      exclude: ['/api*'],
    }),
    GenModule,
    EngineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
