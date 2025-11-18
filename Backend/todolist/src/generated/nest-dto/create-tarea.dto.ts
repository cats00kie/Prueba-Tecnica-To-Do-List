
import {ApiProperty,getSchemaPath} from '@nestjs/swagger'




export class CreateTareaDto {
  titulo: string;
descripcion?: string;
@ApiProperty({
  type: `string`,
  format: `date-time`,
})
fecha: Date;
}
