import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatController } from './cat.controller';
import { DatabaseModule } from '@app/database';

@Module({
  imports: [DatabaseModule],
  providers: [CatService],
  controllers: [CatController],
})
export class CatModule {}
