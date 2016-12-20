var area = document.getElementById('area'),
	hidden = document.getElementById('hiddenbox')
area.onmouseover = function() {
	clearTimeout(area);
	hidden.className = 'fixedBox-open';
}
area.onmouseout = function() {
	area = setTimeout(function() {
		hidden.className = 'hidden'
	}, 1000)
}
var topTo=document.getElementById('top')


onscroll = function(){
scrollY>0?topTo.style.display= 'block':setTimeout(function(){
		topTo.style.display='none'
	},1000)
};