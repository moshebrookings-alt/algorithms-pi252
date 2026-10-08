// Стек: последним добавили — первым удалили.
function stack(arr, add, exit = 0) {
    if (exit != 0)
         {       
        arr.pop();        // Удаляем последний элемент массива.
    } else 
        {              
        arr.push(add);    // Добавляем значение add в конец массива.
    }
    return arr;          
}

stack2 = []; // Создаём пустой массив для нашего стека.

console.log(stack(stack2, 7));      
console.log(stack(stack2, 14));      
console.log(stack(stack2, 21));      
console.log(stack(stack2, 0, 2)); 