-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_recipeID_fkey";

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_recipeID_fkey" FOREIGN KEY ("recipeID") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
