import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';

import { BorrowersService } from './borrowers.service';
import { CreateBorrowerDto } from './dto/create-borrower.dto';
import { UpdateBorrowerDto } from './dto/update-borrower.dto';

@Controller('borrowers')
export class BorrowersController {
  constructor(private readonly borrowersService: BorrowersService) {}

  @Post()
  async create(@Body() createBorrowerDto: CreateBorrowerDto) {
    return await this.borrowersService.create(createBorrowerDto);
  }

  @Get()
  async findAll() {
    return await this.borrowersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.borrowersService.findOne(id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateBorrowerDto: UpdateBorrowerDto) {
    return await this.borrowersService.update(id, updateBorrowerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.borrowersService.remove(id);
  }
}
