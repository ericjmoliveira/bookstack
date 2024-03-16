import { IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateTransactionDto {
  @IsUUID() @IsString() @IsNotEmpty() bookId: string;
  @IsUUID() @IsString() @IsNotEmpty() borrowerId: string;
  @IsNumber() @IsNotEmpty() borrowPeriod: number;
  @IsDateString() @IsOptional() returnDate: string;
}
