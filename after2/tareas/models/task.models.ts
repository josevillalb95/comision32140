import {Schema,model} from 'mongoose'
import {Itask} from '../interface'
const taskSchema = new Schema<Itask>({
	title: { type: String, required: true },
	description: { type: String, required: true },
  });

export const TaskModel = model<Itask>('Task', taskSchema);