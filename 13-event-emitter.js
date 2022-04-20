const EventEmitter = require('events');

const customEmitter = new EventEmitter()


customEmitter.on('response', (name,id) => {
    console.log(`data terkirim ${name} dengan id : ${id}`);
})

customEmitter.on('response', () => {
    console.log(`logic system yang lain`);
})

customEmitter.emit('response','rio',30)