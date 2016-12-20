var city=document.createElement('div'),
h2=document.createElement('h2'),
cityitem=document.createElement('div'),

archor=data.forEach(function(item){
	return cityitem.appendChild(createArchor(item)); 
})
function createArchor(option){
		var a = document.createElement("a");
		a.href = option.href;
		a.title = option.title;
		a.innerText=option.text;
		return a;
	}


fragment = document.createDocumentFragment();
wrapper=document.getElementById('wrapper');

city.className='city-item'
h2.className='tit'
cityitem.className='city-cont'

city.appendChild(h2);
for (var i=0;i<archor.length;i++) {
	cityitem.appendChild(archor)
}
city.appendChild(cityitem)
fragment.appendChild(city)
console.log(fragment)
var data=[{
	href:'/beijing/list',
	title:'北京',
	text:'北京'
},
{
	href:'/beijing/list',
	title:'北京',
	text:'北京'
},
{
	href:'/beijing/list',
	title:'北京',
	text:'北京'
},
{
	href:'/beijing/list',
	title:'北京',
	text:'北京'
}]
