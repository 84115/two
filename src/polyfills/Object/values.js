let reduce = Function.bind.call(Function.call, Array.prototype.reduce);
let isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
let concat = Function.bind.call(Function.call, Array.prototype.concat);
let keys = Reflect.ownKeys;

if (!Object.values) {
    Object.values = function values(O) {
        return reduce(keys(O), (v, k) => concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []), []);
    };
}

export default Object.values;

