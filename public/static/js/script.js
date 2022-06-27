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

// Challenge 2.1 
