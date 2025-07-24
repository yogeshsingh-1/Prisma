import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log : ['info','query','error']});

async function main() {
    // await prisma.user.findFirst({
    //     email :"yogeshs368@gmail.com"
    // })
    
    const allUser = await prisma.user.findMany({include :{
        posts : true
    }});
    console.log("all",allUser);
    for(let user of allUser){
        console.log("post",user.posts);
    }
  const user =   await prisma.user.findUnique({
       where : {
         email : 'yogeshs368@gmail.com'
       },
       include : {
        posts : true
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