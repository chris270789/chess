var divSquare = '<div id="s$coordinat" class="square $color"></div>';
$(function () {
addSquares();
});
function addSquares() {
console.log('addSquares');
$('.board').html('');
for(var coord = 0; coord<64; coord++)
$('.board').append(divSquare
	.replace('$coordinat',coord)
	.replace('$color',isBlackSquareAt(coord) ? 'black' : 'white'));

// $('.board').append(divSquare.replace('$color','black'));
}
function isBlackSquareAt(coord){
	return (coord % 8 + Math.floor(coord/8)) % 2;
	
}