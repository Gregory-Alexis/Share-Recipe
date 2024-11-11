-- DropForeignKey
ALTER TABLE "Recipe" DROP CONSTRAINT "Recipe_ingredientId_fkey";

-- AlterTable
ALTER TABLE "Recipe" ALTER COLUMN "ingredientId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "Ingredient"("id") ON DELETE SET NULL ON UPDATE CASCADE;
