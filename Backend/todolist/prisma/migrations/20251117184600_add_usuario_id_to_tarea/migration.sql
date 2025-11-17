/*
  Warnings:

  - Added the required column `fecha` to the `Tarea` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuarioId` to the `Tarea` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tarea` ADD COLUMN `fecha` DATETIME(3) NOT NULL,
    ADD COLUMN `usuarioId` VARCHAR(191) NOT NULL,
    MODIFY `eliminada` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `estado` BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE `Tarea` ADD CONSTRAINT `Tarea_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `Usuario`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
