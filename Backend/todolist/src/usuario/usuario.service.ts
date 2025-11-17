import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Usuario } from '@prisma/client';
import { CreateUsuarioDto } from 'src/generated/nest-dto/create-usuario.dto';
import { UsuarioDto } from 'src/generated/nest-dto/usuario.dto';
import bcrypt from 'bcrypt';


@Injectable()
export class UsuarioService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return this.prisma.usuario.findMany({
      select: {
        id: true,
        usuario: true,
        email: true,
        createdAt: true,
        updatedAt: true,
        tareas: {
          select: {
            id: true,
            titulo: true,
            descripcion: true,
            estado: true,
            eliminada: true,
            createdAt: true,
            updatedAt: true,
          },
        },
      },
    });
  }

  findOne(id: string) {
    return this.prisma.usuario.findUnique({ where: { id } });
  }

  async create(dto: CreateUsuarioDto) {
    const hashed = await bcrypt.hash(dto.password, 10);
    dto.password = hashed;
    return this.prisma.usuario.create({
      data: dto as Prisma.UsuarioCreateInput,
    });
  }
}
