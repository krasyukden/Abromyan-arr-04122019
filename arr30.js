// ok

var a = [100, 52, 99, 4, 87, 6, 7, 8, 9, 10];
var n = 10; // a.length
var i = 0;
var k = 0;

for(i; i < n; i++){
	if(a[i] > a[i + 1]){
		console.log(i);
		k++;
	}
}
console.log(k);

/*Array30. Дан массив размера N. Найти номера тех элементов массива, которые больше своего правого соседа, и количество таких элементов. Найденные номера выводить в порядке их возрастания. */