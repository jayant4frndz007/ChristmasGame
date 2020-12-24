/*
Team A

"Neelima",
"Laxmikant",	
"Anjana",
"Ankita",
"Dashbal",
"Bhargav",
"Harshil",
"Karan",
"Lavanya",
"Nandan Grover",	
"Nayan",
"Pawan Kumar",	
"Prakash Barad",	
"Shibani",
"Sourabh Jain",	
"Srikrishna",
"Swapnil k",
"Swapnil shindhe",	
"Tanmay Jain",
"Tarek Ganesh",	
"Jatin Batra",

 */

 let TeamA=["Neelima", "Laxmikant", "Anjana", "Ankita", "Dashbal", "Bhargav", "Harshil", "Karan", "Lavanya", "Nandan Grover", "Nayan", "Pawan Kumar", "Prakash Barad", "Shibani", "Sourabh Jain", "Srikrishna", "Swapnil k", "Swapnil shindhe", "Tanmay Jain", "Tarek Ganesh", "Jatin Batra","Tejas Nikam"];
 let TeamB=["vamshi"," Vijay Vibhute", "Amol", "Sonali", "Abhinav", "Asmit", "Avinash", "Devesh sharma", "Gaurav", "Jayant", "Kiran", "Megha", "Nazia"," Pooja Mehta", "Rahul khanna", "Akshay Jain", "Rajat tiwari", "Ramachandran", "Sayali", "Sandip Dumbare"," Varsha Gujar"];
 var totalTime;

 function callTeamA(){
    totalTime=30;
     callTimer();
  console.log('a');
  let resA=document.getElementById('resultA');
  let resB=document.getElementById('resultB');
  resB.innerHTML='';
  let randomNumA= Math.floor(Math.random()*(TeamA.length));
  resA.innerHTML="Loading......";
  setTimeout(()=>{
    resA.innerHTML=TeamA[randomNumA];
  },1000)
 
 }
 function callTeamB(){
    totalTime=30;
    callTimer();
    console.log('b');
    let resB=document.getElementById('resultB');
    let resA=document.getElementById('resultA');
    resA.innerHTML='';
    let randomNumB= Math.floor(Math.random()*(TeamB.length));
    resB.innerHTML="Loading......";
    setTimeout(()=>{
        resB.innerHTML=TeamB[randomNumB]
    },1000)
   
 }
 
 function callTimer(){
     
    let timeData = setInterval(function(){
       
        if(totalTime < 0){
            document.getElementById("timmer").innerHTML = '';
            clearInterval(timeData);
        }else{
            document.getElementById("timmer").innerHTML = totalTime-- +'sec';
        }}, 1000);
    
    
 }

//  function myTimer(timeData) {
//     if(totalTime < 0){
//         totalTime=10;
//         window.clearInterval(timeData)
//         return;
//     }
   
//   }

