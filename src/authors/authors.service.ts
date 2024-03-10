import { Injectable } from '@nestjs/common';

import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createAuthorDto: CreateAuthorDto) {
    return await this.prismaService.author.create({ data: createAuthorDto });
  }

  async findAll() {
    return await this.prismaService.author.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.author.findUnique({ where: { id } });
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    return await this.prismaService.author.update({ data: updateAuthorDto, where: { id } });
  }

  async remove(id: string) {
    return await this.prismaService.author.delete({ where: { id } });
  }
}
