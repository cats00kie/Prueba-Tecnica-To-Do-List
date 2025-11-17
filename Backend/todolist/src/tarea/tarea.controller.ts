import { Body, Controller, Get, Param, Post, Patch, Delete, NotFoundException, BadRequestException } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { CreateTareaDto } from 'src/generated/nest-dto/create-tarea.dto';
import { UpdateTareaDto } from 'src/generated/nest-dto/update-tarea.dto';
import { UsuarioService } from 'src/usuario/usuario.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioDto } from 'src/generated/nest-dto/usuario.dto';

@Controller('tareas')
export class TareaController {
  constructor(private readonly tareaService: TareaService, private readonly usuarioService: UsuarioService,) {
  }

  @Post()
  async create(@Body() dto: CreateTareaDto) {
    return this.tareaService.create({ ...dto });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tareaService.findOne(id);
  }

  @Get()
  findAll() {
    return this.tareaService.findAll();
  }

  @Patch(':id')
  edit(@Param('id') id: string, @Body() dto: UpdateTareaDto) {
    return this.tareaService.edit(id, dto);
  }

  @Patch(':id/complete')
  markComplete(@Param('id') id: string) {
    return this.tareaService.markComplete(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tareaService.delete(id);
  }
}
