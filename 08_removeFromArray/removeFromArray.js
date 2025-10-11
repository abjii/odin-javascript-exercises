const removeFromArray = function(array,...args) {
	args.forEach(function(arg) {
	let index =0;
	do{
	index = array.findIndex(item => item === arg);
	if (index>=0){array.splice(index,1);}
	}while (index>=0)	
	})
	
	return (array);
};

// Do not edit below this line
module.exports = removeFromArray;
