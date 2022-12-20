var i = 0;

function AddInput()
{
    var x = document.getElementById("ingredients");
    var input = document.createElement('input');

    input.setAttribute('type', 'text');
    input.placeholder = "nom ingrédient";
    input.size = input.placeholder.length;

    i = i + 1;
    input.id = i;

    x.appendChild(input);
}


function changeImage(element)
{
  var v = element.getAttribute('src');
  if(v == "toque2.png")
    (v = "toque21.png");
  else
    (v = "toque2.png");
  element.setAttribute('src', v);	
}