import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';

// Un módulo en NestJS sirve para agrupar controladores, servicios y otros elementos
// relacionados con una misma funcionalidad (en este caso, "películas").
@Module({
    // controllers: aquí registramos los controladores de este módulo.
    // MovieController manejará las rutas relacionadas con "movie".
    controllers: [MovieController],

    // providers: se usa para registrar servicios (ej: MovieService),
    // que manejarían la lógica de negocio en lugar de tenerla dentro del controlador.
    // Por ahora está vacío, ya que la lógica está en el controller.
    // providers: []
})
export class MovieModule {}
