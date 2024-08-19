import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    // Create
    const product = await prisma.produto.create({
        data: {
            nome: "teste4",
            preco: 19,
            estoque: 16
        }
    })
    const products = await prisma.produto.createMany({
        data: [
            {  nome: "teste1", preco: 16, estoque: 13},
            {  nome: "teste2", preco: 17, estoque: 14},
            {  nome: "teste3", preco: 18, estoque: 15},
        ],
        skipDuplicates: true,
    })
    // Read (id)
    const product2 = await prisma.produto.findUnique({
        where: {
            nome: "teste4",
        }
    })
    // Create com relacionamentos
    const user_post_profile = await prisma.user.create({
        data: {
            name: "",
            posts: {
                create: { title: ""},
            },
            profile: {
                create: { bio: ""},
            },
        };
    });
}

main()
    .then(async() => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })