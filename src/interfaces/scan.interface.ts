import { Coordinates } from './coordinates.interface';
import { Enemies } from './enemies.interface';

export interface Scan {
  coordinates: Coordinates;
  enemies: Enemies;
  allies?: number;
}
