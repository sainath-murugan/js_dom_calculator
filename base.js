var text = '';
function one(){
    var one = document.getElementById('1').innerHTML
    text += one
    document.getElementById('display').value = text
}
function two(){
    var two = document.getElementById('2').innerHTML
    text += two
    document.getElementById('display').value = text
}
function three(){
    var three = document.getElementById('3').innerHTML
    text += three
    document.getElementById('display').value = text
}
function four(){
    var four = document.getElementById('4').innerHTML
    text += four
    document.getElementById('display').value = text
}
function five(){
    var five = document.getElementById('5').innerHTML
    text += five
    document.getElementById('display').value = text
}
function six(){
    var six = document.getElementById('6').innerHTML
    text += six
    document.getElementById('display').value = text
}
function seven(){
    var seven = document.getElementById('7').innerHTML
    text += seven
    document.getElementById('display').value = text
}
function eight(){
    var eight = document.getElementById('8').innerHTML
    text += eight
    document.getElementById('display').value = text
}
function nine(){
    var nine = document.getElementById('9').innerHTML
    text += nine
    document.getElementById('display').value = text
}
function zero(){
    var zero = document.getElementById('0').innerHTML
    text += zero
    document.getElementById('display').value = text
}
function clearIt(){
    
     text = ''
     document.getElementById('display').value = text
}
var add_text = '';
function add(){
     document.getElementById('display').value = text
     add_text = text;
     text = ''
     document.getElementById('display').value = text
}

var sub_text = '';
function sub(){
     document.getElementById('display').value = text
     sub_text = text;
     text = ''
     document.getElementById('display').value = text
}

var mul_text = '';
function mul(){
     document.getElementById('display').value = text
     mul_text = text;
     text = ''
     document.getElementById('display').value = text
}

var div_text = '';
function div(){
     document.getElementById('display').value = text
     div_text = text;
     text = ''
     document.getElementById('display').value = text
}

function equalTo(){
    if(add_text != ''){
        var addition = Number(add_text) + Number(text)
        document.getElementById('display').value = addition
        
    }
    if(sub_text != ''){
        var subtraction = Number(sub_text) - Number(text)
        document.getElementById('display').value = subtraction
    }
    if(mul_text != ''){
        var multiplication = Number(mul_text) * Number(text)
        document.getElementById('display').value = multiplication
    }
    if(div_text != ''){
        var division = Number(div_text) / Number(text)
        document.getElementById('display').value = division
    }
   
}

// tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})