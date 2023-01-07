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
    const nomRecette = document.getElementById("recette");

    //type recette
    const quelleRecette = document.getElementById("quelRepas");
    const typeRecette = document.getElementById("typeRecette");

    //durée recette
    const tempsTotalH = document.getElementById("temps1.1");
    const tempsTotalMin = document.getElementById("temps1.2");
    
    const tempsPrepH = document.getElementById("temps2.1");
    const tempsPrepMin = document.getElementById("temps2.2");

    const tempsCuiH = document.getElementById("temps3.1");
    const tempsCuiMin = document.getElementById("temps3.2");

    //difficultée recette (pas fait de manière intelligente mais plus facile comme ca pour plus tard)
    const toque1 = document.getElementsByClassName(1).item(0);
    const toque2 = document.getElementsByClassName(2).item(0);
    const toque3 = document.getElementsByClassName(3).item(0);
    const toque4 = document.getElementsByClassName(4).item(0);
    const toque5 = document.getElementsByClassName(5).item(0);

    //ingredients 
    const listeNomIngredients = [];
    listeNomIngredients.length = i;

    const listeQtiteIngredients = [];
    listeQtiteIngredients.length = i;

    const listeGrandeurIngredients = [];
    listeGrandeurIngredients.length = i;

    const listeNomIngredients2 = [];
    listeNomIngredients.length = i;

    const listeQtiteIngredients2 = [];
    listeQtiteIngredients.length = i;

    const listeGrandeurIngredients2 = [];
    listeGrandeurIngredients.length = i;

    do{
        listeNomIngredients[i] = document.getElementsByClassName(10+i).item(0);
        listeQtiteIngredients[i] = document.getElementsByClassName(10+i).item(1);
        listeGrandeurIngredients[i] = document.getElementsByClassName(10+i).item(2);
        i-- ;
    }while(i>0)

    console.log(listeGrandeurIngredients, listeNomIngredients, listeQtiteIngredients);

    //zones de texte 
    const prepRecette = document.getElementById("box1");
    const CuiRecette = document.getElementById("box2");
    const prepCuiRecette = document.getElementById("invisible");

    //gere la page vers laquelle on se dirige
    if(quelleRecette=='Petit déjeuner' && typeRecette=='sucré'){}
    if(quelleRecette=='Petit déjeuner' && typeRecette=='salé'){}
    if(quelleRecette=='Petit déjeuner' && typeRecette=='sucré-salé'){}

    if(quelleRecette=='Déjeuner' && typeRecette=='sucré'){}
    if(quelleRecette=='Déjeuner' && typeRecette=='salé'){}
    if(quelleRecette=='Déjeuner' && typeRecette=='sucré-salé'){}

    if(quelleRecette=='Goûter' && typeRecette=='sucré'){}
    if(quelleRecette=='Goûter' && typeRecette=='salé'){}
    if(quelleRecette=='Goûter' && typeRecette=='sucré-salé'){}

    if(quelleRecette=='Diner' && typeRecette=='sucré'){}
    if(quelleRecette=='Diner' && typeRecette=='salé'){
        const destination = dinerSel.getElementById('dinerSalé');
        destination.appendChild(nomRecette);
    }
    if(quelleRecette=='Diner' && typeRecette=='sucré-salé'){}
    
}