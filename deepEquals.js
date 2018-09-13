// deepEquals compares two values and teturns true if they are 
// equal and false if not

let person1 = {hair: 'brown', age:23, children:['tom','bobby','alice']};
let person2 = {hair: 'brown', age:23, children:['tom','bobby','alice']};
let person3 = {hair: 'blonde', age:27, children:null};
let array1 = [1,2,3];
let array2 = [1,2,3];
let array3 = [3,2,1];
let nested1 = {a: {b:{c:{d: null}}}};
let nested2 = {a: {b:{c:{d: null}}}};
let nested3 = {a: {b:{c:{d: 'hello'}}}};
let s = 'how are you?';
let a = {s: s};
let b = {s: 'how are you?'};
let order1 = {a: 'apple', b: 'banana'};
let order2 = {b: 'banana', a: 'apple'};

let deepEqualsOrderMatters = (a, b) => JSON.stringify(a) === JSON.stringify(b);

let deepEquals = (a, b) => {
    if(a === b){
        return true;
    }else if(a && b && typeof a === 'object' && typeof b === 'object' && Object.key(a).length === Object.keys(b).length){
            if(Array.isArray(a) === Array.isArray(b)){
                for (let key in a ){
                    if(key in b){
                        if (!deepEquals(a[key], b[key])){
                            return false;
                        }
                    }else{
                    return false;
                    }
                }
                return true;
            }
        }
        return false;
};




console.log(
  deepEqualsOrderMatters(person1, person2),
  deepEqualsOrderMatters(person2, person3),
  deepEqualsOrderMatters(array1, array2),
  deepEqualsOrderMatters(array2, array3),
  deepEqualsOrderMatters(nested1, nested2),
  deepEqualsOrderMatters(nested2, nested3),
  deepEqualsOrderMatters(order1, order2),
  deepEqualsOrderMatters(a, b)
);

