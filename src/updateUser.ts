import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log : ['info','query','error']});

async function main() {
    // await prisma.user.findFirst({
    //     email :"yogeshs368@gmail.com"
    // })
    
 await prisma.user.update({
    where :{
        id : 6
    },
    data :{
        name : "Shivam dubey"
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