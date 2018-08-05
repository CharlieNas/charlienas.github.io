document.getElementById('btn').addEventListener('click', function(){
    
    name = document.getElementById('infoName').value;
    surname = document.getElementById('infoSurname').value;
    number = document.getElementById('infoNumber').value;
    
    document.getElementById('name').innerHTML = name;
    document.getElementById('surname').innerHTML = surname;
    document.getElementById('phone').innerHTML = number;
})