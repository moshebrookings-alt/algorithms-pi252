//Задача 6: Реализуйте сортировку выбором для массива строк. Например,
//для входного массива ["banana", "apple", "kiwi"] результат должен быть ["apple", "banana", "kiwi"].
//(отсортировали по алфавиту)
function sortAlfabet(arr, Alfabet)
{
    let new_arr = [];

    Alfabet.forEach(function(element)
     {
        arr.forEach(function(word)
         {
            let simbol = word.slice(0, 1);

            if (element == simbol)
                 {
                new_arr.push(word);
            }
        });
    });

    return new_arr;
}
let Alfabet = ['a', 'b', 'c', 'd', 'f', 'k'];
let arr1 = ["fox", "cat", "dog", "apple", "banana"];
console.log(sortAlfabet(arr1, Alfabet));
