import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    
    const products = await prisma.produto.createMany({
        data: [
            {  nome: "Samsung M14", preco: 1.100, estoque: 15},
            {  nome: "Creatina Maxtitaanium 300g", preco: 105, estoque: 7},
            {  nome: "Unhas portiças", preco: 2, estoque: 102},
            {  nome: "teste", preco: 404, estoque: 24},
            {  nome: "teste2", preco: 404, estoque: 24},
        ],
        skipDuplicates: true,
    })
    /*
    // Create
        const product = await prisma.produto.create({
            data: {
                nome: "teste4",
                preco: 19,
                estoque: 16
            }
        })
    // Read (id)
        const product2 = await prisma.produto.findUnique({
            where: {
                nome: "teste4",
            }
        })

    // Create com relacionamentos
        const user_post_profile = await prisma.produto.create({
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
    */
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