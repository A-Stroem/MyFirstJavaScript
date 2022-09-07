function out(any) {console.log(any)}
out('I am in types')

function showTypes(lst) {
  out('START showing Types')
  for (const obj of lst) {
    out(obj + ' is of the type = ' + typeof obj)
  }
}

let arr = [1, 2]
out(arr)

arr = [1, 5, "hello", 5.5, 4>3, [1, 2], {"firstName" : "Erik"}, null]
out(arr)
showTypes(arr)
out('hello there')

let aa
arr.push(aa)
showTypes(arr)

