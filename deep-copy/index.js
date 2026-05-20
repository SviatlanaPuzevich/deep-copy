function copy(obj) {
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }

    if (obj instanceof Date) {
        return new Date(obj.getTime());
    }

    const newObj = Array.isArray(obj) ? [] : {};
    const keys = Reflect.ownKeys(obj);
    for (let key of keys) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);
        if (descriptor) {
            if ('value' in descriptor) {
                newObj[key] = copy(obj[key]);
            }
            Object.defineProperty(newObj, key, descriptor);

        }

    }
    return newObj;
}

module.exports = {copy};