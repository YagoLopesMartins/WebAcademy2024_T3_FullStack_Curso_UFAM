import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main() {
    // Create with relationship
    const subcategorias_create = await prisma.subcategorias.create({
        data: {
         subcategorias_descricao: "Vestiveis",
         Categorias: {
            create: { categoria_id: 1}
         }
        }
    })
    console.log(subcategorias_create)
    
    // Read
    const subcategorias_read = await prisma.subcategorias.findUnique({
       where: {
           subcategorias_id: 1
       }
    })
     console.log(subcategorias_read)
     
    // Update
    const subcategorias_update = await prisma.subcategorias.update({
        where: {
            subcategorias_id: 1
        },
        data: {
            subcategorias_descricao: "Vestiveis update",
        }
    })
    console.log(subcategorias_update)

    // Delete
    const subcategorias_delete = await prisma.subcategorias.delete({
        where: {
            subcategorias_id: 1
        }
    })
    console.log(subcategorias_delete)
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