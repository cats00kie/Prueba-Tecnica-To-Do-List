
import {ApiProperty} from '@nestjs/swagger'


export class UsuarioDto {
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
}
