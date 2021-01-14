import { Options, PythonShell } from 'python-shell';

export interface Engine {
  isOn: boolean;
  process: PythonShell | null;
  option: Options;
}
