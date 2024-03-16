import { IsString, IsNotEmpty, IsNumber, IsUUID, IsOptional } from 'class-validator';

export class CreateBookDto {
  @IsUUID() @IsString() @IsNotEmpty() authorId: string;
  @IsUUID() @IsString() @IsNotEmpty() genreId: string;
  @IsString() @IsNotEmpty() title: string;
  @IsNumber() @IsNotEmpty() publicationYear: number;
  @IsString() @IsNotEmpty() isbn: string;
  @IsNumber() @IsNotEmpty() availableCopies: number;
  @IsOptional() synopsis?: string;
}
