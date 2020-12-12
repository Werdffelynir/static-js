
const getWindow = function () {
    if (window)
        return window;
    else
        throw new Error('window object not exist!');
};

export default getWindow;
