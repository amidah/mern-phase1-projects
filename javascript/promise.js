function flippingACoin(){
    return new Promise((resolve, reject) => {
        const val = Math.round(Math.random() * 1);
        val ? resolve('Heads!!') : reject('Tails!!');
    });
}

async function result(){
     try{
        const result = await flippingACoin();
        console.log(result);
     }   
     catch(err){
        console.log(err);
     }
}


result();
result();
result();
result();
result();