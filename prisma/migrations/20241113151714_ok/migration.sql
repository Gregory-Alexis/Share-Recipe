/*
  Warnings:

  - You are about to alter the column `title` on the `Recipe` table. The data in that column could be lost. The data in that column will be cast from `VarChar(500)` to `VarChar(50)`.

*/
-- AlterTable
ALTER TABLE "Recipe" ALTER COLUMN "title" SET DATA TYPE VARCHAR(50);
