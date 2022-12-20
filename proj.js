var i = 0;
function AddInput()
{
    i = i + 1;
    var html = "<br/>";
    var input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.placeholder = "nom ingrédient";
    input.id = i;
    input.size = input.placeholder.length;
    document.body.appendChild(input);
    
}

function RemoveInput()
{
    var input = document.getElementById(i);
    input.remove();
    i = i-1;
}