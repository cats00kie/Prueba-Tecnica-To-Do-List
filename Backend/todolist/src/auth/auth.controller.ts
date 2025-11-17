import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common';
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
    const user = await this.auth.validar(dto.email, dto.password);
    return this.auth.login(user);
  }
}
