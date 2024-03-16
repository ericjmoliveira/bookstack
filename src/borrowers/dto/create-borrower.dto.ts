import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateBorrowerDto {
  @IsString() @IsNotEmpty() name: string;
  @IsEmail() @IsString() @IsNotEmpty() email: string;
}
