
import {ApiProperty} from '@nestjs/swagger'
import {Tarea} from './tarea.entity'


export class Usuario {
  id: string ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
createdAt: Date ;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
updatedAt: Date ;
email: string ;
password: string ;
usuario: string ;
tareas?: Tarea[] ;
}
