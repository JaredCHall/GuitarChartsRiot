import {CagedPosition} from "../types.ts";

export interface ScaleMode {
  charlie(key: string): CagedPosition;
  alpha(key: string): CagedPosition;
  golf(key: string): CagedPosition;
  echo(key: string): CagedPosition;
  delta(key: string): CagedPosition;
  name(): string;
  pattern(): number[];
  type(): 'major'|'minor';
}