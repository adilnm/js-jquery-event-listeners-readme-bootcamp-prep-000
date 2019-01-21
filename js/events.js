//define functions here

$(document).ready(function(){

// call functions here

});
function getIt()
{
  $(`p`).on(`click`,function()
  {
    alert('Hey!')
  })
}

function submitIt()
{
  $("form").on("submit", function()
  {
    alert("your form is going to be submitted now.")
  }
  )
}


function pressIt()
{
  
}