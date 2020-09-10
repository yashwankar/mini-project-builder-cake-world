var layer = 0;
var chocolate  = document.getElementById('chocolate');
var strawberry  = document.getElementById('strawberry');
var butterscotch  = document.getElementById('butterscotch');
var vannila  = document.getElementById('vannila');
var redvelvet  = document.getElementById('redvelvet');
var candle  = document.getElementById('candle');
var total = 0;

function addChocolate(){
    document.getElementById('chocolateBill').innerHTML = 'Chocolate ----------- 300';
    chocolate.style.visibility = 'visible';
    layer++;
    total += 300;
    if(layer==1){
        chocolate.style.width = '250px';
        chocolate.style.left = '635px';
        chocolate.style.top = '-470px'; 
    }
    if(layer == 2){
        chocolate.style.width = '210px';
        chocolate.style.left = '655px';
        chocolate.style.top = '-520px';
    }
    if(layer == 3){
        chocolate.style.width = '170px';
        chocolate.style.left = '675px';
        chocolate.style.top = '-570px';
    }
    if(layer == 4){
        chocolate.style.width = '130px';
        chocolate.style.left = '695px';
        chocolate.style.top = '-620px';
    }
    if(layer == 5){
        chocolate.style.width = '90px';
        chocolate.style.left = '715px';
        chocolate.style.top = '-670px';
    }
    if(layer>5){
        total -= 300;
        alert("Can't able to add anymore cake layers");
        candle.style.visibility = 'visible';
        document.getElementById('total').innerHTML = 'Total --------------- '+total;

    }
}

function addStrawberry(){
    document.getElementById('strawberryBill').innerHTML = 'Strawberry -------- 100';
    layer++;
    strawberry.style.visibility = 'visible';
    total += 100;
    if(layer==1){
        strawberry.style.width = '250px';
        strawberry.style.left = '635px';
        strawberry.style.top = '-520px';
    }
    if(layer == 2){
        strawberry.style.width = '210px';
        strawberry.style.left = '655px';
        strawberry.style.top = '-570px';
    }
    if(layer == 3){
        strawberry.style.width = '170px';
        strawberry.style.left = '675px';
        strawberry.style.top = '-620px';
    }
    if(layer == 4){
        strawberry.style.width = '130px';
        strawberry.style.left = '695px';
        strawberry.style.top = '-670px';
    }
    if(layer == 5){
        strawberry.style.width = '90px';
        strawberry.style.left = '715px';
        strawberry.style.top = '-720px';
    }
    if(layer>5){
        total -= 100;
        alert("Can't able to add anymore cake layers");
        candle.style.visibility = 'visible';
        document.getElementById('total').innerHTML = 'Total ----------- '+total;
    }
}

function addButterscotch(){
    document.getElementById('butterscotchBill').innerHTML = 'Butterscotch ----- 200';
    butterscotch.style.visibility = 'visible';
    layer++;
    total += 200;
    if(layer==1){
        butterscotch.style.width = '250px';
        butterscotch.style.left = '635px';
        butterscotch.style.top = '-570px';
    }
    if(layer == 2){
        butterscotch.style.width = '210px';
        butterscotch.style.left = '655px';
        butterscotch.style.top = '-620px';
    }
    if(layer == 3){
        butterscotch.style.width = '170px';
        butterscotch.style.left = '675px';
        butterscotch.style.top = '-670px';
    }
    if(layer == 4){
        butterscotch.style.width = '130px';
        butterscotch.style.left = '695px';
        butterscotch.style.top = '-720px';
    }
    if(layer == 5){
        butterscotch.style.width = '90px';
        butterscotch.style.left = '715px';
        butterscotch.style.top = '-770px';
    }
    if(layer>5){
        total -= 200;
        alert("Can't able to add anymore cake layers");
        candle.style.visibility = 'visible';
        document.getElementById('total').innerHTML = 'Total ----------- '+total;
    }
}

function addVannila(){
    document.getElementById('vannilaBill').innerHTML = 'Vannila ---------------- 250';
    vannila.style.visibility = 'visible';
    total += 250;
    layer++;
    if(layer==1){
        vannila.style.width = '250px';
        vannila.style.left = '635px';
        vannila.style.top = '-620px';
    }
    if(layer == 2){
        vannila.style.width = '210px';
        vannila.style.left = '655px';
        vannila.style.top = '-670px';
    }
    if(layer == 3){
        vannila.style.width = '170px';
        vannila.style.left = '675px';
        vannila.style.top = '-720px';
    }
    if(layer == 4){
        vannila.style.width = '130px';
        vannila.style.left = '695px';
        vannila.style.top = '-770px';
    }
    if(layer == 5){
        vannila.style.width = '90px';
        vannila.style.left = '715px';
        vannila.style.top = '-820px';
    }
    if(layer>5){
        total -= 250;
        alert("Can't able to add anymore cake layers");
        candle.style.visibility = 'visible';
        document.getElementById('total').innerHTML = 'Total ----------- '+total;
    }
}

function addRedvelvet(){
    document.getElementById('redvelvetBill').innerHTML = 'Redvelvet ----------- 350';
    redvelvet.style.visibility = 'visible';
    layer++;
    total += 350;
    if(layer==1){
        redvelvet.style.width = '250px';
        redvelvet.style.left = '635px';
        redvelvet.style.top = '-670px';
    }
    if(layer == 2){
        redvelvet.style.width = '210px';
        redvelvet.style.left = '655px';
        redvelvet.style.top = '-720px';
    }
    if(layer == 3){
        redvelvet.style.width = '170px';
        redvelvet.style.left = '675px';
        redvelvet.style.top = '-770px';
    }
    if(layer == 4){
        redvelvet.style.width = '130px';
        redvelvet.style.left = '695px';
        redvelvet.style.top = '-820px';
    }
    if(layer == 5){
        redvelvet.style.width = '90px';
        redvelvet.style.left = '715px';
        redvelvet.style.top = '-870px';
    }
    if(layer>5){
        total -= 350;
        alert("Can't able to add anymore cake layers");
        candle.style.visibility = 'visible';
        document.getElementById('total').innerHTML = 'Total ----------- '+total;
    }
}

function buy(){
    if(layer>=5)
        candle.style.visibility = 'visible';
    document.getElementById('total').innerHTML = 'Total ----------- '+total;
}