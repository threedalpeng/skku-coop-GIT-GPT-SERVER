import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import config from 'src/config/config';
import { EngineService } from 'src/engine/engine.service';

type GenTexts = {
  generated_texts: string[];
};

@Injectable()
export class GenService {
  constructor(private engineService: EngineService) {}

  async getGeneratedText(sourceText: string): Promise<string[]> {
    const res: AxiosResponse<GenTexts> = await axios.post(
      config.path.engineServerPath + '/api/gen',
      {
        seedText: sourceText,
      },
    );
    return res.data.generated_texts;
  }
}
