import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { EngineService } from 'src/engine/engine.service';

type GenTexts = {
  texts: string[];
};

@Injectable()
export class GenService {
  constructor(private engineService: EngineService) {}

  async getGeneratedText(sourceText: string): Promise<string[]> {
    const res: AxiosResponse<GenTexts> = await axios.post(
      'http://localhost:19812/api/gen',
      {
        seedText: sourceText,
      },
    );
    return res.data.texts;
  }
}
