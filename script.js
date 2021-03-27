//declaring variables
var score,ans,i,j,p=0,t=0,n;
score=0;
//no. of questions
n=20;

//newQuestion() --> to display new question with diffrent random options
function newQuestion() {
document.getElementsByClassName("option").innerHTML=" ";

//assigning random values to i and j
i=Math.floor((Math.random() *100) +1 );
j=Math.floor((Math.random() *100) +1 );

//formatting question
document.getElementById("q_no").innerHTML= "Q."+(p+1);
document.getElementById("q_name").innerHTML= i+"+"+j;

//correct option- randomly from opt1 to opt4
var c= Math.floor( (Math.random() * 3) + 1);
document.getElementById("opt"+c).innerHTML= i+j;

//display options
for(var t=1;t<5;t++) {
    if(t!=c)
    document.getElementById("opt"+t).innerHTML= Math.floor((Math.random() *100) +1 )+Math.floor((Math.random() *100) +1 );   
}
}

//complete() --> to conclude if "submit" or all questions reached
function complete() {
document.getElementById("timeLeft").innerHTML=" ";
document.getElementById("q_no").innerHTML= " ";
document.getElementById("q_name").innerHTML= " ";

for(var t=1;t<5;t++)
document.getElementById("opt"+t).innerHTML= " ";

document.getElementsByClassName("opt").innerHTML= " ";
document.getElementById("action_buttons").innerHTML=" ";

document.getElementById("greeting").innerHTML="Congratulations !! You Scored "+score+" points."; 
}

//check() --> to check whether chosen option is correct
function check() {
    ans=document.forms[0];
    for(var t=0;t<ans.length;t++) {
        if(ans[t].checked) {
            ans=document.getElementById("opt"+(t+1)).textContent;
            break;
        }                    
    }

    if((i+j)==ans)
    score+=5;

    p++;
    if(p==n)
    complete();
    else
    newQuestion();  
}

function showTimeLeft() {
    if(t<n) {
    document.getElementById("timeLeft").innerHTML="Time Left: "+(20-t++);
    setTimeout( showTimeLeft, 1000);
    }                
    else
    document.getElementById("timeLeft").innerHTML=" ";
}
setTimeout( showTimeLeft, 1000);
setTimeout( complete, n*1000+1000);
newQuestion();
document.getElementById("next").addEventListener("click", check );

document.getElementById("submit").addEventListener("click", complete );

