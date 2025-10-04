import { IsString, IsInt, Min, Max, IsNotEmpty, Matches } from 'class-validator';

// DTO que define la estructura y validaciones para crear una película
export class CreateMovieDto {
    // Identificador único de la película
    // Debe ser un número entero y no puede estar vacío
    @IsInt()
    @IsNotEmpty()
    id: number;

    // Título de la película
    // - No puede estar vacío
    // - Debe ser un string
    // - Debe cumplir con la expresión regular:
    //   Solo se permiten letras, números, espacios y los caracteres # , . - /
    @IsNotEmpty()
    @Matches(/^[A-Za-zÀ-ÿ0-9\s#\-,./]+$/, {
        message: 'El titulo solo debe contener letras, números, espacios y los caracteres # , . - /',
    })
    @IsString()
    titulo: string;

    // Año de lanzamiento de la película
    // - Debe ser un número entero
    // - No puede estar vacío
    // - No puede ser menor a 1900
    // - No puede ser mayor al año actual
    @IsNotEmpty()
    @IsInt()
    @Min(1900)
    @Max(new Date().getFullYear())
    año: number;

    // Género de la película (ej: Drama, Acción, Comedia, etc.)
    // Debe ser un string y no puede estar vacío
    @IsNotEmpty()
    @IsString()
    genero: string;
}
