
import {ApiProperty} from '@nestjs/swagger'




export class UpdateTareaDto {
  titulo?: string;
descripcion?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
fecha?: Date;
}
