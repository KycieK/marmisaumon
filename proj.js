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

function RemoveInput()
{
    if(i==0){return alert("aucun ingrédient à supprimer")};
    var input = document.getElementById(i);
    input.remove();
    i = i-1;
}