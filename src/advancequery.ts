import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log : ['info','query','error']});

async function main() {
    // await prisma.user.findFirst({
    //     email :"yogeshs368@gmail.com"
    // })
    
    const user  = await prisma.user.findMany({
        where :{
            email :{
                endsWith : "gmail.com"
            }
        ,
        posts :{
            // has at least one post published
            some : {
                published : true
            }
        }
    }
    })
    console.log(user);
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