import isNode from './isNode';
import typeOf from './typeOf';
import getDocument from './getDocument';

const doc = getDocument();

const queryAll = function (selector, from, callback, thisInstance) {
    let elements = [];
    from = from || doc;

    if (isNode(selector))
        return [selector];

    if (typeOf(from, 'string'))
        from = doc.querySelector(from);
    if (from)
        elements = [].slice.call(from.querySelectorAll(selector));

    if (callback)
        elements.forEach((element) => {callback.call(thisInstance || {}, element)});

    return elements;
};

export default queryAll;
