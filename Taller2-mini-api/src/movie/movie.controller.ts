import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { CreateMovieDto } from './dto/movie-dto';

// Este controlador maneja todas las rutas relacionadas con "movie"
@Controller('movie')
export class MovieController {
    // Simulación de una "base de datos" en memoria usando un arreglo
    private movies: CreateMovieDto[] = [];
    
    // GET /movie
    // Devuelve la lista completa de películas
    @Get()
    findAll() {
        return this.movies;
    }

    // GET /movie/:id
    // Busca una película por su ID
    @Get(':id')
    findOne(@Param('id') id: Number) {
        const idNum = Number(id); // Convertimos el id recibido a número
        if (Number.isNaN(idNum)) { // Validamos si no es un número válido
            return { message: 'Id inválido' };
        }

        // Buscamos la película en el arreglo
        const movie = this.movies.find((a) => a.id === idNum);

        // Si no se encuentra, devolvemos un mensaje
        if (!movie) {
            return { message: `No se encontró la película con id ${idNum}` };
        }

        // Si se encuentra, la retornamos
        return movie;
    }

    // POST /movie
    // Crea una nueva película
    @Post()
    create(@Body() dto: CreateMovieDto) {
        // Validamos si ya existe una película con ese id
        if (this.movies.find((a) => a.id === dto.id)) {
            return { message: `Ya existe la película con id ${dto.id}` };
        }

        // Si no existe, la agregamos al arreglo
        this.movies.push(dto);
        return dto;
    }

    // DELETE /movie/:id
    // Elimina una película por su ID
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        // Buscamos el índice de la película en el arreglo
        const index = this.movies.findIndex((m) => m.id === id);

        // Si no se encuentra, devolvemos un mensaje
        if (index === -1) {
            return { message: `Película con id ${id} no encontrada` };
        }

        // Eliminamos la película y la guardamos en una variable
        const deleted = this.movies.splice(index, 1)[0];

        // Retornamos mensaje de confirmación junto con los datos eliminados
        return { message: `Película ${id} eliminada`, data: deleted };
    }
}
