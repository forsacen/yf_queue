const Queue=require('../yf_queue')
let q=new Queue()
;(async function () {
    while(1){
        let v=await q.get()
        //let v=await q.pop()
        console.log(v)
    }
})()
let i=0
setInterval(function(){
    q.push(i++)
},1000)