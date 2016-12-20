//var more=document.getElementById('listmore'),
//listNavBrand=document.querySelector('.list_nav_brand'),
//allBrand=document.querySelector('.brand-all')
//more.onmouseover=function(){
//	listNavBrand.classList.add('list_nav_brand_active')
//	allBrand.style.display='block'
//}
//more.onmouseout=function(){
//	listNavBrand.classList.remove('list_nav_brand_active')
//	allBrand.style.display='none'
//}
//var area = document.getElementById('area'),
//	hidden = document.getElementById('hiddenbox')
//area.onmouseover = function() {
//	clearTimeout(area);
//	hidden.className = 'fixedBox-open';
//}
//area.onmouseout = function() {
//	area = setTimeout(function() {
//		hidden.className = 'hidden'
//	}, 1000)
//}
var brand_option = document.querySelectorAll('.sc-option'),
	scoption = document.querySelectorAll('.sc-option-list')
 sctext = document.querySelectorAll(".sc-option .sc-option-content");
	brandOption=document.getElementById('list')
	scoptionli=document.getElementById('brand_option').getElementsByTagName('li');
	console.log(scoption)
	console.log(sctext)
//	console.log(scoptionli)
function mm() {

	for(var i = 0; i < scoption.length; i++) {
		if(scoption[i].style.display == 'block') {
			scoption[i].style.display = 'none'
		}
		scoption[m].style.display = 'block';
for (var o=0;o<scoption.length;o++) {
	
		for (var g=0;g<scoptionli.length;g++) {
			 scoptionli[g].index=g
			scoptionli[g].onclick=function(){
			k=this.index
			console.log(k)
			sctext[m].innerText=this.innerText	
			
	}	
	scoption[o].style.display='none'
}
}
//scoption[m].onclick=function(){
//	brand_option[this.index].innerText=scoption[m].innerText
//}
	}
}	
var aa = 0;
for(var i = 0; i < brand_option.length; i++) {
	brand_option[i].index = i
	brand_option[i].onclick = function() {
		aa++;
		m = this.index
		mm()
//		
//		if(!this.onclick){
//			scoption[m].style.display = 'none';
//		}
//		else{
//			scoption[m].style.display = 'block';
//		}
		if(aa%2==0){
			scoption[m].style.display = 'none';
		}else{
			scoption[m].style.display = 'block';
		}
		
	}
}
document.getElementById("top").onclick = function(){
	scrollTo(0, 0);
};
function createBox(option){
	var odiv=document.createElement('div'), //外部div
     aimg=document.createElement('a'),
     img=document.createElement('img'),
     carlink=document.createElement('a'),
     price=document.createElement('div'),
     pricespan=document.createElement('span'),
     carinfo=document.createElement('div')
     carinfoitem=document.createElement('span')
     nationalcarinfo=document.createElement('div')
     shopapprove=document.createElement('span')
     
     odiv.className='carsItem carItem'
     aimg.className='carImg'
     carlink.className='carLink'
     price.className='car-price'
     carinfo.className='car-info'
     carinfoitem.className='info-item'     
     nationalcarinfo.className='national-car-info'
     shopapprove.className=option.classname          
  
  
     odiv.appendChild(aimg)
     aimg.appendChild(img)
     img.src=option.imgurl
     odiv.appendChild(aimg)
     carlink.innerText=option.text
     odiv.appendChild(carlink)
     pricespan.innerText=option.price
     price.appendChild(pricespan)
     odiv.appendChild(price)
     carinfoitem.innerHTML='<span>'+option.info1+'</span>'+'<span>'+option.em+'</span>'+'<span>'+option.info2+'</span>'+'<span>'+option.em+'</span>'+'<span>'+option.info3+'</span>'
     carinfo.appendChild(carinfoitem)
     odiv.appendChild(carinfo)
     nationalcarinfo.appendChild(shopapprove)
     odiv.appendChild(nationalcarinfo)
     return odiv
}

var data=[
{
	imgurl:'./img/car1.jpg',
	href:'#',
	text:'丰田 2011款 凯美瑞 200G 豪华周年纪念版',
	price:'￥27.9万',
	info1:'2011/09 上牌 ',
	em:'|',
	info2:"4.50万公里",
	info3:'浙江',
	classname:'shop-approve list-approve'
},
{
	imgurl:'./img/car1.jpg',
	href:'#',
	text:'丰田 2011款 凯美瑞 200G 豪华周年纪念版',
	price:'￥27.9万',
	info1:'2011/09 上牌 ',
	em:'|',
	info2:"4.50万公里",
	info3:'浙江',
    classname:'shop-approve list-realname-approve'
},
{
	imgurl:'./img/car1.jpg',
	href:'#',
	text:'丰田 2011款 凯美瑞 200G 豪华周年纪念版',
	price:'￥27.9万',
	info1:'2011/09 上牌 ',
	em:'|',
	info2:"4.50万公里",
	info3:'浙江',
    classname:'shop-approve list-realname-approve'
},
{
	imgurl:'./img/car1.jpg',
	href:'#',
	text:'丰田 2011款 凯美瑞 200G 豪华周年纪念版',
	price:'￥27.9万',
	info1:'2011/09 上牌 ',
	em:'|',
	info2:"4.50万公里",
	info3:'浙江',
    classname:'shop-approve list-realname-approve'
},
{
	imgurl:'./img/car1.jpg',
	href:'#',
	text:'丰田 2011款 凯美瑞 200G 豪华周年纪念版',
	price:'￥27.9万',
	info1:'2011/09 上牌 ',
	em:'|',
	info2:"4.50万公里",
	info3:'浙江',
    classname:'shop-approve list-realname-approve'
},
{
	imgurl:'./img/car1.jpg',
	href:'#',
	text:'丰田 2011款 凯美瑞 200G 豪华周年纪念版',
	price:'￥27.9万',
	info1:'2011/09 上牌 ',
	em:'|',
	info2:"4.50万公里",
	info3:'浙江',
    classname:'shop-approve list-realname-approve'
},
{
	imgurl:'./img/car1.jpg',
	href:'#',
	text:'丰田 2011款 凯美瑞 200G 豪华周年纪念版',
	price:'￥27.9万',
	info1:'2011/09 上牌 ',
	em:'|',
	info2:"4.50万公里",
	info3:'浙江',
    classname:'shop-approve list-realname-approve'
},
{
	imgurl:'./img/car1.jpg',
	href:'#',
	text:'丰田 2011款 凯美瑞 200G 豪华周年纪念版',
	price:'￥27.9万',
	info1:'2011/09 上牌 ',
	em:'|',
	info2:"4.50万公里",
	info3:'浙江',
    classname:'shop-approve list-realname-approve'
},
{
	imgurl:'./img/car1.jpg',
	href:'#',
	text:'丰田 2011款 凯美瑞 200G 豪华周年纪念版',
	price:'￥27.9万',
	info1:'2011/09 上牌 ',
	em:'|',
	info2:"4.50万公里",
	info3:'浙江',
    classname:'shop-approve list-realname-approve'
},
{
	imgurl:'./img/car1.jpg',
	href:'#',
	text:'丰田 2011款 凯美瑞 200G 豪华周年纪念版',
	price:'￥27.9万',
	info1:'2011/09 上牌 ',
	em:'|',
	info2:"4.50万公里",
	info3:'浙江',
    classname:'shop-approve list-realname-approve'
},
{
	imgurl:'./img/car1.jpg',
	href:'#',
	text:'丰田 2011款 凯美瑞 200G 豪华周年纪念版',
	price:'￥27.9万',
	info1:'2011/09 上牌 ',
	em:'|',
	info2:"4.50万公里",
	info3:'浙江',
    classname:'shop-approve list-realname-approve'
},
{
	imgurl:'./img/car1.jpg',
	href:'#',
	text:'丰田 2011款 凯美瑞 200G 豪华周年纪念版',
	price:'￥27.9万',
	info1:'2011/09 上牌 ',
	em:'|',
	info2:"4.50万公里",
	info3:'浙江',
    classname:'shop-approve list-realname-approve'
}]

var fragment =document.createDocumentFragment(),
carBox= document.getElementById('card-box');
data.forEach(function(item){
	fragment.appendChild(createBox(item));
})
carBox.appendChild(fragment);

//var more=document.getElementById('listmore'),
//listNavBrand=document.querySelector('.list_nav_brand'),
//allBrand=document.querySelector('.brand-all')
//more.onmouseover=function(){
//	listNavBrand.classList.add('list_nav_brand_active')
//	allBrand.style.display='block'
//}
//more.onmouseout=function(){
//	listNavBrand.classList.remove('list_nav_brand_active')
//	allBrand.style.display='none'
//}
