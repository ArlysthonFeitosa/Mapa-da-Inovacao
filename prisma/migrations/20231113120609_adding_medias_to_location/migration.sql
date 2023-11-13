-- DropForeignKey
ALTER TABLE "Institution" DROP CONSTRAINT "Institution_pictureId_fkey";

-- DropIndex
DROP INDEX "Institution_pictureId_key";

-- AlterTable
ALTER TABLE "Institution" ALTER COLUMN "pictureId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Media" ADD COLUMN     "locationId" TEXT;

-- AddForeignKey
ALTER TABLE "Institution" ADD CONSTRAINT "Institution_pictureId_fkey" FOREIGN KEY ("pictureId") REFERENCES "Media"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Media" ADD CONSTRAINT "Media_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE SET NULL ON UPDATE CASCADE;
