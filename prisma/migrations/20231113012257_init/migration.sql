-- CreateTable
CREATE TABLE "Institution" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pictureId" TEXT NOT NULL,
    "categories" TEXT[],

    CONSTRAINT "Institution_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Media" (
    "id" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "uploadedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Media_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" TEXT NOT NULL,
    "lat" DOUBLE PRECISION,
    "long" DOUBLE PRECISION,
    "uf" TEXT,
    "city" TEXT,
    "district" TEXT,
    "street" TEXT,
    "number" TEXT,
    "complement" TEXT,
    "postalCode" TEXT,
    "institutionId" TEXT,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "category" TEXT,
    "institutionId" TEXT,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_institutionsRelation" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Institution_pictureId_key" ON "Institution"("pictureId");

-- CreateIndex
CREATE UNIQUE INDEX "_institutionsRelation_AB_unique" ON "_institutionsRelation"("A", "B");

-- CreateIndex
CREATE INDEX "_institutionsRelation_B_index" ON "_institutionsRelation"("B");

-- AddForeignKey
ALTER TABLE "Institution" ADD CONSTRAINT "Institution_pictureId_fkey" FOREIGN KEY ("pictureId") REFERENCES "Media"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_institutionId_fkey" FOREIGN KEY ("institutionId") REFERENCES "Institution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_institutionsRelation" ADD CONSTRAINT "_institutionsRelation_A_fkey" FOREIGN KEY ("A") REFERENCES "Institution"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_institutionsRelation" ADD CONSTRAINT "_institutionsRelation_B_fkey" FOREIGN KEY ("B") REFERENCES "Institution"("id") ON DELETE CASCADE ON UPDATE CASCADE;
