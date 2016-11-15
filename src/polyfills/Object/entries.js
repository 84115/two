let reduce = Function.bind.call(Function.call, Array.prototype.reduce);
let isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
let concat = Function.bind.call(Function.call, Array.prototype.concat);
let keys = Reflect.ownKeys;

if (!Object.entries) {
    Object.entries = function entries(O) {
        return reduce(keys(O), (e, k) => concat(e, typeof k === 'string' && isEnumerable(O, k) ? [[k, O[k]]] : []), []);
    };
}

export default Object.entries;

