var playing = false;
var score;
var trialsLeft;
var step;
var action;
var fruits = ['banana', 'apple 2', 'apple', 'avocado', 'black graps', 'blueberry', 'Cantaloupe', 'cherry', 'graps', 'lemon', 'mango', 'orange', 'orangeberry', 'pinapple', 'pinkberry', 'redberry', 'strawberry', 'watermellon', 'redbery']
$(function(){
	console.log("line6");
	//Click on start reset button
	$("#startreset").click(function(){
		//if we are playing
		console.log("line10");
		if(playing == true){
			//reload page
			location.reload();
		
		}else { console.log("line11");
			//we are not playing
			playing = true; //game initiated//
			
			//set score to 0
			score = 0; //set score to 0
			$("#scorevalue").html(score);
			
			//show trials left
			$("#trialsLeft").show();
			trialsLeft = 3;
			addHearts();
			   
			//hide game over box
			 $("#gameOver").hide();
			
			//changebutton text to reset game
			$("#startreset").html("Reset Game");
			
			//start sending fruits
			startAction();
		 }
});
	
	$("#fruit1").mouseover(function(){
		score++;
		$("#scorevalue").html(score); //update the score
		
	})
	
//slice a Fruit
	//play sound
	//explode fruits
//function

function addHearts(){
	$("#trialsLeft").empty();
	for (i = 0; i < trialsLeft; i++){
				$("#trialsLeft").append('<img src="images/heart.png" class="life">');
			}
}

//start sending fruits
function startAction(){
	
	//generate a fruit
	$("#fruit1").show();
	chooseFruit();//choose a random fruit
	$("#fruit1").css({
		'left': Math.round(550*Math.random()), 'top': -50});
	//random position
	
	//generate a random step
	step = 1+Math.round(5*Math.random());
	//change step
	
	//move fruit down by one step every 10 ms
	action = setInterval(function(){
		
		// move fruit by one step
		$("#fruit1").css('top', $("#fruit1").position().top + step);
		
		//check if the fruit is too low
		if($("#fruit1").position().top > $("#fruitContainer").height()){
			
			//check if we have trial left
			if(trialsLeft > 1){
				//generate a fruit
	$("#fruit1").show();
	chooseFruit();//choose a random fruit
	$("#fruit1").css({
		'left': Math.round(550*Math.random()), 'top': -50});
	//random position
	
	//generate a random step
	step = 1+Math.round(5*Math.random());
	//change step
				
			//reduce trials by one
			trialsLeft --;
				
			//populate trialsleft box
			addHearts();
			
			} else{//game over
				playing = false; //we are not platying anymore
				$("#startreset").html("Start Game");// change button to Start Game
				$("#gameOver").show();
				$("#gameOver").html('<p>Game Over!</p><p>Youe Score is '+ score  +'</p>');
				$("#trialsLeft").hide();
				stopAction();
				
			
			}
		}
	},10)
}

//generate a random fruit

function chooseFruit(){
	$("#fruit1").attr('src' , 'images/' + fruits[Math.round(17*Math.random())] +'.png');
}

//Stop dropping fruits
function stopAction(){
	clearInterval(action);
	$("#fruit1").hide();
}
	
});
