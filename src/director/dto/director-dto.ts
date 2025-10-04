import { IsString, IsInt, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateDirectorDto {
    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    nombre: string;

    @IsNotEmpty()
    @IsDateString()
    fechaNacimiento: string;

    @IsNotEmpty()
    @IsString()
    nacionalidad: string;
}
