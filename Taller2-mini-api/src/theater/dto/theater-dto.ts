import { IsString, IsInt, Min, IsNotEmpty, Max, Matches } from 'class-validator';

// DTO que define la estructura y validaciones para crear un teatro
export class CreateTheaterDto {
    // Identificador único del teatro
    // Debe ser un número entero y no puede estar vacío
    @IsInt()
    @IsNotEmpty()
    id: number;

    // Nombre del teatro (ej: "Cinemark", "Teatro Colón")
    // Debe ser texto y no puede estar vacío
    @IsNotEmpty()
    @IsString()
    nombre: string;

    // Ubicación del teatro (ej: dirección física)
    // - Debe ser string
    // - No puede estar vacío
    // - Solo puede contener letras, números, espacios y caracteres especiales (# , . - /)
    @IsNotEmpty()
    @Matches(/^[A-Za-zÀ-ÿ0-9\s#\-,./]+$/, {
        message: 'La ubicación solo debe contener letras, números, espacios y los caracteres # , . - /',
    })
    @IsString()
    ubicacion: string;

    // Capacidad del teatro (número de asientos)
    // - Debe ser un número entero
    // - No puede estar vacío
    // - Debe estar entre 100 y 5000
    @IsNotEmpty()
    @IsInt()
    @Min(100)
    @Max(5000)
    capacidad: number;
}
