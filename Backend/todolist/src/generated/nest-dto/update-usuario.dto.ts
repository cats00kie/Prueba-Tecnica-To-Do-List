import { ApiProperty } from "@nestjs/swagger";

export class UpdateUsuarioDto {
  @ApiProperty({
    type: `string`,
  })
  email?: string;
  @ApiProperty({
    type: `string`,
  })
  password?: string;
  @ApiProperty({
    type: `string`,
  })
  usuario?: string;
}
