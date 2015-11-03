function wrapValue(n) {
	var localVariable = n;
	return function() { 
		return localVariable + 5; 
		};
}

function min(a, b){
	if (a <= b){
		return a;
	} else {
		return b;
	}
	
}

function countBs(Str, Chr){
	var i = 0, count = 0;
	while (i<=((Str.length)-1)){
		if(Chr==Str.charAt(i)){
			count++;
		}
		i++;
	}
	return count;
}