let num=[[1, 2, 3], 
        [4, 5, 6],
         [7, 8, 9]];

console.log(num[2][2]);//    output: 9


//looping through 2D array   
for(let i=0;i<num.length;i++)
    {

        for(let j=0;j<num[i].length;j++){

            console.log(num[i][j]);

        }
    }//output: 1, 2, 3, 4, 5, 6, 7, 8, 9


console.log(num); //    output: [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]







let marks=[
[90, 80, 70],
[50,40],
[10],
[60, 70, 80, 90]
];

console.log(marks);//    output: [ [ 90, 80, 70 ], [ 50, 40 ], [ 10 ], [ 60, 70, 80, 90 ] ]

//iterating through 2D array using for loop
for(let i=0;i<marks.length;i++)
{
    for(let j=0;j<marks[i].length;j++)
    {
        console.log(marks[i][j]);//    output: 90, 80, 70, 50, 40, 10, 60, 70, 80, 90
    }
}



//iterating through 2D array using for loop
for(let i=0;i<marks.length;i++)
{
    for(let j=0;j<marks[i].length;j++)
    {
        process.stdout.write(`${marks[i][j]} `); 

    }
    console.log(); // to move to the next line after each row
}//output:
//90 80 70 
//50 40 
//10 
//60 70 80 90