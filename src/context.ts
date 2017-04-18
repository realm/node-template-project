
/**
 * A singleton that caches values in memory or on disk to be used for later commands 
 */
class Context {

    private static _instance: Context = new Context();

    private _host: string = "localhost:9080";

    constructor() {
        if (Context._instance) {
            throw new Error("Error: Instantiation failed: Use Context.getInstance() instead of new.");
        }
        Context._instance = this;
    }

    public static getInstance(): Context {
        return Context._instance;
    }

    get host(): string {
        return this._host
    }
    set host(value: string) {
        if (!value.match(/\:\d+$/)) {
            this._host = `${value}:9080`;
        }
        this._host = value
    }
}

export default Context;