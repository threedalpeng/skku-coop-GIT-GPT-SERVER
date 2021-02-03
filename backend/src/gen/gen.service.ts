import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import config from 'src/config/config';
import { EngineService } from 'src/engine/engine.service';
import { GenTexts, GenType } from 'src/types';

@Injectable()
export class GenService {
  constructor(private engineService: EngineService) {}

  async getGeneratedText(srcData: GenType): Promise<string[]> {
    console.log(srcData);
    const res: AxiosResponse<GenTexts> = await axios.post(
      config.path.engineServerPath + '/api/gen',
      srcData,
    );
    console.log(res.data);
    if (res.data.generatedTexts) {
      return res.data.generatedTexts;
    } else {
      return [];
    }
  }
}
