import typeOfStrict from "./typeOfStrict";
import isNode from "./isNode";

const typeOf = function (value, type) {
    const simpleTypes = ['null', 'boolean', 'undefined', 'function', 'string', 'number', 'date', 'array', 'object'];
    let t = typeOfStrict(value).toLowerCase();
    if (simpleTypes.indexOf(t) === -1 && typeof value === 'object')
        t = 'object';

    return typeof type === 'string' ? type.toLowerCase() === t : t;
};

export default typeOf;
