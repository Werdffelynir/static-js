import typeOf from './typeOf';
import isNode from './isNode';


const createElement = function (tag, attrs, inner) {
    const
        element = document.createElement(tag),
        is_attr = function (src) {
            return typeOf(src, 'object') && !isNode(src)
        },
        insert_html = function (src) {
            element.insertAdjacentHTML('beforeend', src);
        },
        insert_child = function (src) {
            element.appendChild(src);
        },
        insert = function (src) {
            const type = typeOf(src);
            if (type === 'string')
                insert_html(src);
            else if (type === 'object' && isNode(src))
                insert_child(src);
            else if (type === 'array')
                for (let i = 0; i < src.length; i++) insert(src[i]);
        };

    if (arguments.length === 2 && !is_attr(attrs)) {
        inner = attrs;
        attrs = false;
    }

    if (attrs)
        for (let k in attrs)
            element.setAttribute(k, attrs[k]);

    if (inner)
        insert(inner);

    return element;
};

export default createElement;
