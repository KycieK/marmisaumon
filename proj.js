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
  var r = element.getAttribute('class');
  if(v == "toque2.png"){
    (v = "toque21.png");
    element.setAttribute('src', v);
    while(r>0){
        r = r - 1;
        
        
    }
  }
  else{
    (v = "toque2.png");
  }
  element.setAttribute('src', v);	
  
  
}