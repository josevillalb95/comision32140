import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema()
export class Dog {
  @Prop()
  name: string;
  @Prop()
  age: number;
  @Prop()
  breed: string;
  @Prop()
  size: 's' | 'm' | 'xl';
}
export type DogDocument = Dog & Document;
export const DogSchema = SchemaFactory.createForClass(Dog);
