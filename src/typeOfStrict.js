
const typeOfStrict = function (value, type) {
    const t = Object.prototype.toString.call(value).slice(8, -1);
    return typeof type === 'string' ? type === t : t;
};

export default typeOfStrict;
