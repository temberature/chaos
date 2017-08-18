class Base {
    constructor() {
        this.callbackMap = {};
    }
    emit(event) {
        let callbacks = this.callbackMap[event];
        while (callbacks&&callbacks.length) {
            (callbacks.shift())();
        }
    }
    on(event, callback) {
        let callbacks = this.callbackMap[event];
        if (typeof callbacks === 'undefined') {
            callbacks = [];
        }
        callbacks.push(callback);
        this.callbackMap[event] = callbacks;
    }
}

export default Base