

const findObjects = function (list, attr, attrValue) {
    let i, tmp = [];
    if (list && typeof list === "object")
        list = Object.values(list);

    if (Array.isArray(list))
        for (i = 0; i < list.length; i++)
            if (list[i] && list[i][attr] !== undefined && list[i][attr] === attrValue)
                tmp.push(list[i]);

    return tmp ;
};

export const finds = function (values, attr, attrValue) {
    let tmp = findObjects(values, attr, attrValue);
    return tmp.length ? tmp : false;
};

export const find = function (values, attr, attrValue) {
    let tmp = findObjects(values, attr, attrValue);
    return tmp.length ? tmp[0] : false;
};

export default findObjects;
