// iterates through in a different way than instructions, but works
var sum_pairs=function(ints, s){
  var intsArray = ints
  var total = s
  var finalArray = []
  var i = 0
  let count = 1
  while(i < intsArray.length && count < intsArray.length) {
    if(intsArray[i] + intsArray[i + count] == total) {
      finalArray.push(intsArray[i])
      finalArray.push(intsArray[i + count])
      return finalArray
    }
    else if(i + count == intsArray.length - 1) {
      i++
      count = 1
    }

    else {
      count += 1
    }
  }
  if(finalArray.length > 0) {
    return finalArray
  }
  else {
    return undefined
  }
}

// unfinished
function mixedFraction(s){
  let answer = 0
  const decimal = s
  let numerator = 0
  let denominator = 0
  if (isNaN(decimal) || decimal == Infinity) {
    answer = decimal
  }
  const split = decimal.toString().split('')
  if (split[0] == 0) {
    const zeroFrac = split.slice(2, split.length)
    numerator = zeroFrac.join('')
    const length = zeroFrac.length
    denominator = Math.pow(10, length)
  }
  else if (!split.includes('.')) {
    answer = s
  }
  else {
    const splitNum = decimal.toString().split('.')
    const primary = splitNum[0]
    numerator = splitNum[1]
    const splitStuff = splitNum[1].split('')
    const length = splitStuff.length
    denominator = Math.pow(10, length)
  }
  console.log(numerator)
  console.log(denominator)
  console.log(answer)
}

function hostName(url){
  var hostname
  if (url.indexOf("://") > -1) {
    hostname = url.split('/')[2]
  }
  else {
    hostname = url.split('/')[0]
  }
  return hostname
}

function domainName(url) {
  let hostname = hostName(url)
  if (hostname.indexOf('www.') > -1) {
    hostname = hostname.replace('www.', '')
  }
  const domain = hostname.split('.')[0]
  return domain
}

var nbrOfLaps = function (x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) {
    return false
  }
  return (!x || !y) ? 0 : Math.abs((x * y) / greatestCommonDen(x, y))
}
function greatestCommonDen(x, y) {
  x = Math.abs(x)
  y = Math.abs(y)
  while(y) {
    var t = y
    y = x % y
    x = t
  }
  return x
}

function permutations(string) {
    function recur(string, prefix) {
        if (string.length === 0) {
            return [prefix];
        } else {
            var out = [];
            for (var i = 0; i < string.length; i++) {
                var pre = string.substring(0, i);
                var post = string.substring(i + 1);
                out = out.concat(recur(pre + post, string[i] + prefix));
            }
            return out;
        }
    }
    var distinct = {};
    recur(string, "").forEach(function(result) {
        distinct[result] = true;
    });
    return Object.keys(distinct);
}


function rot13(message){
  const abcArray = [0, 'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z']
  const specialArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '+', '=', '.', ',', '?']
  const messageArray = message.split('')
  const rotArray = []
  messageArray.forEach(char => {
    if (specialArray.includes(char)) {
      rotArray.push(char)
    }
    else if (abcArray.includes(char)) {
      const abcIndex = abcArray.indexOf(char)
      let rotIndex = abcIndex + 26
      if (rotIndex > 52) {
        rotIndex = rotIndex - 52
      }
      const newChar = abcArray[rotIndex]
      rotArray.push(newChar)
    }
  })
  const rotString = rotArray.join('')
  return rotString
}

function divisors(integer) {
  const array = []
  for (let i = 2; i < integer; i++) {
    if (integer % i == 0) {
      array.push(i)
    }
  }
  if (array.length === 0) {
    return integer + ' ' + 'is prime'
  }
  return array
}

function componentToHex(c) {
    if (c > 255) {
      c = 255
    }
    if (c < 0) {
      c = 0
    }
    var some = c.toString(16);
    var hex = some.toUpperCase()
    return hex.length == 1 ? "0" + hex : hex;
}

function rgb(r, g, b){
  return componentToHex(r) + componentToHex(g) + componentToHex(b)
}

const binArray = [0, 0, 1, 0]

function binary(binArray) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[0] * 2^0)
    console.log(array[1] * 2^1)
    console.log(array[2] * 2^2)
    console.log(array[3] * 2^3)
    return array[3] * Math.pow(2, 0) + array[2] * Math.pow(2, 1) + array[1] * Math.pow(2, 2) + array[0] * Math.pow(2, 3)
  }
}

const str = "An example!"

function reverseWords(str) {
  const split = str.split(' ')
  const array = []
  split.forEach(a => {
    const splitChar = a.split('').reverse().join().replace(/,/g, "")
    array.push(splitChar)
  })
  return array.join(' ')
}
const n = 10

function findSum(n) {
  const div3 = n / 3
  const div5 = n / 5
  const floor3 = Math.floor(div3)
  const floor5 = Math.floor(div5)
}

function validPhoneNumber(phoneNumber) {
  const split = phoneNumber.split('')
  if (split[0] !== '(') {
    return false
  }
  else if (split[5] !== ' ') {
    return false
  }
  else if (split.length !== 14) {
    return false
  }
  else if (split[4] !== ')') {
    return false
  }
  else if (split[9] !== '-') {
    return false
  }
  else {
    return true
  }
}

function findLongest(array){
  var longest = 0
  for (var i = 0; i < array.length; i++) {
    if (array[i].toString().length > longest.toString().length) {
      longest = array[i]
    }
  }
  return longest
}

function scramble(str1, str2) {
  const split2 = str2.split('').sort()
  const split1 = str1.split('').sort()
  var i = 0
  for (var x = 0; x <= split1.length && i < split2.length; x++) {
    if (split1[x] === split2[i]) {
      i++
    }
  }
  return (x <= split1.length)
}
