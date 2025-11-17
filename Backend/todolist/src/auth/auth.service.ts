import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async validar(email: string, password: string) {
    const user = await this.prisma.usuario.findUnique({
      where: { email },
    });

    if (!user) throw new UnauthorizedException('Credenciales inválidas');

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new UnauthorizedException('Credenciales inválidas');

    return user;
  }

  async login(user: any) {
    return {
      access_token: this.jwt.sign({ sub: user.id, email: user.email }),
    };
  }
}
