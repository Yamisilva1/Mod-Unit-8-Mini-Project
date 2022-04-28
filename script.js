

//Write Code for Task One below this line!
//1. Create two arrays with two image links to TV show recommendations for each type: comedy, action, drama. Use doc in task one
   let comedy=[ "https://link-hosting-curriciulum-dev.glitch.me/uploaded/2254c5d6a60c3373096d1e1d9248612f.jpg", "https://whsat-imagehosting.glitch.me/uploaded/2730edfc300541103fb9733348090cee.jpg "];
	 let action =["https://image.shutterstock.com/image-photo/siberian-tiger-panthera-tigris-altaica-260nw-653698696.jpg", "https://media.istockphoto.com/photos/team-in-action-picture-id1124998782"];
let drama=["https://cdn2.atraccion360.com/media/aa/styles/xlarge/public/1283921_0.jpg", "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/20-peliculas-que-todo-el-mundo-ha-visto-alguna-vez/131193373-1-esl-ES/20-peliculas-que-todo-el-mundo-ha-visto-alguna-vez.jpg?crop=1xw:0.7388167388167388xh;center,top&resize=480:*"];

$(".submit-button").click(function(){
    let genreInput=$(".get-suggestions").val();
     $(".shows").empty();
//Write code for Task Two below this line!
//2. Write an if-else if statements so the computer will show certain images when the user types in certain genre.
   if(genreInput==="comedy"){
     for(let show of comedy){
    $(".shows").append("<img src="+show+">");
    }
	}
    else if(genreInput==="action"){
    for (let show of action){
    $(" .show").append("img src="+ show+">");
    }
    }
    else if(genreInput==="drama"){
    for (let show of drama){
    $(".shows").append("img src="+ show+">");
    }
    }
});

$(".suggestion-button").click(function(){
    let suggestion=$(".give-suggestions").val();
    $(".shows").text("Thanks for your suggestion! Check the console to see that it was added!");
//Write code for Task Three below this line!
//3. Write a code using .push to allow the user to make TV show suggestions.
	comedy.push(suggestion);
    console.log(comedy);
    action.push(suggestion);
    console.log(action);
    drama.push(suggestion);
    console.log(drama);

    
});