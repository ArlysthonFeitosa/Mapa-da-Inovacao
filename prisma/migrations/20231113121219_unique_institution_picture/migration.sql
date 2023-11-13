/*
  Warnings:

  - A unique constraint covering the columns `[pictureId]` on the table `Institution` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Institution_pictureId_key" ON "Institution"("pictureId");
