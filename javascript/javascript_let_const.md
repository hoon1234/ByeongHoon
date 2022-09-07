# 1. JavaScript = var , let , const history 
![image](https://user-images.githubusercontent.com/85986176/188850198-205dd6c6-a976-4062-970e-71164fabfe3d.png)


        ->  The var keyword is used in all JavaScript code from 1995 to 2015. 
        ->  The let and const keywords were added to JavaScript in 2015.      
        ->  If you want your code to run in older browser, you must use var. 
                
        -> var 키워드는 1995 ~ 2015 까지 모든 자바스크립트 코드에서 사용되었습니다.
        -> let 과 const 키워드는 2015년에 자바스크립트에 추가 되었습니다.
        -> 당신이 오래된 브라우저에서 작동하기 위한 코드를 원한다면, var 키워드를 사용하세요.

---------------------------------------------------------------------------------

# 2. const, let 
        -> If you want a general rule: always declare variables with const. <br>
        -> If you think the value of the variable can change, use let. <br>
        
        -> 당신이 일반적인 규칙을 원한다면, 항상 const를 가진 변수를 선언하세요<br>
        -> 당신이 변수들의 가치를 바꾸길 원한다면, let 변수를 사용하세요. <br>
    
---------------------------------------------------------------------------------

# 3. (예제) 

        -> const price1 = 5; 
        -> const price2 = 6; 
        -> let total = price1 + price2; 

        -> The two variables price1 and price2 are declared with the const keyword.
        -> These are constant values and cannot be changed.
        -> The variable total is declared with the let keyword.
        -> This is a value that can be changed.

        -> price1 & price2 두 변수들은 const 키워드로 선언 되었습니다.
        -> 이 상수의 가치들은 변경될수 없습니다.
        -> total 변수는 let 키워드로 선언되었습니다.
        -> total 변수는 변경될수 있습니다. 

# block
        - 블록문(또는 다른 언어에서는 복합문)은 0개 이상의 구문을 묶을 때 사용합니다.
        - 블록문은 복합문이라고 부르기도 합니다. 블록문을 쓰면 JavaScript가 하나의 문을 기대하는 곳에서 다수의 문을 실행할 수 있습니다.
        - var로 선언한 변수는 블록 범위를 가지지 않습니다. 블록 내에서 선언한 변수의 범위는 함수나 스크립트가 되어, 값 할당의 영향이 블록 바깥까지 미칩니다.
        - let과 const로 선언한 식별자는 블록 범위를 가집니다.



# 참고
       - https://www.w3schools.com/js/js_variables.asp 
       - https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/block
