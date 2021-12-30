import { Injectable } from '@nestjs/common';
import { Protocols, Radar } from './interfaces/radar.interface';
import { types } from './interfaces/enemies.interface';
import { Coordinates } from './interfaces/coordinates.interface';

@Injectable()
export class RadarService {
  private readonly coordinates: Coordinates;

  create(radar: Radar) {
    const point = radar.scan;
    for (let i = 0; i < point.length; i++) {
      // Comprueba la distancia
      if (radar.scan[i].coordinates.x || radar.scan[i].coordinates.y < 100) {
        //Ejecuta si protocolo: "assist-allies"
        if (radar.protocols[0] === Protocols.assistAllies) {
          const point = radar.scan;
          for (let i = 0; i < point.length; i++) {
            if (radar.scan[i].allies) {
              console.log('Asistencia a aliados con éxito');
              return {
                x: radar.scan[i].coordinates.x,
                y: radar.scan[i].coordinates.y,
              };
            } else {
              console.log('Sin aliados cerca: buscando próximo objetivo');
            }
          }
        }

        //Ejecuta si protocolo: "avoid-crossfire"
        if (radar.protocols[0] === Protocols.avoidCrossfire) {
          const point = radar.scan;
          for (let i = 0; i < point.length; i++) {
            if (radar.scan[i].allies) {
              console.log('Ataque abortado: aliados en la zona');
            } else {
              console.log('Ataque efectuado con éxito');
              return {
                x: radar.scan[i].coordinates.x,
                y: radar.scan[i].coordinates.y,
              };
            }
          }
        }

        //Ejecuta si protocolo: "avoid-mech"
        if (radar.protocols[0] === Protocols.avoidMech) {
          const point = radar.scan;
          for (let i = 0; i < point.length; i++) {
            if (radar.scan[i].enemies.type === types.mech) {
              console.log('Mech en la zona: abortar ataque');
            } else {
              console.log('Sin Mech en la zona: ataque efectuado con éxito');
              return {
                x: radar.scan[i].coordinates.x,
                y: radar.scan[i].coordinates.y,
              };
            }
          }
        }

        //Ejecuta si protocolo: "prioritize-mech"
        if (radar.protocols[0] === Protocols.prioritizeMech) {
          const point = radar.scan;
          for (let i = 0; i < point.length; i++) {
            if (radar.scan[i].enemies.type === types.mech) {
              console.log('Mech localizado: ataque efectuado con éxito');
              return {
                x: radar.scan[i].coordinates.x,
                y: radar.scan[i].coordinates.y,
              };
            } else {
              console.log(
                'Sin Mech en la zona: ataque a siguiente objetivo efectuado con éxito',
              );
            }
          }
        }

        //Ejecutar si protocolo: "closest-enemies"
        if (radar.protocols[0] === Protocols.closestEnemies) {
          const distance = radar.scan;
          let point = distance[0];

          for (let i = 0; i < distance.length; i++) {
            if (distance[i] < point) {
              point = distance[i];
            }
          }
          console.log('Ataque efectuado a objetivo más cercano');
        }

        //Ejecutar si protocolo: "furthest-enemies"
        if (radar.protocols[0] === Protocols.furthestEnemies) {
          const distance = radar.scan;
          let point = distance[0];

          for (let i = 0; i < distance.length; i++) {
            if (distance[i] > point) {
              point = distance[i];
            }
          }
          console.log('Ataque efectuado a objetivo más lejano');
        }
      } else {
        console.log('Distancia de ataque excedida: ataque no efectuado');
      }
    }

    return this.coordinates;
  }
}
