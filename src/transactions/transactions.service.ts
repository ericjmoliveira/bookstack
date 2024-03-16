import { Injectable } from '@nestjs/common';

import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TransactionsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createTransactionDto: CreateTransactionDto) {
    const transactionData: Prisma.TransactionCreateInput = {
      ...createTransactionDto,
      borrowDate: new Date()
    };

    return await this.prismaService.transaction.create({ data: transactionData });
  }

  async findAll() {
    return await this.prismaService.transaction.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.transaction.findUnique({ where: { id } });
  }

  async update(id: string, updateTransactionDto: UpdateTransactionDto) {
    return await this.prismaService.transaction.update({
      data: { ...updateTransactionDto, returnDate: new Date(updateTransactionDto.returnDate) },
      where: { id }
    });
  }

  async remove(id: string) {
    return await this.prismaService.transaction.delete({ where: { id } });
  }
}
