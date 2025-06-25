-- CreateTable
CREATE TABLE "FolioProduct" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "book_id" INTEGER NOT NULL,
    "sku" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "author" JSONB NOT NULL,
    "illustrator" JSONB NOT NULL,
    "introduced_by" JSONB NOT NULL,
    "afterword_by" JSONB NOT NULL,
    "pages" TEXT NOT NULL,
    "short_description" TEXT NOT NULL,
    "editor_note_description" TEXT NOT NULL,
    "collection_text" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "publication_date" DATETIME,
    "price" REAL NOT NULL,
    "url" TEXT NOT NULL,
    "main_image" TEXT NOT NULL,
    "thumbnail_image" TEXT NOT NULL,
    "media" JSONB NOT NULL,
    "visibility" JSONB NOT NULL,
    "stock_status" INTEGER NOT NULL,
    "store" INTEGER NOT NULL,
    "verbosity" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "FolioStock" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "type" TEXT NOT NULL,
    "book_id" INTEGER NOT NULL,
    "is_out_temp" BOOLEAN,
    "quantity" INTEGER NOT NULL,
    CONSTRAINT "FolioStock_book_id_fkey" FOREIGN KEY ("book_id") REFERENCES "FolioProduct" ("book_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "FolioProduct_book_id_key" ON "FolioProduct"("book_id");

-- CreateIndex
CREATE UNIQUE INDEX "FolioStock_book_id_key" ON "FolioStock"("book_id");
