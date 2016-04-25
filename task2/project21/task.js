var preBtn = document.getElementsByTagName('button')[0],
	inBtn = document.getElementById('in-ord'),
	postBtn = document.getElementById('pos-ord'),
	treeRoot = document.getElementById('header'),
	timer = null,
	divList = [];

function changeCol(node){
		var i = 0;
		divList[i].style.backgroundColor = 'green';
		timer = setInterval(function(){
			i++;
			if(i < divList.length){
				divList[i-1].style.backgroundColor = '#fff';
				divList[i].style.backgroundColor = 'green';
			} else {
				clearInterval(timer);
				divList[divList.length - 1].style.backgroundColor = '#fff';
			}		
		},500)
}
function preOrder(node){
	if(node != null){
		divList.push(node);
		preOrder(node.firstElementChild);
		preOrder(node.lastElementChild);
	}
}

function inOrder(node){
	if(node != null){
		inOrder(node.firstElementChild);
		divList.push(node);
		inOrder(node.lastElementChild);
	}
}

function postOrder(node){
	if(node != null){
		postOrder(node.firstElementChild);
		postOrder(node.lastElementChild);
		divList.push(node);
	}
}

window.onload =function(){
	preBtn.onclick = function(){
		reset();
		preOrder(treeRoot);
		changeCol();
	}
	inBtn.onclick = function(){
		reset();
		inOrder(treeRoot);
		changeCol();
	}
	postBtn.onclick = function(){
		reset();
		postOrder(treeRoot);
		changeCol();
	}
}

function reset(){
	divList = [];
	clearInterval(timer);
	var divs = document.getElementsByTagName('div');
	for(var i = 0;i < divs.length;i++) {
		divs[i].style.backgroundColor = '#fff';
	}
}
