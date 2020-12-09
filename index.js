function queue(maxSize=0){
    this.pool=[]
    this.resolves=[]
    this.pushResolves=[]
    this.maxSize=maxSize
}

queue.prototype.get=function(){
    if(this.pool.length>0){
        if(this.pushResolves.length>0){
            this.pushResolves.shift()()
        }
        return this.pool.shift()
    }else{
        return new Promise((resolve)=> {
            this.resolves.push(resolve)
        })
    }
}

queue.prototype.push=function(data){
    let self=this
    if(this.resolves.length>0){
        this.resolves.shift()(data)
        return new Promise(function (resolve) {
            resolve()
        })
    }else{
        this.pool.push(data)
        if(this.maxSize===0||this.pool.length<=this.maxSize){
            return new Promise(function (resolve) {
                resolve()
            })
        }else{
            return new Promise(function (resolve) {
                self.pushResolves.push(resolve)
            })
        }
    }
}

queue.prototype.size=function(){
    return this.pool.length
}


module.exports=queue