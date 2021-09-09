a=1;
function f1()
{
if(a==1)
{
document.getElementById("t1").src="pic/2.jpg";
a=2;
}
else
if(a==2)
{
document.getElementById("t1").src="pic/3.jpg";
a=3;
}
else
if(a==3)
{
document.getElementById("t1").src="pic/4.jpg";
a=1;
}

setTimeout("f1()",3000);

}