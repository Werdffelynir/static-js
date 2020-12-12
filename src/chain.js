
/**
 * Example:
 * const chain = new Chain(onSuccess, onError);
 * chain.add('Test begin', function (next) {
 * }).add('Next model', function (next) { next()
 * }).add('Last model', function (next) { next()
 * }).next();
 * @returns {Function}
 */
const Chain = function (ons, onf)
{
    const createClass = function ()
    {
        function defineProperties(target, props)
        {
            for (let i = 0; i < props.length; i++) {
                const descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }
        return function (Constructor, protoProps, staticProps)
        {
            if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
            if (staticProps)
                defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function classCallCheck(instance, Constructor)
    {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    const Chain = function ()
    {
        function Chain(onSuccess, onFailed)
        {
            classCallCheck(this, Chain);

            this.onSuccess = onSuccess;
            this.onFailed = onFailed;
            this.currentIndex = 0;
            this.list = [];
        }

        createClass(Chain, [
            {
                key: "register",
                value: function register(id, callback) {
                    this.list.push({id: id, callback: callback});
                }
            }, {
                key: "next",
                value: function next() {
                    const registered = this.list[this.currentIndex];
                    if (registered) {
                        if (registered.callback instanceof Function) {
                            registered.callback.call({}, () => {
                                this.currentIndex ++;
                                this.next();
                            }, registered.id);
                        } else {
                            this.onFailed();
                        }
                    } else {
                        this.onSuccess();
                    }
                }
            }]
        );

        return Chain;
    }();

    return new Chain(ons, onf)
};

export default Chain;
