import { Body, Controller, Get, Param, Post, Patch, Delete } from '@nestjs/common';
import { TareaService } from './tarea.service';

@Controller('tareas')
export class TareaController {
  constructor(private readonly tareaService: TareaService) {}

  @Post()
  create(@Body() data: { titulo: string; descripcion?: string; usuarioId: string }) {
    return this.tareaService.create(data);
  }

  @Get()
  findAll() {
    return this.tareaService.findAll();
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
