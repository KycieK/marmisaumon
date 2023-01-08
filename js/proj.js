var i = 0;
var r = 0;
var z = 0;

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

    const newItem = document.createElement('div');
    newItem.className = "recetteAjoutee";
    newItem.id = 100 + z + 10;
    newItem.setAttribute('style','display:none')

    const contenu = document.createElement('div');
    contenu.className = "contenu";

    var variable1 = document.createElement('label');
    variable1.id = 100 + z;
    variable1.className = "TitreRecette";

    var variable2 = document.createElement('label');
    variable2.id = 100 + z + 1;
    variable2.className = "Difficultee";

    var variable3 = document.createElement('label');
    variable3.id = 100 + z + 2;

    var variable4 = document.createElement('label');
    variable4.id = 100 + z + 3;

    var variable5 = document.createElement('label');
    variable5.id = 100 + z + 4;

    var variable6 = document.createElement('label');
    variable6.id = 100 + z + 5;

    var variable7 = document.createElement('label');
    variable7.id = 100 + z + 6;

    contenu.append(variable3, variable4, variable5, variable6, variable7);
    newItem.append(variable1, variable2, contenu);
    document.getElementsByClassName("listeRecettes").item(0).appendChild(newItem);
}

//suppression du form
function cancel() {
    let x = document.getElementById("invisibleMain");
    let y = document.getElementById("disparait");
    y.setAttribute('style','display:block');
    x.setAttribute('style','display:none')

    var formAReset = document.getElementsByClassName("box").item(0);
    formAReset.reset();

    let m1 = document.getElementsByClassName(1).item(0);
    m1.setAttribute('src', 'toque2.png');
    let m2 = document.getElementsByClassName(2).item(0);
    m2.setAttribute('src', 'toque2.png');
    let m3 = document.getElementsByClassName(3).item(0);
    m3.setAttribute('src', 'toque2.png');
    let m4 = document.getElementsByClassName(4).item(0);
    m4.setAttribute('src', 'toque2.png');
    let m5 = document.getElementsByClassName(5).item(0);
    m5.setAttribute('src', 'toque2.png');

    let d = document.getElementById("invisible");
    d.setAttribute('style','display:none')

    while (i > 0) {
        var a = document.getElementById(i);
        a.remove();
        var b = document.getElementById(i);
        b.remove();
        var c = document.getElementById(i);
        c.remove();
        i--;
    }

    document.getElementsByClassName("listeRecettes").item(0).removeChild(document.getElementById(100 + z + 10));
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
    let x = document.getElementById("invisibleMain");
    let y = document.getElementById("disparait");
    y.setAttribute('style','display:block');
    x.setAttribute('style','display:none');

    //nom
    const nomRecette = document.getElementById("recette").value;

    //durée recette
    const tempsTotalH = document.getElementById("temps1.1").value;
    const tempsTotalMin = document.getElementById("temps1.2").value;
    
    const tempsPrepH = document.getElementById("temps2.1").value;
    const tempsPrepMin = document.getElementById("temps2.2").value;

    const tempsCuiH = document.getElementById("temps3.1").value;
    const tempsCuiMin = document.getElementById("temps3.2").value;

    //difficulté recette (pas fait de manière intelligente mais plus facile comme ca pour plus tard)
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

    const newRecetteImg = document.getElementById(100 + z + 1);

    document.getElementById(100 + z + 10).setAttribute('style','display:block');

    document.getElementById(100 + z).innerHTML = nomRecette;
    document.getElementById(100 + z + 1).innerHTML = "<br>Difficulté de la recette : ";
    newRecetteImg.append(toque1, toque2, toque3, toque4, toque5);
    var incrément = '';
    var j = i;
    if(i>0) {
        do{
            incrément = listeNomIngredients[i] + " : " + listeQtiteIngredients[i] + " " + listeGrandeurIngredients[i] +"<br>"+ incrément;
            listeNomIngredients.push(listeNomIngredients[i]);
            listeQtiteIngredients.push(listeQtiteIngredients[i]);
            listeGrandeurIngredients.push(listeGrandeurIngredients[i]);
            i--;
        }while(i>0)
    }
    document.getElementById(100 + z + 2).innerHTML = "<br><br>" + "Le temps total que vous devez prévoir est de  " + tempsTotalH  +" h "+ tempsTotalMin + ' min</br>' + "Le temps de préparation est de " + tempsPrepH + " h " + tempsPrepMin + " min<br>" + "Le temps de cuisson est de " + tempsCuiH + " h " + tempsCuiMin + " min<br>";

    document.getElementById(100 + z + 3).innerHTML ="<br><br>Les ingrédients nécessaires sont :<br>"+ incrément;

    if(prepRecette != ''){    
        document.getElementById(100 + z + 4).innerHTML ="<br>Instructions de préparation : <br>" + prepRecette + "<br><br>";
    }
    if(CuiRecette != ''){        
        document.getElementById(100 + z + 5).innerHTML ="Instructions de cuisson : <br>" + CuiRecette + "<br><br>";
    }
    if(prepCuiRecette != ''){        
        document.getElementById(100 + z + 6).innerHTML ="Préparation à réaliser pendant la cuisson : <br>" + prepCuiRecette + "<br><br>";
    }

    z = z + 100;

    //reset du form
    var formAReset = document.getElementsByClassName("box").item(0);
    formAReset.reset();

    let m1 = document.getElementsByClassName(1).item(0);
    m1.setAttribute('src', 'toque2.png');
    let m2 = document.getElementsByClassName(2).item(0);
    m2.setAttribute('src', 'toque2.png');
    let m3 = document.getElementsByClassName(3).item(0);
    m3.setAttribute('src', 'toque2.png');
    let m4 = document.getElementsByClassName(4).item(0);
    m4.setAttribute('src', 'toque2.png');
    let m5 = document.getElementsByClassName(5).item(0);
    m5.setAttribute('src', 'toque2.png');

    let d = document.getElementById("invisible");
    d.setAttribute('style','display:none')

    while (j > 0) {
        var a = document.getElementById(j);
        a.remove();
        var b = document.getElementById(j);
        b.remove();
        var c = document.getElementById(j);
        c.remove();
        j--;
    }
}

function ajouter() {
    var newTaskForm = document.forms.newTask;
    console.log(newTaskForm.elements.tache.value + "\n" + newTaskForm.elements.date.value + "\n" + newTaskForm.elements.categorie.value);
    
    const newItem = document.createElement('tr');
    const taskTd = document.createElement('td');
    const dateTd = document.createElement('td');
    const categorieTd = document.createElement('td');
    taskTd.textContent = newTaskForm.elements.tache.value;
    dateTd.textContent = newTaskForm.elements.date.value;
    categorieTd.textContent = newTaskForm.elements.categorie.value;

    if(tache.checkValidity() & date.checkValidity()) {
        newItem.append(taskTd,dateTd,categorieTd);

        const table = document.querySelector('.datatable tbody');
        table.appendChild(newItem);
    
        console.log(table);
    }
}