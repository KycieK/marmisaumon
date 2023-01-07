var i = 0;
var r = 0;

//gère l'affichage des toques qui correspondent à la difficultée de la recette ajoutée
function changeImage(element)
{
    let v = element.getAttribute('src');
    if(v == "toque2.png"){!
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

//permet un reset de la diffcultée par un double-clic sur la premiere toque
function resetDiff(){
    let m = document.getElementsByClassName(1).item(0);
    m.setAttribute('src', 'toque2.png');
}

//ajout d'un ingrédient (on leur donne aussi un id different pour tous)
function addInput()
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

    input1.className = 10+i;
    input2.className = 10+i;
    input3.className = 10+i;

    x.appendChild(input1);
    x.appendChild(input2);
    x.appendChild(input3);
}

//suppression de l'ingrédient ajouté le plus récent (grâce aux id differents)
function removeInput(){
    if(i==0) {
        return alert("il n'y a plus d'ingrédient à retirer");
    }
    var x = document.getElementById(i);
    x.remove();
    var y = document.getElementById(i);
    y.remove();
    var z = document.getElementById(i);
    z.remove();
    i--;
}

//affichage du form
function displayForm() {
    let x = document.getElementById("invisibleMain");
    let y = document.getElementById("disparait");
    x.setAttribute('style','display:block');
    y.setAttribute('style','display:none')
}

//suppression du form
function cancel() {
    let x = document.getElementById("invisibleMain");
    let y = document.getElementById("disparait");
    y.setAttribute('style','display:block');
    x.setAttribute('style','display:none')
}

//zone de texte de la preparation pendant la cuisson 
function changeId(){
    let x = document.getElementById("invisible");

    if(x.getAttribute('style')=='display:none'){
        x.setAttribute('style','display:block');
    }
    else x.setAttribute('style','display:none')
}

//ajout de recette
function addRecette(){
    //nom
    const nomRecette = document.getElementById("recette").value;

    //durée recette
    const tempsTotalH = document.getElementById("temps1.1").value;
    const tempsTotalMin = document.getElementById("temps1.2").value;
    
    const tempsPrepH = document.getElementById("temps2.1").value;
    const tempsPrepMin = document.getElementById("temps2.2").value;

    const tempsCuiH = document.getElementById("temps3.1").value;
    const tempsCuiMin = document.getElementById("temps3.2").value;

    //difficultée recette (pas fait de manière intelligente mais plus facile comme ca pour plus tard)
    const toque1 = document.createElement('img');
    toque1.src = document.getElementsByClassName(1).item(0).src;
    toque1.setAttribute("id","imgdiff");

    const toque2 = document.createElement('img');
    toque2.src = document.getElementsByClassName(2).item(0).src;
    toque2.setAttribute("id","imgdiff");

    const toque3 = document.createElement('img');
    toque3.src = document.getElementsByClassName(3).item(0).src;
    toque3.setAttribute("id","imgdiff");
    
    const toque4 = document.createElement('img');
    toque4.src = document.getElementsByClassName(4).item(0).src;
    toque4.setAttribute("id","imgdiff");
    
    const toque5 = document.createElement('img');
    toque5.src = document.getElementsByClassName(5).item(0).src;
    toque5.setAttribute("id","imgdiff");

    //ingredients, le code est un peu compliqué car on doit trouver le nombre d'ingrédients et on insere une sécurité dans le cas d'ajout d'ingrédient post envoi de recette
    const listeNomIngredients = [];
    listeNomIngredients.length = i;

    const listeQtiteIngredients = [];
    listeQtiteIngredients.length = i;

    const listeGrandeurIngredients = [];
    listeGrandeurIngredients.length = i;

    var j = i;
    if(i>0) {
        do{
            listeNomIngredients[j] = document.getElementsByClassName(10+j).item(0).value;
            listeQtiteIngredients[j] = document.getElementsByClassName(10+j).item(1).value;
            listeGrandeurIngredients[j] = document.getElementsByClassName(10+j).item(2).value;
            j-- ;
        }while(j>0)
    }

    //zones de texte 
    const prepRecette = document.getElementById("box1").value;
    const CuiRecette = document.getElementById("box2").value;
    const prepCuiRecette = document.getElementById("invisible").value;

    const newRecette = document.getElementById('newRecette');
    const newRecetteImg = document.getElementById('newRecetteImg');
    const newRecette2 = document.getElementById('newRecette2');

    document.getElementById('newRecette').innerHTML = nomRecette + "<br>" + "Le temps total que vous devez prévoir est de  " + tempsTotalH  +"h"+ tempsTotalMin + 'min</br>' + "Le temps de préparation est de " + tempsPrepH + "h" + tempsPrepMin + "min<br>" + "Le temps de cuisson est de " + tempsCuiH + "h" + tempsCuiMin + "min<br>";
    var pval = '';
    if(i>0) {
        do{
            pval = listeNomIngredients[i] + " " + listeQtiteIngredients[i] + " " + listeGrandeurIngredients[i] +"<br>"+pval;
            listeNomIngredients.push(listeNomIngredients[i]);
            listeQtiteIngredients.push(listeQtiteIngredients[i]);
            listeGrandeurIngredients.push(listeGrandeurIngredients[i]);
            i--;
        }while(i>0)
    }
    document.getElementById('newRecette2').innerHTML = pval + "<br>";
    if(prepRecette != ''){newRecette2.append(prepRecette);}
    if(CuiRecette != ''){newRecette2.append(CuiRecette);}
    if(prepCuiRecette != ''){newRecette2.append(prepCuiRecette);}
    
}