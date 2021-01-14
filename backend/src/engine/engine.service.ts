import { Injectable } from '@nestjs/common';
import { PythonShell } from 'python-shell';
import config from '../config/config';

import { Engine } from '../interfaces/engine.interface';

@Injectable()
export class EngineService {
  public engine: Engine = {
    isOn: false,
    process: null,
    option: {
      mode: 'text',
      pythonOptions: ['-u'],
      scriptPath: config.path.scriptPath,
      args: [],
    },
  };

  runEngine(): boolean {
    if (this.engine.isOn || this.engine.process) {
      return false;
    } else {
      this.engine.process = new PythonShell('python3', this.engine.option);
      return true;
    }
  }

  activateEngine(): boolean {
    if (this.engine.process) {
      this.engine.isOn = true;
      return true;
    } else {
      return false;
    }
  }

  closeEngine() {
    if (this.engine.process && this.engine.process.kill('SIGINT')) {
      this.engine.process = null;
      this.engine.isOn = false;
    }
  }
}
