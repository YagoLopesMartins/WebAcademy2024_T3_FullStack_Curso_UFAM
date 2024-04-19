import { PrismaClient, Produto } from '@prisma/client';
import { CreateProdutoDto } from './produto.types';

const prisma = new PrismaClient();

export async function getAllProdutos(): Promise<Produto[]> {
 return await prisma.produto.findMany();
}

export async function createProduto(
 produto: CreateProdutoDto
): Promise<Produto> {
 return await prisma.produto.create({ data: produto });
}