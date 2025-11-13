import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TareaService {
  constructor(private prisma: PrismaService) {}

  async create(data: {
    titulo: string;
    descripcion?: string;
    usuarioId: string;
  }) {
    return this.prisma.tarea.create({
      data: {
        titulo: data.titulo,
        descripcion: data.descripcion,
        usuario: {
          connect: { id: data.usuarioId },
        },
      },
    });
  }

  async findAll() {
  return this.prisma.tarea.findMany({
    include: {
      usuario: {
        select: {
          id: true,
          usuario: true,
          email: true,
        },
      },
    },
  });
}

  markComplete(id: string) {
    return this.prisma.tarea.update({
      where: { id },
      data: { estado: true },
    });
  }

  delete(id: string) {
    return this.prisma.tarea.delete({ where: { id } });
  }
}
