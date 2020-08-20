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
console.log(rFib(9));//1+1+1+0+1+0+1
//Fibonacci = 0(position 0), 1(position 1), 1, 2, 3, 5


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
countdown(10);