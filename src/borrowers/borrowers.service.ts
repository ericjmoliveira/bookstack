import { Injectable } from '@nestjs/common';

import { CreateBorrowerDto } from './dto/create-borrower.dto';
import { UpdateBorrowerDto } from './dto/update-borrower.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BorrowersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createBorrowerDto: CreateBorrowerDto) {
    return await this.prismaService.borrower.create({ data: createBorrowerDto });
  }

  async findAll() {
    return await this.prismaService.borrower.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.borrower.findUnique({ where: { id } });
  }

  async update(id: string, updateBorrowerDto: UpdateBorrowerDto) {
    return await this.prismaService.borrower.update({ data: updateBorrowerDto, where: { id } });
  }

  async remove(id: string) {
    return await this.prismaService.borrower.delete({ where: { id } });
  }
}
