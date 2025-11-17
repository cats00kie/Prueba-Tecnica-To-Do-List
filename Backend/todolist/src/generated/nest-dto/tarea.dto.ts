
import {ApiProperty} from '@nestjs/swagger'


export class TareaDto {
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
}
