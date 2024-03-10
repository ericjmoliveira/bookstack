import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GenresService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(createGenreDto: CreateGenreDto) {
    return await this.prismaService.genre.create({ data: createGenreDto });
  }

  async findAll() {
    return await this.prismaService.genre.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.genre.findUnique({ where: { id } });
  }

  async update(id: string, updateGenreDto: UpdateGenreDto) {
    return await this.prismaService.genre.update({ data: updateGenreDto, where: { id } });
  }

  async remove(id: string) {
    return await this.prismaService.genre.delete({ where: { id } });
  }
}
