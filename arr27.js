// ok
var a = [1, 22, 5, 8, 9, 15, 13];
var n = 7;
var i = 0;
var k = 2;

if(a[0] % 2 == 1){
	for (var i = 0; i < n; i+=k){
			if(a[i] % 2 == 1 && a[i + 1] % 2 == 0){
				console.log(0);
				//console.log(a[i]);
				
			}
			else { 
				console.log(i + 1);// должно быть 5, 
				break;
			}
			
	}
}




/*Array26. Дан целочисленный массив размера N. Проверить, чередуются ли в нем четные и нечетные числа. Если чередуются, то вывести 0, если нет, то вывести порядковый номер первого элемента, нарушающего закономерность. */