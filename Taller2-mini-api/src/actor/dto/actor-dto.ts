import { IsString, IsDateString, IsNotEmpty, IsInt } from 'class-validator';

// DTO que define la estructura y validaciones para crear un actor
export class CreateActorDto {
    // Identificador único del actor
    // Debe ser un número entero y no puede estar vacío
    @IsInt()
    @IsNotEmpty()
    id: number;

    // Nombre del actor
    // Debe ser un string y no puede estar vacío
    @IsNotEmpty()
    @IsString()
    nombre: string;

    // Fecha de nacimiento del actor
    // Debe ser una fecha válida en formato ISO (ej: "1990-05-20") y no puede estar vacía
    @IsNotEmpty()
    @IsDateString()
    fechaNacimiento: string;

    // Nacionalidad del actor
    // Debe ser un string y no puede estar vacío
    @IsNotEmpty()
    @IsString()
    nacionalidad: string;
}
