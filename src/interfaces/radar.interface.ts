import { Scan } from './scan.interface';

export enum Protocols {
  closestEnemies = 'closest-enemies',
  furthestEnemies = 'furthest-enemies',
  assistAllies = 'assist-allies',
  avoidCrossfire = 'avoid-crossfire',
  prioritizeMech = 'prioritize-mech',
  avoidMech = 'avoid-mech',
}

export interface Radar {
  protocols: Protocols;
  scan: Scan[];
}
