import { Module } from '@nestjs/common';
import { ActorController } from './actor.controller';

// Un módulo en NestJS es una unidad de organización que agrupa controladores, servicios y otros recursos.
// En este caso, ActorModule agrupa todo lo relacionado con "actor".
@Module({
    // controllers: define los controladores que pertenecen a este módulo
    // Aquí registramos el ActorController para manejar las rutas /actor
    controllers: [ActorController],

    // providers: aquí irían los servicios relacionados con actores (ej: ActorService),
    // pero en este caso no hay ninguno definido aún.
    // providers: []
})
export class ActorModule {}
