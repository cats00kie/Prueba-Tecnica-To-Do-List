import { ApiProperty } from '@nestjs/swagger';

export class UpdateTareaDto {
  @ApiProperty({
    type: `string`,
  })
  id: string;
  @ApiProperty({
    type: `string`,
  })
  titulo: string;
  @ApiProperty({
    type: `string`,
  })
  descripcion: string;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  fecha: Date;
  @ApiProperty({
    type: 'string',
  })
  usuarioId: string;

}
