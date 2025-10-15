const sumAll = function(a,b) {
if ((a<0) || (b<0) || (!Number.isInteger(a)) || (!Number.isInteger(b))) return 'ERROR'
let sum = 0;
if (a<b){
	let i = a;
	while(i<=b){
	sum += i;
	i++;}
}
else if (a>b){
	let i = a;
	while(i>=b){
	sum += i;
	i--;}
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
