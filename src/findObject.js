import findObjects from './findObjects';


const findObject = function (values, attr, attrValue) {
    const tmp = findObjects(values, attr, attrValue);
    return tmp.length ? tmp[0] : false;
};

export default findObject;
