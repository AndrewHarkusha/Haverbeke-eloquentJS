function wrapValue(n) {
var localVariable = n;
return function() { return localVariable + 5; };
}
