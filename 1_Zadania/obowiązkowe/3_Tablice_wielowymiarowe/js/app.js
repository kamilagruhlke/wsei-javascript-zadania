//Zadanie 0
function checkArray(tab){
    for()

    var arr = [
        [11, 12],
        [42, 2],
        [-4, -120],
        [0, 0],
        [1, 34],
        ];
}
//Zadanie 1
var task1Array = [
    [2, 3],
    ["Ala", "Ola"],
    [true, false],
    [5, 6, 7, 8],
    [12, 15, 67]
];

console.log(task1Array[3][2]);
console.log(task1Array[1].length);
console.log(task1Array[4][2]);

//Zadanie 2
var task2Array = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];

//Zadanie 3
function print2DArray(tab){
    for(let i in tab){
        for(let j in tab[i]){
            console.log(tab[i][j])
        }
    }
}
print2DArray([
    [1,2,3],
    [4,5,6]
])

//Zadanie 4
var newtab2 = [
    [1,2,3],
    ["a", "b"]
]

function print2DArray(tab){
    for(let i in tab){
        for(let j in tab[i]){
            console.log(tab[i][j])
        }
    }
}
print2DArray(newtab2);

//Zadanie 5
function create2DArray(rows,columns){
    var it = 0;
    var outsideTab = [];

    for(let i = 0; i < rows; i++){
        insideTab = [];
        for(let j = 0; j < columns; j++){
            insideTab.push(++it);
        }
        outsideTab.push(insideTab);
    }
    return outsideTab;
}
create2DArray(4,4);