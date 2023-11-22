


var altura=0;
var largura=0;
function ajustarTamanhoPalco(){
	 altura= window.innerHeight;
	 largura= window.innerWidth;
	//console.log(altura+' '+largura);

	

}
ajustarTamanhoPalco();
 
var posicaoX =Math.floor( Math.random() * largura);
var posicaoY = Math.floor(Math.random() *altura );

console.log(posicaoX,posicaoY);





//criando o elemento html
var mosquito=  document.createElement('img');
mosquito.src= 'imagens/mosquito.png';
mosquito.className=tamanhoAleatorio();
mosquito.style.left=posicaoX+'px';
mosquito.style.top=posicaoY+'px';
mosquito.style.position='absolute';
document.body.appendChild(mosquito)


function tamanhoAleatorio(){
	var classe= Math.floor( Math.random()*3);

	switch(classe){

      case 0:
        return 'mosquito1'; 
        
       case 1:
        return 'mosquito2'; 


      case 2:
        return 'mosquito3';       

	} 
}