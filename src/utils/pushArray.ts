// @ts-ignore
export const addToArray = (list:[], item:Object) => {
// @ts-ignore
    if (!list.includes(item)) {
        return [...list, item]
    }
    return list
}
// @ts-ignore
export const removeFromArray = (list, item) => {
    // @ts-ignore
    const index = list.indexOf(item);
    return [
        ...list.slice(0, index),
        ...list.slice(index + 1)]
}