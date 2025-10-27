-- CreateTable
CREATE TABLE "convidados" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "telefone" TEXT,
    "message" TEXT,
    "presenca" BOOLEAN NOT NULL DEFAULT false,
    "bebidaAlcoolica" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "convidados_pkey" PRIMARY KEY ("id")
);
