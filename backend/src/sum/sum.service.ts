import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import config from 'src/config/config';
import { ExampleSrcType, ExampleText, SumSrcType } from 'src/types';

@Injectable()
export class SumService {
  async getExampleText(srcData: ExampleSrcType): Promise<ExampleText> {
    const resExample: AxiosResponse<ExampleText> = await axios.post(
      config.path.singleSumServerPath + '/api/example',
      srcData,
    );
    const res = {
      ...resExample.data,
    };
    console.log(res);
    return res;
  }

  async summarizeSingle(srcData: SumSrcType) {
    const resSingle = await axios.post(
      config.path.singleSumServerPath + '/api/single',
      srcData,
    );
    const res = {
      ...resSingle.data,
    };
    console.log(res);
    return res;
  }

  async summarizeMulti(srcData: SumSrcType) {
    const resMulti = await axios.post(
      config.path.multiSumServerPath + '/api/multi',
      srcData,
    );
    const res = {
      ...resMulti.data,
    };
    console.log(res);
    return res;
  }
}
