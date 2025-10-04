import { Controller, Get, Post, Delete, Param, Body, ParseIntPipe } from '@nestjs/common';
import { CreateDirectorDto } from './dto/director-dto';

// Este controlador maneja todas las rutas relacionadas con "director"
@Controller('director')
export class DirectorController {
    // Simulación de una "base de datos" en memoria usando un arreglo
    private directores: CreateDirectorDto[] = [];

    // GET /director
    // Devuelve la lista completa de directores
    @Get()
    findAll() {
        return this.directores;
    }

    // GET /director/:id
    // Busca un director por su ID
    @Get(':id')
    findOne(@Param('id') id: Number) {
        const idNum = Number(id); // Convertimos el id recibido a número
        if (Number.isNaN(idNum)) { // Validamos si no es un número válido
            return { message: 'Id inválido' };
        }

        // Buscamos el director en el array
        const director = this.directores.find((a) => a.id === idNum);

        // Si no lo encuentra, devolvemos un mensaje de error
        if (!director) {
            return { message: `No se encontró el director con id ${idNum}` };
        }

        // Si lo encuentra, lo devolvemos
        return director;
    }

    // POST /director
    // Crea un nuevo director
    @Post()
    create(@Body() dto: CreateDirectorDto) {
        // Validamos si ya existe un director con ese ID
        if (this.directores.find((a) => a.id === dto.id)) {
            return { message: `Ya existe un director con id ${dto.id}` };
        }

        // Si no existe, lo agregamos al arreglo
        this.directores.push(dto);
        return dto;
    }

    // DELETE /director/:id
    // Elimina un director según su ID
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        // Buscamos el índice del director en el array
        const index = this.directores.findIndex((m) => m.id === id);

        // Si no lo encuentra, devolvemos un mensaje
        if (index === -1) {
            return { message: `Director con id ${id} no encontrado` };
        }

        // Eliminamos el director y lo guardamos en una variable
        const deleted = this.directores.splice(index, 1)[0];

        // Devolvemos mensaje de confirmación junto con los datos borrados
        return { message: `Director ${id} eliminado`, data: deleted };
    }
}
