var i = 0;

function AddInput()
{
    var x = document.getElementById("ingredients");
    var input = document.createElement('input');

    input.setAttribute('type', 'text');
    input.placeholder = "nom ingrédient";
    input.size = input.placeholder.length;

    i++;
    input.id = i;

    x.appendChild(input);
}

function RemoveInput(){
    var x = document.getElementById(i);
    x.remove();
    i--;
}


function changeImage(element)
{
  let v = element.getAttribute('src');
  if(v == "toque2.png"){
    (v = "toque21.png");
    let r = element.getAttribute('class');
    while(r>0){
        let s = document.getElementsByClassName(r).item(0);
        s.setAttribute('src',v);
        r--;
    }
  }
  else{
    (v = "toque2.png");
    let q = element.getAttribute('class');
    while(q<6){
        let t = document.getElementsByClassName(q).item(0);
        t.setAttribute('src',v);
        q++;
    }
  } 
  
}