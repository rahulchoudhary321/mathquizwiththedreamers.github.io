let index=0;
let attempt=0;
let score=0;
let wrong=0;
let questions=quiz.sort(function(){
   return 0.5-Math.random();
});
let totalquestion=questions.length;
$(function(){
   alert("Are you Ready for this Quiz");
let totaltime=480; //48 0 seconds for timer
let min=0;
let sec=0;
let counter=0;
let timer = setInterval(function(){ 
    counter++;
    min =Math.floor((totaltime - counter)/60) //calculating min
    sec=totaltime - (min*60)-counter;
     $(".timerbox span").text(min+":"+sec);
     if(counter==totaltime){
      clearInterval(timer);
      result();
        
     }

},1000);// timerset for 1 second inverval
//print question
printQuestion(index);

});
//funtion to print questions
function printQuestion(i){
   $(".questionbox").text(questions[i].question);
   $(".optionbox span").eq(0).text(questions[i].option[0]);
    $(".optionbox span").eq(1).text(questions[i].option[1]);
     $(".optionbox span").eq(2).text(questions[i].option[2]);
      $(".optionbox span").eq(3).text(questions[i].option[3]);
}
//function to check answer
function checkAnswer(option){
   attempt++;

   let optionClicked=$(option).data("opt");

   if(optionClicked==questions[index].answer){
      $(option).addClass("right");
      score++;}
      else{
      $(option).addClass("wrong");
      wrong++;
      
      
      }
$(".scorebox span").text(score);
$(".optionbox span").attr("onclick","")
}

//function for the next question 
function showNext(){
   if(index>=(questions.length - 1)){
      showResult(0);
      return;
   }
   index++;
   $(".optionbox span").removeClass();
   $(".optionbox span").attr("onclick","checkAnswer(this)");
   printQuestion(index); 
}
//function for result box
function showResult(j){
   if(
      j==1 &&
      index < questions.length-1 &&
      !confirm("Quiz has not Finished yet. Press OK to skip the Quiz & Get your Final Result")

   ){
      return; 
   }
   result();
  
}
// result function start
function result(){
   $("#questionscreen").hide();
   $("#resultscreen").show()
   $("#totalquestions").text(totalquestion);
   $("#attemptquestions").text(attempt);
   $("#correctanswers").text(score);
   $("#wronganswers").text(wrong);

}