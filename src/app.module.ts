import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { AuthorsModule } from './authors/authors.module';
import { GenresModule } from './genres/genres.module';
import { BooksModule } from './books/books.module';
import { BorrowersModule } from './borrowers/borrowers.module';
import { TransactionsModule } from './transactions/transactions.module';

@Module({
  imports: [AuthorsModule, GenresModule, BooksModule, BorrowersModule, TransactionsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService]
})
export class AppModule {}
