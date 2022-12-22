var i = 0;
var r = 0;

//ajout d'un ingrédient (on leur donne aussi un id different pour tous)
function AddInput()
{
    var x = document.getElementById("ingredients");
    var input1 = document.createElement('input');
    var input2 = document.createElement('input');
    var input3 = document.createElement('input');

    input1.setAttribute('type', 'text');
    input1.placeholder = "nom ingrédient : poivre";
    input1.size = input1.placeholder.length;
    input1.name = 'premier';

    input2.setAttribute('type', 'number');
    input2.setAttribute('min','0');
    input2.setAttribute('max','999');
    input2.placeholder = "quantité";

    input3.setAttribute('type', 'text');
    input3.placeholder = "unité : gramme(s) / kilo(s)";
    input3.size = input3.placeholder.length;


    i++;
    input1.id = i;
    input2.id = i;
    input3.id = i;

    x.appendChild(input1);
    x.appendChild(input2);
    x.appendChild(input3);
}

//suppression de l'ingrédient ajouté le plus récent (grâce aux id differents)
function RemoveInput(){
    if(i==0) {
        alert("il n'y a plus d'ingrédient à retirer");
    }
    var x = document.getElementById(i);
    x.remove();
    var y = document.getElementById(i);
    y.remove();
    var z = document.getElementById(i);
    z.remove();
    i--;
}

//gère l'affichage des toques qui correspondent à la difficultée de la recette ajoutée
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
    while(q<5){
        q++;
        let t = document.getElementsByClassName(q).item(0);
        t.setAttribute('src',v);
    }
  } 
  
}

//permet un reset de la diffcultée par un double clique sur la premiere toque
function resetDiff(){
    let m = document.getElementsByClassName(1).item(0);
    m.setAttribute('src', 'toque2.png');
}