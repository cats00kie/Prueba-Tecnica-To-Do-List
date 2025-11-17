import { ApiProperty } from '@nestjs/swagger';

export class CreateUsuarioDto {
  @ApiProperty({
    type: `string`,
  })
  email: string;
  @ApiProperty({
    type: `string`,
  })
  password: string;
  @ApiProperty({
    type: `string`,
  })
  usuario: string;
}
