var allCardElements =document.querySelectorAll(".card");

var change =document.querySelector(".change");
change.innerHTML = colorGenerator();
// change.innerHTML = extractrgbb();
// extractrgbb();

var toppart=document.querySelector(".toppart");
var newgame=document.querySelector("#newgame");
var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");

var chosencolor;
var f;


for(var i = 0; i < allCardElements.length; i++) 
{
    var card = allCardElements[i];
}

// ALL card color gives color to cards
  function allcardcolor()
  {
      var arr=[];
      for(var i=0;i<6;i++)
      {
          arr.push(colorGenerator());
      }
      return arr;
  }
  
var colors=[];
colors=allcardcolor();
// ALL card color gives color to cards

// var allCardElements =document.querySelectorAll(".card");
// var card = allCardElements[0];
// card.style.background=colors[0];
// extractrgbb();

  for(var i = 0; i < allCardElements.length; i++) 
{
    var card = allCardElements[i];
    card.style.background=colors[i];
    console.log(colors[i]);
}

change.innerHTML = extractrgbb();
  function extractrgbb()
  {
      var a=colors[(Math.floor(Math.random()*6))];
      chosencolor=a;
    //   var a=colors[0];
      console.log(chosencolor);
      return a;
  }

  for(var i = 0; i < allCardElements.length; i++) 
{
    var card = allCardElements[i];
    console.log("inside1");
    f=colors[i];
    card.addEventListener("click",function(e)
    {
        // console.log(f);
        cardClicked(this);
    });
  }

  function cardClicked(cardE)
  {
    // console.log(colors[i]);
    var g=cardE.style.background;
    console.log(g);
    console.log(cardE);
    // console.log("chosen colo");
    // console.log(chosencolor);

      if(g===chosencolor)
      {
        console.log("condition checked");
        toppart.style.background=chosencolor;

        for(var i = 0; i < allCardElements.length; i++) 
        {
            var card = allCardElements[i];
            card.style.visibility="visible";
            card.style.background=chosencolor;
        }
      }
      else
      {
          cardE.style.visibility="hidden";
          console.log("condition checked22");
          setTimeout( function ( ) { alert( "moo" ); }, 50 ); 
      }
  }

  function colorGenerator()
  {
      var red=Math.floor(Math.random()*255);
      var green=Math.floor(Math.random()*255);
      var blue=Math.floor(Math.random()*255);
      return "rgb(" + red + ", " + green + ", " + blue + ")";
  }
