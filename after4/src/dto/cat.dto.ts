import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';
export class CreateCatDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly age: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly breed: string;
}
