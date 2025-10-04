import { Controller, Get, Post, Param, Body, Delete, ParseIntPipe } from '@nestjs/common';
import { CreateActorDto } from './dto/actor-dto';

// Este controlador manejará todas las rutas que empiecen con "/actor"
@Controller('actor')
export class ActorController {
    // Simulación de una "base de datos" en memoria usando un arreglo
    private actores: CreateActorDto[] = [];

    // Método GET: devuelve la lista completa de actores
    @Get()
    findAll() {
        return this.actores;
    }

    // Método GET con parámetro dinámico ":id"
    // Busca un actor por su id
    @Get(':id')
    findOne(@Param('id') id: Number) {
        const idNum = Number(id); // Convertimos el id recibido a número
        if (Number.isNaN(idNum)) { // Validamos si no es un número válido
            return { message: 'Id inválido' };
        }

        // Buscamos en el array al actor que coincida con el id
        const actor = this.actores.find((a) => a.id === idNum);

        // Si no lo encuentra, devolvemos un mensaje de error
        if (!actor) {
            return { message: `No se encontró actor con id ${idNum}` };
        }

        // Si lo encuentra, lo devolvemos
        return actor;
    }

    // Método POST: crea un nuevo actor
    @Post()
    create(@Body() dto: CreateActorDto) {
        // Validamos si ya existe un actor con ese mismo id
        if (this.actores.find((a) => a.id === dto.id)) {
            return { message: `Ya existe un actor con id ${dto.id}` };
        }

        // Si no existe, lo agregamos al arreglo
        this.actores.push(dto);
        return dto;
    }

    // Método DELETE con parámetro dinámico ":id"
    // El decorador ParseIntPipe convierte automáticamente el id en un número
    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        // Buscamos el índice del actor en el array
        const index = this.actores.findIndex((m) => m.id === id);

        // Si no se encuentra, devolvemos un mensaje
        if (index === -1) {
            return { message: `Actor con id ${id} no encontrado` };
        }

        // Eliminamos el actor usando splice y guardamos el eliminado
        const deleted = this.actores.splice(index, 1)[0];

        // Devolvemos mensaje de confirmación junto con los datos borrados
        return { message: `Actor ${id} eliminado`, data: deleted };
    }
}
