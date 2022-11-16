import {
    FilterQuery,
    UpdateQuery,
    QueryOptions,
    ProjectionType
  } from "mongoose";
  import {TaskModel} from '../models/task.models'
  import {Itask} from '../interface'


  export function createTask(input: Itask) {
    return TaskModel.create(input);
  }
  
  export function findTask(
    query: FilterQuery<Itask>={},
    projection: ProjectionType<Itask> = {},
    options: QueryOptions = {lean:true}
  ) {
    return TaskModel.find(query, projection, options);
  }

  export function findOneTask(
    id:string,
    projection: ProjectionType<Itask> = {},
    options: QueryOptions = {lean:true}
  ) {
    return TaskModel.findById(id, projection, options);
  }
  
  export function updateTask(
    id: string,
    update: UpdateQuery<Itask>,
  ) {
    return TaskModel.findByIdAndUpdate(id,update)
  }
  
  export function deleteTask(id:string) {
    return TaskModel.findByIdAndDelete(id)
  }