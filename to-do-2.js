//Write rFib(num). Recursively compute and return numth Fibonacci value. As earlier, treat first two (num = 0, num = 1) Fibonacci vals as 0 and 1. 

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
