// Challenge 1: Your Age in Days
function ageToDays() {
    var birthYear = prompt('What year were you born?');
    let yearsOld = new Date().getFullYear() - birthYear;
    let daysOld = yearsOld * 365;
    let textAnswer = document.createTextNode('You are ' + yearsOld + ' years old,\nwhich is ~' + daysOld + ' days old!');

    if(document.getElementById('ageToDays')){
       reset(); 
    }
    var h1 = document.createElement('h1');
    h1.setAttribute('id', 'ageToDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset() {
    if(document.getElementById('ageToDays'))
        document.getElementById('ageToDays').remove();

    // Test Zone 
    
}

// Challenge 1.1: Pythagorean Theorem
function pythagorean() {
    let a = document.getElementById("aValue").value;
    let b = document.getElementById("bValue").value;
    let c =  document.getElementById("cValue").value;

    deleteWarning();
    if(!a){
        a = Math.sqrt(Math.pow(c,2)-Math.pow(b,2));
        document.getElementById("aValue").value = a.toFixed(4);
    }
    if(!b){
        b = Math.sqrt(Math.pow(c,2)-Math.pow(a,2));
        document.getElementById("bValue").value = b.toFixed(4);
    }
    if(!c){
        c = Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
        document.getElementById("cValue").value = c.toFixed(4);
    }
    if(Number.isNaN(a) || Number.isNaN(b)){
        createWarning();
    }

}

function createWarning() {
    let warningMssg = document.createTextNode('Invalid input');

    let h5 = document.createElement('h5');
    h5.setAttribute('id', 'invalid-warning');
    h5.appendChild(warningMssg);
    document.getElementById('input-container').appendChild(h5);
}

function deleteWarning() {
    if(document.getElementById('invalid-warning'))
        document.getElementById('invalid-warning').remove();
}

function clearNums() {
    document.getElementById("aValue").value = '';
    document.getElementById("bValue").value = '';
    document.getElementById("cValue").value = '';
    if(document.getElementById('invalid-warning'))
        document.getElementById('invalid-warning').remove();
}

// Challenge 1.2: Number Counter
function countNums() {
    let stringOfNums = document.getElementById('stringOfNums').value;
    let searchNum = document.getElementById('searchNum').value;
    var counter = 0;

    for(let i = 0; i < stringOfNums.length; i++){
        if(stringOfNums[i] == searchNum){
            counter++;
            console.log(stringOfNums[i]);
        }
    }
    console.log(counter);
    if(document.getElementById('numcounted')){
       reset2(); 
    }
    var h1 = document.createElement('h1');
    h1.setAttribute('id', 'numcounted');
    h1.appendChild(document.createTextNode('The number ' + searchNum + ' appeared in your ' + stringOfNums.length + ' char long string ' + counter + ' times :0'));
    document.getElementById('flex-box-result-2').appendChild(h1);
}

function clearNumInput() {
    document.getElementById('stringOfNums').value = '';
    document.getElementById('searchNum').value = '';
    reset2();
}

function reset2() {
    if(document.getElementById('numcounted'))
        document.getElementById('numcounted').remove();
}

// Challenge 2: Cat Generator
function generateCat() {
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-box');
    image.src='static/images/po-cat.gif';
    div.appendChild(image);
}

function clearCats() {
    var div = document.getElementById('flex-cat-box');
    div.innerHTML = "";
}

// Challenge 2.1 : Multiplication Table
function createMultTable() {
    let selectedNum = document.getElementById("multTableSelection").value;
    
    if(selectedNum != ''){
        clearMultTable();
        printTable(selectedNum);
    }
}

function printTable(selectedNum) {
    for(var i = 0; i < 13; i++){
        var row = selectedNum + " * " + i + " = " + selectedNum * i;
        let multTableRow = document.createTextNode(row);

        var newDiv = document.createElement('div');
        newDiv.setAttribute('id', 'multTableRow');
        newDiv.appendChild(multTableRow);
        document.getElementById('flex-box-result-2-2').appendChild(newDiv);
    }
}

function clearMultTable() {
    document.getElementById('flex-box-result-2-2').innerHTML = '';
}

// Challenge 3: Basic Type Advantage
function typeAdvantageGame(yourChoice) {
    var playerChoice = yourChoice.id;
    var cpuChoice = randomTypeChoice(randomTypeInt());

    results = decideWinner(playerChoice, cpuChoice);
    finalmessage = typeAdvantageMessage(results);

    typeAdvantageFrontend(playerChoice, cpuChoice, finalmessage);
}

function decideWinner(playerChoice, cpuChoice) {
    var typeAdvantageDatabase = {
        'grass': {'grass': 0.5, 'water': 1, 'fire': 0},
        'water': {'grass': 0, 'water': 0.5, 'fire': 1},
        'fire': {'grass': 1, 'water': 0, 'fire': 0.5}
    }

    var playerScore = typeAdvantageDatabase[playerChoice][cpuChoice];
    var cpuScore = typeAdvantageDatabase[cpuChoice][playerChoice];

    return [playerScore, cpuScore];
}

function typeAdvantageMessage([playerScore, cpuScore]) {
    if(playerScore === 0) {
        return {'message': 'You lost! :(', 'color': 'red'}
    } else if (playerScore === 0.5){
        return {'message': 'You tied! :)', 'color': 'blue'}
    } else {
        return {'message': 'You won! :D', 'color': 'green'}
    }
}

function typeAdvantageFrontend(playerChoice, cpuChoice, finalmessage) {
    var imagesDatabase = {
        'grass': document.getElementById('grass').src,
        'water': document.getElementById('water').src,
        'fire': document.getElementById('fire').src
    }

    // Clear the container for new UI
    var typeContainer = document.getElementById('typeAdvantage-container');
    typeContainer.innerHTML = '';

    // Create new divs
    var playerDiv = document.createElement('div');
    var cpuDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    // Fill new divs
    playerDiv.innerHTML = "<img src='" + imagesDatabase[playerChoice] + "'>";
    cpuDiv.innerHTML = "<img src='" + imagesDatabase[cpuChoice] + "'>";
    messageDiv.innerHTML = "<h4 onclick='location.reload()' style='cursor:pointer; color: " + finalmessage['color'] + "; '>" + finalmessage['message'] + "</h4>";

    // Fill container with results UI
    document.getElementById('typeAdvantage-container').appendChild(playerDiv);
    document.getElementById('typeAdvantage-container').appendChild(messageDiv);
    document.getElementById('typeAdvantage-container').appendChild(cpuDiv);

}

function randomTypeInt() {
    return Math.floor(Math.random() * 3); 
}

function randomTypeChoice(number) {
    return ['grass', 'water', 'fire'][number];
}

