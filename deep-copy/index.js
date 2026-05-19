function copy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }
    const newObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        newObj[key] = copy(obj[key]);
    }
    return newObj;
}


module.exports = {copy};