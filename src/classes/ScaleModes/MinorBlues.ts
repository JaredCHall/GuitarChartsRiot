import {CagedPosition} from "classes/types.ts";
import {ScaleMode} from "./ScaleModeInterface.ts";

export class MinorBlues implements ScaleMode {

  name(): string {
    return 'Minor Blues'
  }

  type(): 'major'|'minor' {
    return 'minor'
  }

  pattern(): number[] {
    return [3, 2, 1, 1, 3, 2];
  }

  charlie(): CagedPosition {
    return [
      [null, '4', '♭5', '5', null],
      [null, '♭7', null, '1', null],
      [null, '♭3', null, '4', '♭5'],
      ['5', null, null, '♭7', null],
      [null ,'1' , null ,null , '♭3'],
      [null, '4', '♭5', '5', null],
    ]
  }

  alpha(): CagedPosition {
    return [
      ['5', null, null, '♭7', null],
      ['1', null,null, '♭3', null],
      ['4', '♭5', '5', null, null],
      ['♭7', null, '1', null, null],
      [null, '♭3', null, '4', '♭5'],
      ['5', null, null, '♭7', null],
    ]
  }

  golf(): CagedPosition {
    return [
      [null, '♭7', null, '1', null],
      [null, '♭3', null, '4', '♭5'],
      ['5', null, null, '♭7', null],
      ['1', null, null, '♭3', null],
      [null, '4', '♭5', '5', null],
      [null, '♭7', null, '1', null],
    ]
  }

  echo(): CagedPosition {
    return [
      ['1' , null ,null , '♭3', null],
      ['4' , '♭5' ,'5' , null, null],
      ['♭7', null, '1', null, null],
      ['♭3', null, '4', '♭5', null],
      ['5', null, null, '♭7', null],
      ['1' , null ,null , '♭3', null],
    ]
  }

  delta(): CagedPosition {
    return [
      [null, '♭3', null, '4', '♭5'],
      ['5', null, null, '♭7', null],
      ['1', null, null, '♭3', null],
      ['4', '♭5', '5', null, null],
      [null, '♭7', null, '1', null],
      [null, '♭3', null, '4', '♭5'],
    ]
  }
}