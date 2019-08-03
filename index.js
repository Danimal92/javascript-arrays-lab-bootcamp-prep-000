var kittens = ["Milo", "Otis", "Garfield"] //define your array here

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

  function destructivelyPrependKitten(name){
    kittens.unshift(name)
    return kittens
  }

      function destructivelyRemoveLastKitten(){
        kittens.pop()
        return kittens
      }

 function destructivelyRemoveFirstKitten(){
   kittens.shift()
   return kittens
 }

 function appendKitten(name){
   var newArr = kittens.concat(name)
   return kittens
 }

  function prependKitten(name){
    var newArr = name.concat(kittens)
  }

 function removeLastKitten(){
   newArr = kittens.slice(0,(kittens.length - 1))
   return kittens 
 }

function removeFirstKitten(){
  newArr = 
}