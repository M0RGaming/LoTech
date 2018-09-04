function hideDen(){
	//document.getElementById('techden').style.visibility = 'hidden'
	//document.getElementById('sda').style.animation = 'hide 5s linear 2s infinite'
	document.getElementById('imgden').setAttribute('onclick', 'showDen()')
	document.getElementById('techden').setAttribute('style', 'animation-name: hide;')
	document.getElementById('imgden').setAttribute('style', 'animation-name: hideimg')
}

function showDen() {
	//document.getElementById('techden').style.visibility = 'visible'
	document.getElementById('imgden').setAttribute('onclick', 'hideDen()')
	document.getElementById('techden').setAttribute('style', 'animation-name: show;')
	document.getElementById('imgden').setAttribute('style', 'animation-name: showimg')
}
