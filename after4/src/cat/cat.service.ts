import { DatabaseService } from '@app/database';
import { Injectable } from '@nestjs/common';
import { ICat } from 'src/interface/cat.interface';
import { CreateCatDto } from '../dto/cat.dto';

@Injectable()
export class CatService {
  constructor(private database: DatabaseService) {}

  async getCat(): Promise<ICat[]> {
    return this.database.cat().getAll();
  }
  async createCat(cat: CreateCatDto): Promise<ICat> {
    return this.database.cat().create(cat);
  }
}
