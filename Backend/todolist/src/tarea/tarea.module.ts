import { Module } from '@nestjs/common';
import { TareaService } from './tarea.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TareaController } from './tarea.controller';

@Module({
  imports: [PrismaModule],
  providers: [TareaService],
  controllers: [TareaController]
  
})
export class TareaModule {}
