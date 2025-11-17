import { Module } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TareaController } from './tarea.controller';
import { UsuarioService } from 'src/usuario/usuario.service';

@Module({
  imports: [PrismaModule],
  providers: [TareaService, UsuarioService],
  controllers: [TareaController]
})
export class TareaModule {}
