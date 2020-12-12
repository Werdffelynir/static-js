import queryAll from './queryAll';
import isNode from './isNode';
import typeOf from './typeOf';
import query from './query';


const inject = function (selector, data, append, to)
{
    if (typeOf(selector, 'array')) {
        selector.forEach((elem) => {
            inject(elem, data, append, to);
        });
        return;
    }

    if (typeOf(selector, 'string'))
        selector = query(selector, to);

    if (!append)
        selector.textContent = '';

    if (isNode(selector)) {
        if (isNode(data)) {
            selector.appendChild(data);
        } else if (typeOf(data, 'array')) {
            let i;
            for (i = 0; i < data.length; i++)
                inject(selector, data[i], true, to);
        } else {
            selector.innerHTML = (!append) ? data : selector.innerHTML + data;
        }
        return selector;
    }
    return null;
};

export default inject;
