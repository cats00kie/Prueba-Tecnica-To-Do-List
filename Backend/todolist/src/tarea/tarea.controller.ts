import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  NotFoundException,
  BadRequestException,
  Header,
  Headers,
  Put,
} from '@nestjs/common';
import { TareaService } from './tarea.service';
import { CreateTareaDto } from 'src/generated/nest-dto/create-tarea.dto';
import { UpdateTareaDto } from 'src/generated/nest-dto/update-tarea.dto';
import { UsuarioService } from 'src/usuario/usuario.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UsuarioDto } from 'src/generated/nest-dto/usuario.dto';

@Controller('tareas')
export class TareaController {
  constructor(
    private readonly tareaService: TareaService,
    private readonly usuarioService: UsuarioService,
  ) {}

  @Post()
  async create(@Body() dto: CreateTareaDto) {
    dto.fecha = new Date(dto.fecha);
    return this.tareaService.create({ ...dto });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tareaService.findOne(id);
  }

  @Get()
  async findByUsuario(@Headers('usuarioId') usuarioId: string) {
    return this.tareaService.findAllByUsuario(usuarioId);
  }

  @Put(':id')
  edit(@Param('id') id: string, @Body() dto: UpdateTareaDto) {
    if (dto.fecha) {
      dto.fecha = new Date(dto.fecha);
    }

    return this.tareaService.edit(id, dto);
  }

  @Put(':id/estado')
  changeEstado(@Param('id') id: string) {
    return this.tareaService.changeEstado(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tareaService.delete(id);
  }
}
