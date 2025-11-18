import {
  Controller,
  Post,
  Body,
  UseGuards,
  Get,
  Header,
  Headers,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiProperty } from '@nestjs/swagger';

class LoginDto {
  @ApiProperty({
    type: String,
  })
  email: string;
  @ApiProperty({
    type: String,
  })
  password: string;
}

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('login')
  async login(@Body() dto: LoginDto) {
    const usuario = await this.auth.validar(dto.email, dto.password);
    const loginResponse = await this.auth.login(usuario);

    return {
      ...loginResponse,
      usuarioId: usuario.id,
      usuario: usuario.usuario,
    };
  }

  @Get('validarToken')
  async validarToken(@Headers('X-Authorization') token: string) {
    try {
      const payloadBase64 = token.split('.')[1];
      const decodedPayload = JSON.parse(atob(payloadBase64));
      const exp = decodedPayload.exp;

      if (!exp) return false;
      const vencido = Date.now() >= exp * 1000;
      return !vencido;
    } catch (err) {
      return false;
    }
  }
}
