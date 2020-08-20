//1. Write rFib(num). Recursively compute and return numth Fibonacci value. As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. 

//rFib(2) = 1 (0+1); 

//rFib(3) = 2 (1+1); 

//rFib(4) = 3 (1+2); 

//rFib(5) = 5 (2+3).rFib(3.65) = rFib(3) = 2, rFib(-2) = rFib(0) = 0.

function rFib(num){//Initial function call is rFib(5)
    if (num==0){//base case
        return 0;
    }
    else if(num==1){
        return 1;//base case
    }
    else{//Always want to approach our base case
        return rFib(num-1)+rFib(num-2)// rFib(4)+rFib(3), -> [(rFib(4) -> rFib(3)+rFib(2)] + [(rFib3) -> rFib(2) + rFib(1)]), -> [rFib(3) -> (rFib(2) + rFib(1))] + [rFib(2) -> rFib(1)+rFib(0)] + [(rFib(2) -> rFib(1)+rFib(0))] + [rFib(1) -> 1]
    }//rFib(1) = 1, rFib(0) = 0

}
// console.log(rFib(9));
//1+1+1+0+1+0+1
//Fibonacci = 0(position 0), 1(position 1), 1, 2, 3, 5

///////////////////////////////////////////////////////////////////////////////////////////

//2. Write function rTrib(num) to mimic Fibonacci, adding previous three values instead of two. First three Tribonacci numbers are 0, 0, 1, so rTrib(3) = 1 (0+0+1); rTrib(4) = 2 (0+1+1); rTrib(5) = 4 (1+1+2); rTrib(6) = 7 (1+2+4). Handle negatives and non-integers appropriately and inexpensively.

function countdown(num){
    if(num == 0){//the only base case here in this countdown function is 0, and the reason why is because  
        console.log(0);
        return
    }
    else{
        console.log(num);
        countdown(num-1);
    }
}
// countdown(10);

//////////////////////////////////////////////////////////////////////////////////////////////

//Given a sorted array and a value, recursively determine whether value is found within array. 

//rBinarySearch([1,3,5,6],4) = false; 

//rBinarySearch([4,5,6,8,12],5) = true.

function rBinarySearch(arr, val){
    if (arr.length == 0){
        return false;
    }
    else if (arr[arr.length - 1] == val){
        console.log("Made it to the promise land");
        return true;
    }
    else {
        arr.pop();
        console.log(arr);
       return rBinarySearch(arr, val);
    }
}
// console.log(rBinarySearch([1,3,5,6],4));

/////////////////////////////////////////////////////////////////////////////////////////////////

//Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both). Greek mathematician Euclid demonstrated these facts:

//gcf(a,b) == a, if a == b;
//gcf(a,b) == gcf(a-b,b), if a>b;
//gcf(a,b) == gcf(a,b-a), if b>a.
//Second: rework facts #2 and #3 to reduce stack consumption and expand rGCF’s reach. You should  be able to compute rGCF(123456,987654).


function rGCF(num1, num2){
    if (num1 == num2){
        console.log(num1);
        return num1;
    }
    else{
        if(num1>num2){
            return rGCF(num1 - num2, num2);
        }
        else if(num1<num2){
            return rGCF(num1, num2 - num1);
        }
    }
}
console.log(rGCF(123456,987654));