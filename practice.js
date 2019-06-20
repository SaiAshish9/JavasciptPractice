//forEach

function showFirstAndLast(arr){
  var newArr=[];
  arr.forEach((val)=>{
    newArr.push(val[0]+val[1])
  });

  return newArr;
}

showFirstAndLast([{0:"abcd",1:"cdes"},{0:'efgh'}])


function addKeyAndValue(arr,key,value){
arr.forEach(function(val){
val[key]=value;}); return arr;}
addKeyAndValue([{1:'a',2:'b',3:'c'},{2:'c',3:'d'}],2,{1:'c',2:'b'});


function vowelCount(str){
  var arr=str.split("")
  console.log(arr);
  var obj={};
  var vowels="aeiou"
  arr.forEach((letter)=>{
    if(vowels.indexOf(letter.toLowerCase())!== -1){
      if(letter in obj){
        obj[letter]++
      }else{
        obj[letter]=1;
      }
    }
  });return obj;
}
vowelCount("Hi I'm Sai")



//map

function valTimesIndex(arr){
return arr.map(function(val,index){
return val*index;});}
valTimesIndex([4,5,2,3])


function extractKey(arr,key){
return arr.map(function(val){
return val[key];});}
extractKey([{0 :'a'},{1 : 'b'}],0);

function extractfullname(arr){
return arr.map(function(val){
return val.first +"  "+ val.last;});}
extractfullname([{first:'sai',last:'ashish'}])


//filter

function filterByValue(arr,key){
return arr.filter((val)=>{
return val[key]!=undefined;});}
filterByValue([{1:'a'},{2:'a'}],2);



function find(arr,searchvalue){
  return arr.filter((val)=>{
    return val=== searchvalue;
  });//[0];
}

find([0,1,0,1],0)


function removeVowels(str){
  var vowels="aeiou"

  return str.toLowerCase().split("").filter((val)=>{
    return vowels.indexOf(val)===-1
  }).join('')
}
removeVowels('caeoiojhvjjkdchjweukbg')

//some
function hascomma(str){
  return str.split(''.some(function(value){
    return value===','
  })
}
hascomma('a,s,s')

//every

function hasnoduplicates(arr){
  return arr.every(function(val){
    return arr.indexOf(val)=== arr.lastIndexOf(val)
  })
}

hasnoduplicates([1,2,3])

function certainValue(arr,key,search){
  return arr.every(function(val){
    return val[key]=== search
  })
}
certainValue([{1:'1'},{1:'1'}],1,'1')

//reduce
function vowelcount(str){
  var vowels ="aeiou"
  return str.split("").reduce(function(acc,next){
    if(vowels.indexOf(next.toLowerCase())!== -1){
      if(next in acc){
        acc[next]++
      }else{
        acc[next]=1;
      }return acc+;},{})

}
vowelCount("Hi I'm Sai")


function addKeyAndValue(arr,key,value){
  return arr.reduce((acc,next,id)=>{
    acc[id][key]=value;
    return acc;
  },arr)
}
addKeyAndValue([{1:'a',2:'b',3:'c'},{2:'c',3:'d'}],2,{1:'c',2:'b'});


function partition(arr,cb){
  return arr.reduce((acc,next)=>{
if(cb(next))
{    acc[0].push(next)}
else
{acc[1].push(next)}
    return acc;
  },[[],[]])
}
partition([12, 5, 8, 130, 44], (x => x > 10))



//call,apply,bind


function arrayFrom(arrayLikeObject){
    return [].slice.call(arrayLikeObject)
}

function sumEvenArguments(){
    var newArgs = [].slice.call(arguments);
    return newArgs.reduce(function(acc,next){
        if(next % 2 === 0){
            return acc+next;
        }
        return acc;
    },0)
}

function invokeMax(fn, num){
    var max = 0;
    return function(){
        if(max >= num) return "Maxed Out!";
        max++;
        return fn.apply(this,arguments);
    }
}

function once(fn, thisArg){
    var hasBeenCalled = false;
    return function(){
        if(!hasBeenCalled){
            hasBeenCalled = true;
            return fn.apply(thisArg, arguments)
        }
    }
}

function flip(fn, thisArg){
    var outerArgs = [].slice.call(arguments,2)
    return function(){
        var innerArgs = [].slice.call(arguments)
        var allArgs = outerArgs.concat(innerArgs).slice(0, fn.length)
        return fn.apply(thisArg, allArgs.reverse())
    }
}

function bind(fn, thisArg){
    var outerArgs = [].slice.call(arguments,2)
    return function(){
        var innerArgs = [].slice.call(arguments)
        var allArgs = outerArgs.concat(innerArgs)
        return fn.apply(thisArg, allArgs)
    }
}


//ES2015

// spread
function smallestValue(...args){
  return Math.min(...args)
}

// placeInMiddle([1,2,6,7],[3,4,5])
function placeInMiddle(arr, vals){
  let mid = Math.floor(arr.length/2)
  arr.splice(mid,0,...vals)
  return arr;
}

// rest
function joinArrays(...args){
  return args.reduce((acc, next) => acc.concat(next), [])
}
joinArrays(1,2,3,4)
// rest
function sumEvenArgs(...args){
  return args.reduce((acc, next) => next % 2 === 0 ? acc += next : acc, 0)
}

// rest
function flip(fn, thisArg, ...outerArgs){
  return function(...innerArgs){
    let allArgs = outerArgs.concat(innerArgs).slice(0, fn.length)
    return fn.apply(thisArg, allArgs.reverse());
  }
}
function subtractFourNumbers(a,b,c,d){
      return a-b-c-d;
  }

flip(subtractFourNumbers,this,1,3,4,5)(2,3,4) //5-4-3-1=-3

// rest + spread
function bind(fn, thisArg, ...outerArgs){
  return function(...innerArgs){
    return fn.apply(thisArg, [...outerArgs, ...innerArgs])
  }
}
bind(subtractFourNumbers,this,1,2,3,4,5)(6,7,8,9,10)

//objectEnhancement And Object/Array Destructuring
function displayStudentInfo(obj){
  var {first, last} = obj;
  return `Your full name is ${first} ${last}`
}

function printFullName({first,last}){
  return `Your full name is ${first} ${last}`
}

function createStudent({likesJavaScript = true, likesES2015 = true} = {}){
  var start = 'The student';
  if(likesJavaScript && likesES2015){
    start += ' likes JavaScript and ES2015'
  } else if(likesJavaScript){
    start += ' likes JavaScript!'
  } else if(likesES2015){
    start += ' likes ES2015!'
  } else {
    start += ' does not like much...'
  }
  return start;
}

function reverseArray(arr){
  for(var i = 0; i < arr.length/2; i++){
    [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]]
  }
  return arr;
}


//ESE5




// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number

// function Person(firstName, lastName, favoriteColor, favoriteNumber){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.favoriteColor = favoriteColor;
//   this.favoriteNumber = favoriteNumber;
//   this.multiplyFavoriteNumber = function(num){
//     return num * this.favoriteNumber;
//   }
// }

class Person {
  constructor(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.family = [];
  }
  fullName(){
    return `${this.firstName} ${this.lastName}`
  }
  multiplyFavoriteNumber(num){
    return num * this.favoriteNumber;
  }
  addToFamily(obj){
    if(obj.constructor === Person && this.family.indexOf(obj) === -1){
      this.family.push(obj)
    }
    return this.family
  }
}



// Write a method called multiplyFavoriteNumber that takes in a number and returns the product of the number and the Person's favorite number

// function Person(firstName, lastName, favoriteColor, favoriteNumber){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.favoriteColor = favoriteColor;
//   this.favoriteNumber = favoriteNumber;
//   this.multiplyFavoriteNumber = function(num){
//     return num * this.favoriteNumber;
//   }
// }

class Person {
  constructor(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.family = [];
  }
  fullName(){
    return `${this.firstName} ${this.lastName}`
  }
  multiplyFavoriteNumber(num){
    return num * this.favoriteNumber;
  }
  addToFamily(obj){
    if(obj.constructor === Person && this.family.indexOf(obj) === -1){
      this.family.push(obj)
    }
    return this.family
  }
}

// maps

class MessageBoard {
    constructor(){
        this.messages = new Map
        this.id = 1;
    }
    addMessage(value){
        this.messages.set(this.id, value);
        this.id++
        return this;
    }
    findMessageById(id){
      return this.messages.get(id)
    }
    findMessageByValue(val){
      for (let msg of this.messages.values()) {
        if(msg === val) return msg;
      }
    }
    removeMessage(id){
        this.messages.delete(id);
        return this;
    }
    numberOfMessages(){
        return this.messages.size;
    }
    messagesToArray(){
        return Array.from(this.messages.values())
    }
}

// sets
function uniqueValues(arr){
  return new Set(arr).size
}

function hasDuplicates(arr){
  return new Set(arr).size !== arr.length
}

function countPairs(arr, num){
    var cache = new Set(arr);
    var count = 0;
    for(let val of arr){
        cache.delete(val)
        if(cache.has(num - val)){
            count++
        }
    }
    return count;
}
