
var but;
but=document.getElementById('dropdown');
var sub=document.getElementById('sabmenu');
console.log(but);
but.onclick=function()
{
	
	if (sub.className=="sab-menu enable")
	{
		sub.className="sab-menu disable";
	}
	else
	{
		sub.className="sab-menu enable";
	}
}