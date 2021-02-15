import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import config from 'src/config/config';
import { GenTexts, GenSrcType } from 'src/types';

@Injectable()
export class GenService {
  async getGeneratedText(srcData: GenSrcType): Promise<GenTexts> {
    console.log(srcData);
    console.log(srcData.option.model);
    const resGen: AxiosResponse<GenTexts> = await axios.post(
      config.path.genServerPath + '/api/gen',
      srcData,
    );
    const res = {
      ...resGen.data,
    };
    console.log(res);
    return res;
  }
}
