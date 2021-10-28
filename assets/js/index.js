var a=1;
var win=0;
var player1="";
var player2="";
function start()
{
    player1=document.getElementById('p1').value;
    player2=document.getElementById('p2').value;
    if(player1=="" || player2=="")
    {
        alert("Name of Player Missing");
    }
    else
    {
        document.getElementById('lg_area').style.display="none";
        document.getElementById('table').style.display="block";
    }
}
function value_a1()
{
    var z=document.getElementById('a1').innerHTML;
    if(z=='X' || z=='O')
    {
        return;
    }
    else if(win==1)
    {
        return;
    }
    i=count();
    if (i%2==0)
    {
        document.getElementById('a1').innerHTML='X';
    }
    else
    document.getElementById('a1').innerHTML='O';

    check_win();
}
function value_a2()
{
    var z=document.getElementById('a2').innerHTML;
    if(z=='X' || z=='O')
    {
        return;
    }
    else if(win==1)
    {
        return;
    }
    i=count();
    if (i%2==0)
    {
        document.getElementById('a2').innerHTML='X';
    }
    else
    document.getElementById('a2').innerHTML='O';
    
    check_win();
}
function value_a3()
{
    var z=document.getElementById('a3').innerHTML;
    if(z=='X' || z=='O')
    {
        return;
    }
    else if(win==1)
    {
        return;
    }
    i=count();
    if (i%2==0)
    {
        document.getElementById('a3').innerHTML='X';
    }
    else
    document.getElementById('a3').innerHTML='O';
    
    check_win();
}
function value_b1()
{
    var z=document.getElementById('b1').innerHTML;
    if(z=='X' || z=='O')
    {
        return;
    }
    else if(win==1)
    {
        return;
    }
    i=count();
    if (i%2==0)
    {
        document.getElementById('b1').innerHTML='X';
    }
    else
    document.getElementById('b1').innerHTML='O';
    
    check_win();
}
function value_b2()
{
    var z=document.getElementById('b2').innerHTML;
    if(z=='X' || z=='O')
    {
        return;
    }
    else if(win==1)
    {
        return;
    }
    i=count();
    if (i%2==0)
    {
        document.getElementById('b2').innerHTML='X';
    }
    else
    document.getElementById('b2').innerHTML='O';
    
    check_win();
}
function value_b3()
{
    var z=document.getElementById('b3').innerHTML;
    if(z=='X' || z=='O')
    {
        return;
    }
    else if(win==1)
    {
        return;
    }
    i=count();
    if (i%2==0)
    {
        document.getElementById('b3').innerHTML='X';
    }
    else
    document.getElementById('b3').innerHTML='O';
    
    check_win();
}
function value_c1()
{
    var z=document.getElementById('c1').innerHTML;
    if(z=='X' || z=='O')
    {
        return;
    }
    else if(win==1)
    {
        return;
    }
    i=count();
    if (i%2==0)
    {
        document.getElementById('c1').innerHTML='X';
    }
    else
    document.getElementById('c1').innerHTML='O';
    
    check_win();
}
function value_c2()
{
    var z=document.getElementById('c2').innerHTML;
    if(z=='X' || z=='O')
    {
        return;
    }
    else if(win==1)
    {
        return;
    }
    i=count();
    if (i%2==0)
    {
        document.getElementById('c2').innerHTML='X';
    }
    else
    document.getElementById('c2').innerHTML='O';
    
    check_win();
}
function value_c3()
{
    var z=document.getElementById('c3').innerHTML;
    if(z=='X' || z=='O')
    {
        return;
    }
    else if(win==1)
    {
        return;
    }
    i=count();
    if (i%2==0)
    {
        document.getElementById('c3').innerHTML='X';
    }
    else
    document.getElementById('c3').innerHTML='O';
    
    check_win();
}
function count()
{
    a=a+1;
    return a;
}
function check_win()
{
    var a1=document.getElementById('a1').innerHTML;
    var a2=document.getElementById('a2').innerHTML;
    var a3=document.getElementById('a3').innerHTML;
    var b1=document.getElementById('b1').innerHTML;
    var b2=document.getElementById('b2').innerHTML;
    var b3=document.getElementById('b3').innerHTML;
    var c1=document.getElementById('c1').innerHTML;
    var c2=document.getElementById('c2').innerHTML;
    var c3=document.getElementById('c3').innerHTML;

    if(a1==a2 && a2==a3 && (a1=='X' || a1=='O'))
    {
        win=1;
        document.getElementById('a1').style.backgroundColor="green";
        document.getElementById('a2').style.backgroundColor="green";
        document.getElementById('a3').style.backgroundColor="green";
        homecall();
    }
    else if(b1==b2 && b2==b3 && (b1=='X' || b1=='O'))
    {
        win=1;
        document.getElementById('b1').style.backgroundColor="green";
        document.getElementById('b2').style.backgroundColor="green";
        document.getElementById('b3').style.backgroundColor="green";
        homecall();
    }
    else if(c1==c2 && c2==c3 && (c1=='X' || c1=='O'))
    {
        win=1;
        document.getElementById('c1').style.backgroundColor="green";
        document.getElementById('c2').style.backgroundColor="green";
        document.getElementById('c3').style.backgroundColor="green";
        homecall();
    }
    else if(a1==b1 && b1==c1 && (a1=='X' || a1=='O'))
    {
        win=1;
        document.getElementById('a1').style.backgroundColor="green";
        document.getElementById('b1').style.backgroundColor="green";
        document.getElementById('c1').style.backgroundColor="green";
        homecall();
    }
    else if(a2==b2 && b2==c2 && (a2=='X' || a2=='O'))
    {
        win=1;
        document.getElementById('a2').style.backgroundColor="green";
        document.getElementById('b2').style.backgroundColor="green";
        document.getElementById('c2').style.backgroundColor="green";
        homecall();
    }
    else if(a3==b3 && b3==c3 && (a3=='X' || a3=='O'))
    {
        win=1;
        document.getElementById('a3').style.backgroundColor="green";
        document.getElementById('b3').style.backgroundColor="green";
        document.getElementById('c3').style.backgroundColor="green";
        homecall();
    }
    else if(a1==b2 && b2==c3 && (a1=='X' || a1=='O'))
    {
        win=1;
        document.getElementById('a1').style.backgroundColor="green";
        document.getElementById('b2').style.backgroundColor="green";
        document.getElementById('c3').style.backgroundColor="green";
        homecall();
    }
    else if(a3==b2 && b2==c1 && (c1=='X' || c1=='O'))
    {
        win=1;
        document.getElementById('a3').style.backgroundColor="green";
        document.getElementById('b2').style.backgroundColor="green";
        document.getElementById('c1').style.backgroundColor="green";
        homecall();
    }
}
function homecall()
{
    setTimeout(function(){
        document.getElementById('table').style.display="none";
        document.getElementById('statistic').style.display="block";
        if(a%2==0)
        {
            document.getElementById('winner').innerHTML=player1;
            console.log(player1);
        }
        else
        {
            document.getElementById('winner').innerHTML=player2;
        }
    }, 1000);
}
function back()
{
    document.getElementById('statistic').style.display="none";
    document.getElementById('lg_area').style.display="block";
    
    document.getElementById('a1').innerHTML="";
    document.getElementById('b1').innerHTML="";
    document.getElementById('c1').innerHTML="";

    document.getElementById('a2').innerHTML="";
    document.getElementById('b2').innerHTML="";
    document.getElementById('c2').innerHTML="";

    document.getElementById('a3').innerHTML="";
    document.getElementById('b3').innerHTML="";
    document.getElementById('c3').innerHTML="";

    document.getElementById('a1').style.backgroundColor="coral";
    document.getElementById('b1').style.backgroundColor="coral";
    document.getElementById('c1').style.backgroundColor="coral";

    document.getElementById('a2').style.backgroundColor="coral";
    document.getElementById('b2').style.backgroundColor="coral";
    document.getElementById('c2').style.backgroundColor="coral";

    document.getElementById('a3').style.backgroundColor="coral";
    document.getElementById('b3').style.backgroundColor="coral";
    document.getElementById('c3').style.backgroundColor="coral";

    win=0;
    a=1;
}