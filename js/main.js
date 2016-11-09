function validateForm(){
	function validateForm(){
	var emailValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
	var soloLetras = /^[A-Za-z\_\-\.\s\xF1\xD1]+$/;

	function name(){
		var nombre = document.getElementById('name').value; //la variable del nombre y .value devuelve el valor del atributo
		if(nombre.length === 0 || nombre === null){ //el largo del nombre es igual a cero, nombre sera null
			var agregar = document.getElementsByClassName('name-container')[0]; // se agrega un container 
			var elementoSpan = document.createElement('span'); // crea un span 
			var nodoTexto = document.createTextNode('Debe ingresar su nombre'); // se crea un nodo texto.
			elementoSpan.appendChild(nodoTexto); //se nombra nodoTexto como hijo de elementoSpan 
			agregar.appendChild(elementoSpan); //elementoSpan es hijo del container 
			return false;
		}else if(!soloLetras.test(nombre)){ //lo ingresado debe ser solo letras 
			var agregar = document.getElementsByClassName('name-container')[0]; 
			var elementoSpan = document.createElement('span'); 
			var nodoTexto = document.createTextNode('Ingrese solo letras en el nombre'); /to
			elementoSpan.appendChild(nodoTexto); 
			agregar.appendChild(elementoSpan); 
			return false;
		}else if(nombre.substring(0,1) !== nombre.substring(0,1).toUpperCase()){ //queremos que la primera letra sea mayuscula .toUpperCasse toma un string y convierte en mayuscula 
			var agregar = document.getElementsByClassName('name-container')[0]; 
			var elementoSpan = document.createElement('span'); 
			var nodoTexto = document.createTextNode('Ingrese inicial de nombre con mayuscula'); 
			elementoSpan.appendChild(nodoTexto); 
			agregar.appendChild(elementoSpan); 
			return false;
		}else{
			return true;
		}
	}
	name();

	


