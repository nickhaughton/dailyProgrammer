//Input
var Input = [4,3,0,4,0];
//var Input = [10,1,3,5,4,0,0,7,0,0,6];


//Logic
var filteredInput = [];
var sum = 0;

//Filter
for (var i = 0; i < Input.length; i++) {
	if(Input[i + 1] == 0 && filteredInput.length > 0){
		filteredInput[i].splice(i);
	}else if(Input[i + 1] != 0){
		filteredInput[i].push(Input[i + 1]);
	}
};


//Sum

for (var i = 0; i < filteredInput.length; i++) {
	sum += filteredInput[i];
};


console.log(sum);