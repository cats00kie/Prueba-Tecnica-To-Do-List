import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { CreateTareaDto } from 'src/generated/nest-dto/create-tarea.dto';
import { UpdateTareaDto } from 'src/generated/nest-dto/update-tarea.dto';

@Injectable()
export class TareaService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateTareaDto) {
    return this.prisma.tarea.create({
      data: dto as Prisma.TareaUncheckedCreateInput,
    });
  }

  async findAll() {
    return this.prisma.tarea.findMany({
      select: {
        id: true,
        titulo: true,
        descripcion: true,
        estado: true,
        eliminada: true,
        fecha: true,
        createdAt: true,
        updatedAt: true,
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

  async findAllByUsuario(usuarioId: string) {
    return this.prisma.tarea.findMany({
      where: { usuarioId, eliminada: false },
      select: {
        id: true,
        titulo: true,
        descripcion: true,
        estado: true,
        eliminada: true,
        createdAt: true,
        updatedAt: true,
        fecha: true,
        usuarioId: true,
      },
    });
  }

  async findOne(id: string) {
    const tarea = await this.prisma.tarea.findUnique({
      where: { id },
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
    if (!tarea) {
      throw new NotFoundException(`Tarea no encontrada.`);
    }
    return tarea;
  }

  edit(id: string, dto: UpdateTareaDto) {
    return this.prisma.tarea.update({
      where: { id },
      data: dto as Prisma.TareaUncheckedUpdateInput,
    });
  }

  async changeEstado(id: string) {
    const tarea = await this.prisma.tarea.findUnique({
      where: { id },
    });

    if (!tarea) throw new Error('Tarea no encontrada');

    return this.prisma.tarea.update({
      where: { id },
      data: { estado: !tarea.estado },
    });
  }

  delete(id: string) {
    return this.prisma.tarea.update({
      where: { id },
      data: { eliminada: true },
    });
  }
}
