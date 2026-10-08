// Очередь: первым добавили — первым удалили.
function queue(arr, add, exit = 0)
 {
    if (exit != 0)
         {      
        arr.shift();      // Удаляем первый элемент массива.
    } else 
        {              
        arr.push(add);    // Добавляем значение add в конец массива.
    }
    return arr;         
}

queue2 = [];

console.log(queue(queue2, 7));       
console.log(queue(queue2, 14));      
console.log(queue(queue2, 21));      
console.log(queue(queue2, 0, 5)); 
