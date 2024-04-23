import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    const product = await prisma.produto.findUnique({
        where: {
            nome: "teste4",
        }
    })
    console.log(product)
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