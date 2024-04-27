




//1.Даний масив: [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20 11, [11, [true]]. Застосувати наступні методи:
//reverse,

let arr = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];
let arrRe = arr.reverse();
console.log(arrRe);
console.log('1-------------------------');

//2. Застосувати наступні методи: flat,

let ar = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];
let arRe = ar.flat(3);
console.log(arRe);
console.log('2-------------------------');

//3. Застосувати наступні методи: includes

let art = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];
if (art.includes('Hello')) {
    IsS = true;
}
console.log(art)
console.log('3-------------------------');

//4. Застосувати наступні методи:join

let arts = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];
let str = arts.join('-');
console.log(str);
console.log('4-------------------------');

//5. Застосувати наступні методи: map

let arz = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];

let sss = arz.map((el,i,arr) => {

    if (typeof(el)==="number") {
        return el + 100
    }   else if (typeof(el)=== "string") {
        return el + 'From UA'
    }
}

) ;

console.log(sss);
console.log('5-------------------------');

//6. Застосувати наступні методи:  reduce

let arx = [1, 3, 5, 6, 8, 1, 4, 5, 3, 15, 19, 20, 11, [11, [true]]];

let a = arx.reduce( (prev, current) => {
    console.log(prev,current);
    console.log('========')
    return current + prev
});
console.log(a);
console.log('6-------------------------');




//7 Застосувати наступні методи:split

let vt = 'Hello world and my dear friend ...'
console.log(vt.split(''));
console.log('7-------------------------');

//8 Застосувати наступні методи: trim,

let ut = 'Hello world and my dear friend ...'
console.log(ut.trim());
console.log('8-------------------------');

//9 Застосувати наступні методи:  toLocaleUpperCase,

let ot = 'Hello world and my dear friend ...'
console.log(ot.toLocaleUpperCase());
console.log('9-------------------------');

//10 Застосувати наступні методи:   toLocaleLowerCase

let yt = 'Hello world and my dear friend ...'
console.log(yt.toLocaleLowerCase());
console.log('10-------------------------');

//11  Застосувати наступні методи: charAt,

let ht = 'Hello world and my dear friend ...'
let as = ht.charAt(8); 
console.log(as);
console.log('11-------------------------');

// 12 Застосувати наступні методи:  charCodeAt,

let hh = 'Hello world and my dear friend ...'
let ss = hh.charCodeAt(5); 
console.log(ss);
console.log('12-------------------------');

//13 Застосувати наступні методи:   includes,

let hn = 'Hello world and my dear friend ...'
console.log(hn.includes('x'));
console.log('13-------------------------');

//14 Застосувати наступні методи: concat,

let hy = 'Hello world and my dear friend ...'
let ff = hy.concat('Sea') 
console.log(ff);
console.log('14-------------------------');

//15 Застосувати наступні методи:  search,

let hf = 'Hello world and my dear friend ...'
let uu = hf.search('and'); 
console.log(uu);
console.log('15-------------------------');

//16 Застосувати наступні методи:  startsWith,

let mf = 'Hello world and my dear friend ...'
let hhh = mf.startsWith('Hello') 
console.log(hhh);
console.log('16-------------------------');

//17 Застосувати наступні методи: endsWith,

let mv = 'Hello world and my dear friend ...';
let fr = mv.endsWith('.');
console.log(fr);
console.log('17-------------------------');

//18 Застосувати наступні методи: indexOf,

let gv = 'Hello world and my dear friend ...';
let sd = gv.indexOf('H')  
console.log(sd);

console.log('18-------------------------');

//19 Застосувати наступні методи:  lastIndexOf,

let mg = 'Hello world and my dear friend ...';
let se = mg.lastIndexOf('d'); 
console.log(se);
console.log('19-------------------------');

//20 Застосувати наступні методи:  replace
let mt = 'Hello world and my dear friend ...';
let jj = mt.replace('Hello','dear'); 
console.log(jj);

console.log('20-------------------------');