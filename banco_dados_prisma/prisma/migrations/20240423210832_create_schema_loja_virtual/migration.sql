/*
  Warnings:

  - The primary key for the `produtos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `estoque` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `produtos` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `produtos` table. All the data in the column will be lost.
  - You are about to alter the column `preco` on the `produtos` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,0)` to `Double`.
  - A unique constraint covering the columns `[numero_serie]` on the table `Produtos` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `fabricante` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `modelo` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `produto_id` to the `Produtos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantidade_disponivel` to the `Produtos` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `produtos_nome_key` ON `produtos`;

-- AlterTable
ALTER TABLE `produtos` DROP PRIMARY KEY,
    DROP COLUMN `created_at`,
    DROP COLUMN `estoque`,
    DROP COLUMN `id`,
    DROP COLUMN `nome`,
    DROP COLUMN `updated_at`,
    ADD COLUMN `comprasCompra_id` INTEGER NULL,
    ADD COLUMN `fabricante` VARCHAR(255) NOT NULL,
    ADD COLUMN `modelo` VARCHAR(255) NOT NULL,
    ADD COLUMN `numero_serie` INTEGER NULL,
    ADD COLUMN `produto_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `quantidade_disponivel` INTEGER NOT NULL,
    MODIFY `preco` DOUBLE NOT NULL,
    ADD PRIMARY KEY (`produto_id`);

-- CreateTable
CREATE TABLE `subcategorias` (
    `subcategorias_id` INTEGER NOT NULL AUTO_INCREMENT,
    `subcategorias_descricao` VARCHAR(255) NOT NULL,
    `categoriasCategoria_id` INTEGER NULL,

    PRIMARY KEY (`subcategorias_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categorias` (
    `categoria_id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`categoria_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Compras` (
    `compra_id` INTEGER NOT NULL AUTO_INCREMENT,
    `data_hora` DATETIME(3) NOT NULL,
    `desconto` DOUBLE NULL,
    `forma_pagamento` VARCHAR(255) NOT NULL,
    `total` DOUBLE NOT NULL,
    `clienteFazCompraCliente_faz_compra_id` INTEGER NULL,

    PRIMARY KEY (`compra_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClienteFazCompra` (
    `cliente_faz_compra_id` INTEGER NOT NULL AUTO_INCREMENT,

    PRIMARY KEY (`cliente_faz_compra_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Clientes` (
    `cliente_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` INTEGER NOT NULL,
    `clienteFazCompraCliente_faz_compra_id` INTEGER NULL,

    UNIQUE INDEX `Clientes_cpf_key`(`cpf`),
    PRIMARY KEY (`cliente_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Endereco` (
    `endereco_id` INTEGER NOT NULL AUTO_INCREMENT,
    `logradouro` VARCHAR(255) NOT NULL,
    `bairro` VARCHAR(255) NOT NULL,
    `numero` VARCHAR(255) NOT NULL,
    `cep` VARCHAR(255) NOT NULL,
    `clientesCliente_id` INTEGER NULL,

    PRIMARY KEY (`endereco_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Produtos_numero_serie_key` ON `Produtos`(`numero_serie`);

-- AddForeignKey
ALTER TABLE `subcategorias` ADD CONSTRAINT `subcategorias_categoriasCategoria_id_fkey` FOREIGN KEY (`categoriasCategoria_id`) REFERENCES `categorias`(`categoria_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Produtos` ADD CONSTRAINT `Produtos_comprasCompra_id_fkey` FOREIGN KEY (`comprasCompra_id`) REFERENCES `Compras`(`compra_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Compras` ADD CONSTRAINT `Compras_clienteFazCompraCliente_faz_compra_id_fkey` FOREIGN KEY (`clienteFazCompraCliente_faz_compra_id`) REFERENCES `ClienteFazCompra`(`cliente_faz_compra_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Clientes` ADD CONSTRAINT `Clientes_clienteFazCompraCliente_faz_compra_id_fkey` FOREIGN KEY (`clienteFazCompraCliente_faz_compra_id`) REFERENCES `ClienteFazCompra`(`cliente_faz_compra_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Endereco` ADD CONSTRAINT `Endereco_clientesCliente_id_fkey` FOREIGN KEY (`clientesCliente_id`) REFERENCES `Clientes`(`cliente_id`) ON DELETE SET NULL ON UPDATE CASCADE;
