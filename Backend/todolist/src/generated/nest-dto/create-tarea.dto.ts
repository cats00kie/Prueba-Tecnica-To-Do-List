import { ApiProperty, getSchemaPath } from '@nestjs/swagger';

export class CreateTareaDto {
  @ApiProperty({
    type: `string`,
  })
  titulo: string;
  @ApiProperty({
    type: `string`,
  })
  descripcion?: string;
  @ApiProperty({
    type: `string`,
    format: `date-time`,
  })
  fecha: Date;
  @ApiProperty({
    type: `string`,
  })
  usuarioId: string;
}
