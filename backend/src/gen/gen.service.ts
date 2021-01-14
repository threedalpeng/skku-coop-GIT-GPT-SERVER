import { Injectable } from '@nestjs/common';
import { EngineService } from 'src/engine/engine.service';

@Injectable()
export class GenService {
  constructor(private engineService: EngineService) {}

  getGeneratedText(sourceText: string): string[] {
    const list = [];
    ['1', '2', '3'].forEach((element) => {
      list.push(sourceText + element);
    });
    console.log(list);
    return list;
  }
}
