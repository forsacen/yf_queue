# yf_queue
nodejs 开发的阻塞队列

const queue=require('./yf_queue')

queue:constructor

    queue=new queue(maxSize)
        maxSize:number 队列最多放入多少数据,超过后,push方法会await阻塞,0表示不限,默认
        为0
                 
queue:method

    queue.get() return data 从队列中取出一个数据,当队列为空时该方法可以await阻塞,
        直到取到数据后返回

    queue.push(data) reuturn promise 向队列放入一个数据,当maxSize大于0且队列长度大于等于
        maxSize时,该方法可以await阻塞
        
    queue.size return number
        当前队列长度,read-only
