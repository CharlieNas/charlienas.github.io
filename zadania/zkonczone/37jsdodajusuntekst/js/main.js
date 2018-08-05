function clicks(){
    document.getElementById('dodaj').addEventListener('click', function(){
        document.getElementById('tekst').innerHTML += "Akademia 108"
    })
    document.getElementById('usun').addEventListener('click', function(){
        document.getElementById('tekst').innerHTML = "";
    })
}

clicks();