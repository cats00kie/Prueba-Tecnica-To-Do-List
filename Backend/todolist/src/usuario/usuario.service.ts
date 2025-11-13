import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

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
    return this.prisma.usuario.findUnique({ where: { id }});
  }

  create(data: { email: string; password: string; usuario: string; }) {
    return this.prisma.usuario.create({ data });
  }

  delete(id: string) {
    return this.prisma.usuario.delete({ where: { id } });
  }
}
