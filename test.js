const Queue=require('../yf_queue')
let q=new Queue()
;(async function () {
    while(1){
        let v=await q.get()
        console.log(1,v)
        await new Promise(function (resolve) {
            setTimeout(function (){resolve()},1000)
        })
    }
})()
;(async function () {
    while(1){
        let v=await q.get()
        console.log(2,v)
        await new Promise(function (resolve) {
            setTimeout(function (){resolve()},1000)
        })
    }
})()
let i=0
for(let i=0;i<1000;i++){
    q.push(i)
}