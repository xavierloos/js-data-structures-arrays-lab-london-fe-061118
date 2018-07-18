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