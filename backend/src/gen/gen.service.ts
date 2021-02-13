import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import config from 'src/config/config';
import { EngineService } from 'src/engine/engine.service';
import { GenTexts, GenSrcType } from 'src/types';

@Injectable()
export class GenService {
  constructor(private engineService: EngineService) {}

  async getGeneratedText(srcData: GenSrcType): Promise<GenTexts> {
    console.log(srcData);
    console.log(srcData.option.model);
    const resGen: AxiosResponse<GenTexts> = await axios.post(
      config.path.genServerPath + '/api/gen',
      srcData,
    );
    const resSum = await axios.post(
      config.path.sumServerPath + '/api/sum',
      srcData.option,
    );
    const res = {
      ...resGen.data,
      ...resSum.data,
    };
    console.log(res);
    return res;
  }
}
