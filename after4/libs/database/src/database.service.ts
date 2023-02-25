import { Injectable } from '@nestjs/common';
import { MongoGenericRepository } from './DAO/mongo.repository';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cat } from './schemas/cat.schema';
import { Dog } from './schemas/dog.schema';
@Injectable()
export class DatabaseService {
  constructor(
    @InjectModel(Cat.name)
    private CatRepository: Model<Cat>,
    @InjectModel(Dog.name)
    private DogRepository: Model<Dog>,
  ) {}

  cat(): MongoGenericRepository<Cat> {
    return new MongoGenericRepository<Cat>(this.CatRepository);
  }
  dog(): MongoGenericRepository<Dog> {
    return new MongoGenericRepository<Dog>(this.DogRepository);
  }
}
