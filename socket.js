import { EventEmitter } from "events";

class Socket {
    constructor(ws = new WebSocket(), ee = new EventEmitter()){
        this.ws = ws;
        this.eventEmiteer = ee;

        this.ws.onmessage = this._message.bind(this);
        this.ws.onopen = this._onopen.bind(this);
        this.ws.onclose = this._onclose.bind(this);
    }

    on(name, fn){
        this.eventEmiteer.on(name, fn);
    }
  
    off(name, fn){
        this.eventEmiteer.removeListener(name, fn);
    }

    // method which will emit message to server
    emit(name, data){
        const message = JSON.stringify({name, data});
        this.ws.send(message);
    }
    _message(event){
        try {
            const msg =  JSON.parse(event.data);
            this.eventEmiteer.emit(msg.name, msg.data);
        } catch (error) {
            this.eventEmiteer.emit('error', error);
        }
    }

    _onopen(){
        this.eventEmiteer.emit('connect');
    }

    _onclose(){
        this.eventEmiteer.emit('disconnect');
    }
}

export default Socket;