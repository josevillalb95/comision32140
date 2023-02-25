import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Cat {
  @Prop()
  name: string;
  @Prop()
  age: number;
  @Prop()
  breed: string;
}
export type CatDocument = Cat & Document;
export const CatSchema = SchemaFactory.createForClass(Cat);
