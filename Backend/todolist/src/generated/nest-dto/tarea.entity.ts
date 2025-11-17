
import {ApiProperty} from '@nestjs/swagger'
import {Usuario} from './usuario.entity'


export class Tarea {
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
eliminada: boolean ;
titulo: string ;
descripcion: string  | null;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
fecha: Date ;
estado: boolean ;
usuarioId: string ;
usuario?: Usuario ;
}
