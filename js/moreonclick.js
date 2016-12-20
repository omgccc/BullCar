var more=document.getElementById('listmore'),
listNavBrand=document.querySelector('.list_nav_brand')
listNav=document.getElementById('listnavbrand'),
allBrand=document.querySelector('.brand-all');
 more.onmouseover=function(){
	listNavBrand.classList.add('list_nav_brand_active')
	allBrand.style.width='0px'
	allBrand.style.display='block'
	more = setTimeout(function(){
		allBrand.style.width='710px'
	},500)
}

allBrand.onmouseover=function(){
	listNavBrand.classList.add('list_nav_brand_active')
	allBrand.style.display='block'
	allBrand.style.width='710px'
}
listNav.onmouseleave=function(){
	listNavBrand.classList.remove('list_nav_brand_active')
	allBrand.style.display='none'
}
allBrand.onmouseleave=function(){
	listNavBrand.classList.remove('list_nav_brand_active')
	allBrand.style.display='none'
}
