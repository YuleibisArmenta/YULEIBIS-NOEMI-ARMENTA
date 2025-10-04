import { Module } from '@nestjs/common';
import { TheaterController } from './theater.controller';

// Un módulo en NestJS sirve para agrupar controladores, servicios y otros elementos
// relacionados con una misma funcionalidad (en este caso, "theater").
@Module({
  // controllers: aquí registramos los controladores de este módulo
  controllers: [TheaterController],

  // providers: si tuvieras lógica de negocio aparte (ej: TheaterService),
  // lo registrarías aquí para inyectarlo en el controlador.
  // providers: []
})
export class TheaterModule {}
