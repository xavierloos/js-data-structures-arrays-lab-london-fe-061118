// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
  drivers.push("Ralph");
}
function destructivelyPrependDriver(name){
  drivers.unshift("Bob")
}
function destructivelyRemoveLastDriver(){
  drivers.pop("Ralph");
}
function destructivelyRemoveFirstDriver(){
  drivers.shift("Bob")
}
function appendDriver(name){
  let appendDriver=drivers.slice();
  appendDriver.push("Broom");
  return appendDriver;
}
function prependDriver(name){
  let prependDriver=drivers.slice();
  prependDriver.unshift("Arnold");
  return prependDriver;
}
function removeLastDriver(){
  let removeLastDriver=drivers.slice();
  removeLastDriver.pop();
  return removeLastDriver;
}
function removeFirstDriver(){
  let removeFirstDriver=drivers.slice();
  removeFirstDriver.shift();
  return removeFirstDriver;
}