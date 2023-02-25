import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCatDto } from 'src/dto/cat.dto';
import { ICat } from 'src/interface/cat.interface';
import { CatService } from './cat.service';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}
  @Get()
  async getMuchus(): Promise<ICat[]> {
    return await this.catService.getCat();
  }
  @Post()
  async setMuchus(@Body() newMichu: CreateCatDto): Promise<ICat> {
    return await this.catService.createCat(newMichu);
  }
}
