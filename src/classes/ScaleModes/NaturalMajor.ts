import {CagedPosition} from "classes/types.ts";
import {ScaleMode} from "./ScaleModeInterface.ts";

export class NaturalMajor implements ScaleMode{

  name(): string {
    return 'Major Scale'
  }

  type(): 'major'|'minor' {
    return 'major'
  }

  pattern(): number[] {
    return [2, 2, 1, 2, 2, 2, 1];
  }

  charlie(key: string): CagedPosition {

    if(key === 'B'){
      return [
        ['4', null, '5', null, '6'],
        [null, '7', '1', null, '2'],
        [null, '3', '4', null, '5'],
        ['6', null, '7', null, null],
        ['1' , null ,'2' , null, '3'],
        ['4' , null ,'5' , null, '6'],
      ]
    }

    return [
      ['3', '4', null, '5', null],
      ['6', null, '7', '1', null],
      ['2', null, '3', '4', null],
      ['5', null, '6', null, null],
      ['7' ,'1' , null ,'2' , null],
      ['3' ,'4' , null ,'5' , null],
    ]
  }

  alpha(key: string): CagedPosition {

    if(key === 'A'){
      return [
        ['5', null, '6', null, '7'],
        ['1', null, '2', null, '3'],
        ['4', null, '5', null, '6'],
        [null, '7', '1', null, null],
        ['2', null, '3', '4', null],
        ['5', null, '6', null, '7'],
      ]
    }

    return [
      [null, '5', null, '6', null],
      ['7', '1', null, '2', null],
      ['3', '4', null, '5', null],
      ['6', null, '7', '1', null],
      [null, '2', null, '3', '4'],
      [null, '6', null, '6', null],
    ]
  }

  golf(key: string): CagedPosition {

    if(key === 'G'){
      return [
        ['6', null, '7', '1', null],
        ['2', null, '3', '4', null],
        ['5', null, '6', null, '7'],
        ['1', null, '2', null, null],
        ['3', '4', null, '5', null],
        ['6', null, '7', '1', null],
      ]
    }

    if(key === 'F♯'){
      return [
        [null,'7','1',null, '2'],
        [null,'3','4', null,'5'],
        [null,'6',null,'7','1'],
        [null,'2',null,'3',null],
        ['4',null,'5',null,'6'],
        [null,'7','1',null,'2'],
      ]
    }

    return [
      [null, '6', null, '7', '1'],
      [null, '2', null, '3', '4'],
      [null, '5', null, '6', null],
      ['7', '1', null, '2', null],
      [null, '3', '4', null, '5'],
      [null, '6', null, '7', '1'],
    ]
  }

  echo(key: string): CagedPosition {

    if(key === 'E'){
      return [
        ['1', null, '2', null,'3'],
        ['4', null, '5', null, '6'],
        [null, '7', '1', null, '2'],
        [null, '3', '4', null, null],
        ['5', null, '6', null, '7'],
        ['1', null, '2', null, '3'],
      ]
    }

    return [
      ['7', '1', null, '2', null],
      ['3', '4', null, '5', null],
      ['6', null, '7', '1', null],
      ['2', null, '3', '4', null],
      [null, '5', null, '6', null],
      ['7', '1', null, '2', null],
    ]
  }

  delta(key: string): CagedPosition {

    if(key === 'D'){
      return [
        ['2', null, '3', '4', null],
        ['5', null,  '6', null, '7'],
        ['1', null, '2', null, '3'],
        ['4', null, '5', null, null],
        ['6', null, '7', '1', null],
        ['2', null, '3', '4', null],
      ]
    }

    return [
      [null, '2', null, '3', '4'],
      [null, '5', null,  '6', null],
      ['7', '1', null, '2', null],
      ['3', '4', null, '5', null],
      [null, '6', null, '7', '1'],
      [null, '2', null, '3', '4'],
    ]
  }
}