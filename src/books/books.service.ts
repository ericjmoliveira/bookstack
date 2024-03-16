import { Injectable } from '@nestjs/common';

import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createBookDto: CreateBookDto) {
    return await this.prismaService.book.create({ data: createBookDto });
  }

  async findAll() {
    return await this.prismaService.book.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.book.findUnique({ where: { id } });
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    return await this.prismaService.book.update({ data: updateBookDto, where: { id } });
  }

  async remove(id: string) {
    return await this.prismaService.book.delete({ where: { id } });
  }
}
