function queue(){
    this.pool=[]
    this.resolves=[]
}

queue.prototype.get=function(){
    if(this.pool.length>0){
        return this.pool.shift()
    }else{
        return new Promise((resolve)=> {
            this.resolves.push(resolve)
        })
    }
}

queue.prototype.push=function(data){
    if(this.resolves.length>0){
        this.resolves.shift()(data)
    }else{
        this.pool.push(data)
    }
}

queue.prototype.size=function(){
    return this.pool.length
}


module.exports=queue