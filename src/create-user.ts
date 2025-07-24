import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log : ['info','query','error']});

async function main() {
    // await prisma.user.create({
    //     data  :{
    //         email : 'yogeshs368@gmail.com',
    //         name : "Yogesh Singh"
    //     } 
    // })
    await prisma.user.create({
        data :{
            email : "aankur368@gmail.com",
            name : "aankur singh",
            
        }
    })
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })