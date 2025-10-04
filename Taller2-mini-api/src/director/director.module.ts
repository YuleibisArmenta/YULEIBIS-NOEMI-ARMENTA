import { Module } from '@nestjs/common';
import { DirectorController } from './director.controller';

// Un módulo en NestJS agrupa controladores, servicios y otros recursos relacionados.
// Este módulo maneja todo lo relacionado con "director".
@Module({
    // Lista de controladores que pertenecen a este módulo
    controllers: [DirectorController],

    // providers: aquí se registrarían servicios (ej: DirectorService),
    // que manejarían la lógica de negocio.
    // providers: []
})
export class DirectorModule {}
