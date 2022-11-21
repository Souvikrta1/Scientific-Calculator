const screen = document.querySelector('#screen');
const btn = document.querySelectorAll('.btn');
const equalBtn = document.getElementById('equal-btn');

for(item of btn){
    item.addEventListener('click',(event)=>{
        btnText = event.target.innerText;
        if(btnText == '×'){btnText = '*'};
        if(btnText == '÷'){btnText = '/'};
        screen.value += btnText;
    });
}

equalBtn.addEventListener('click',()=>{
    screen.value=eval(screen.value);
})

function sin()
{
    screen.value=Math.sin(screen.value);
}

function cos()
{
    screen.value=Math.cos(screen.value);
}

function tan()
{
    screen.value=Math.tan(screen.value);
}

function pow()
{
    screen.value=Math.pow(screen.value,2);
}

function sqrt()
{
    screen.value=Math.sqrt(screen.value,2);
}

function log()
{
    screen.value=Math.log(screen.value);
}

function pi()
{
    screen.value= 3.14159265359;
}

function cube()
{
    screen.value=Math.pow(screen.value,3);
}

function fact() {
    let f=1;
    for(let i=screen.value;i<=1;i--){
        f=f*i;
    }
    screen.value = f;
}

function backspc()
{
    screen.value=screen.value.substr(0,screen.value.length-1);
}

