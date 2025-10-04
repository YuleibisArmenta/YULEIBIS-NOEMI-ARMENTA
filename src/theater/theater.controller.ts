import { Controller, Get, Post, Param, Body, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateTheaterDto } from './dto/theater-dto';

// Este controlador maneja todas las rutas relacionadas con "theater"
@Controller('theater')
export class TheaterController {
    // Simulación de una "base de datos" en memoria usando un arreglo
    private theater: CreateTheaterDto[] = [];

    // GET /theater
    // Devuelve la lista completa de teatros
    @Get()
    findAll() {
        return this.theater;
    }

    // GET /theater/:id
    // Busca un teatro por su ID
    @Get(':id')
    findOne(@Param('id') id: Number) {
        const idNum = Number(id); // Convertimos el id recibido a número
        if (Number.isNaN(idNum)) { // Validamos si no es un número válido
            return { message: 'Id inválido' };
        }

        // Buscamos el teatro en el array
        const theater = this.theater.find((a) => a.id === idNum);

        // Si no se encuentra, devolvemos un mensaje
        if (!theater) {
            return { message: `No se encontró el teatro con id ${idNum}` };
        }

        // Si se encuentra, lo devolvemos
        return theater;
    }

    // POST /theater
    // Crea un nuevo teatro
    @Post()
    create(@Body() dto: CreateTheaterDto) {
        // Validamos si ya existe un teatro con ese ID
        if (this.theater.find((a) => a.id === dto.id)) {
            return { message: `Ya existe un teatro con id ${dto.id}` };
        }

        // Si no existe, lo agregamos al arreglo
        this.theater.push(dto);
        return dto;
    }

    // DELETE /theater/:id
    // Elimina un teatro por su ID
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        // Buscamos el índice del teatro en el array
        const index = this.theater.findIndex((m) => m.id === id);

        // Si no se encuentra, devolvemos un mensaje
        if (index === -1) {
            return { message: `Teatro con id ${id} no encontrado` };
        }

        // Eliminamos el teatro y lo guardamos en una variable
        const deleted = this.theater.splice(index, 1)[0];

        // Retornamos mensaje de confirmación junto con los datos eliminados
        return { message: `Teatro ${id} eliminado`, data: deleted };
    }
}
