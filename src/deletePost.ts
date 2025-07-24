import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log : ['info','query','error']});

async function main() {
    await prisma.user.update({
        where :{id : 6},
        data : {
            posts : {
                deleteMany : {
                    published : false
                }
            }
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