class Base {
    constructor() {
        this.callbackMap = {};
    }
    render() {
        const options = this.options;

        options.$mountNode[options.method](this.$body);

        return this;
    }
    emit(event) {
        let callbacks = this.callbackMap[event];
        if (callbacks) {
            callbacks.forEach((callback) => {
                callback();
            })
        }
        return this;
    }
    on(event, callback) {
        let callbacks = this.callbackMap[event];
        if (typeof callbacks === 'undefined') {
            callbacks = [];
        }
        callbacks.push(callback);
        this.callbackMap[event] = callbacks;
        return this;
    }
}

export default Base