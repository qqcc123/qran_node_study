const buff = Buffer.alloc(10)
console.log(buff)

const buff1 = Buffer.from('A')
console.log(buff1.toString())

const buf2 = Buffer.from('Buffer创建方法').toString('utf-8');
console.log(buf2);

buff.write('hello')
console.log(buff.toString())

const buff4 = Buffer.concat([buff, buff1])
console.log(buff4.toString())