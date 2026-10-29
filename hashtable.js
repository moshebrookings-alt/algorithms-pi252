
function HashTable(arr, key, val)
{
    if (arr.hasOwnProperty(key))
    {
        console.log('Такой элемент уже существует: ' +key);
    }
    else
    {
        arr[key] = val;
        console.log('Добавлен новый элемент: ' +key);
    }
    return arr;
}
let arr1 ={'apple': 100,'banana': 200};

HashTable(arr1, 'lemon', 300);
HashTable(arr1, 'apple', 500);
HashTable(arr1, 'orange', 400);
HashTable(arr1, 'lemon', 600);

console.log(arr1);
