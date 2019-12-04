
var a = [100, 52, 99, 4, 87, 6, 7, 8, 9, 10];
var n = 10; // a.length
var k = 2;
// ok

var i = 0;
var min = a[0];

for(i = k; i < n; i+=k){ 
	if(min > a[i]){
		min = a[i];
	}
}
console.log(min);




/*
for(i = k; i < n; i+=k){ //i+=k
	//console.log(a[i]);
	if(a[k] > a[k + 1]){
		var tmp = a[k + 1];
		 a[k + 1] = a[k];
		 a[k] = tmp;
	}
}
for(i; i < n; i++){
console.log(a[i]);
}
*/



/*Array28. Дан массив A размера N. Найти минимальный элемент из его элементов с четными номерами: A2, A4, A6, ...*/ 