
	function validateForm(){
	var emailValido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
			//para tener el nombre del usuario de validar 
	function name(){
		var nombre = document.getElementById('name').value; 
		if(nombre.length === 0 || nombre === null || !/^[A-Za-z\_\-\.\s\xF1\xD1]+$/.test(nombre)){ // nombre = a cero, o no solo letras
			var agregar = document.getElementsByClassName('name-container')[0]; // se agrega un container 
			var elementoSpan = document.createElement('span'); // crea un span 
			var nodoTexto = document.createTextNode('Debe ingresar su nombre'); // se crea un nodo texto.
			elementoSpan.appendChild(nodoTexto); //se nombra nodoTexto como hijo de elementoSpan 
			agregar.appendChild(elementoSpan); //elementoSpan es hijo del container 
			return false;

		}else if(nombre.charAt(0) !== nombre.charAt(0).toUpperCase()){ //queremos que la primera letra sea mayuscula .toUpperCasse toma un string y convierte en mayuscula 
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
			// tener el apellido y validar 
	function lastname(){
		var apellido = document.getElementById('lastname').value; 
		if(apellido.length === 0 || apellido === null || !/^[A-Za-z\_\-\.\s\xF1\xD1]+$/.test(apellido)){ //el largo del nombre es igual a cero, nombre sera null
			var agregar = document.getElementsByClassName('lastname-container')[0]; // se agrega un container 
			var elementoSpan = document.createElement('span'); // crea un span 
			var nodoTexto = document.createTextNode('Debe ingresar su apellido'); // se crea un nodo texto.
			elementoSpan.appendChild(nodoTexto); //se nombra nodoTexto como hijo de elementoSpan 
			agregar.appendChild(elementoSpan); //elementoSpan es hijo del container 
			return false;

		}else if(apellido.charAt(0) !== apellido.charAt(0).toUpperCase()){ //queremos que la primera letra sea mayuscula .toUpperCasse toma un string y convierte en mayuscula 
			var agregar = document.getElementsByClassName('lastname-container')[0];  // se agrega container 
			var elementoSpan = document.createElement('span'); 						// se agrega span 
			var nodoTexto = document.createTextNode('Ingrese inicial de nombre con mayuscula');  // se crea nodo texto 
			elementoSpan.appendChild(nodoTexto); 
			agregar.appendChild(elementoSpan); 
			return false;
		}else{
			return true;
		}
	}
	lastname();
}
			// tener correo electronico y validar 
	var mail = document.getElementById('input-email').value;
	 if (!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(mail))){   //formato correo 
         var agregar = document.getElementsByClassName('email-container')[0];   //se crea container
         var elementoSpan = document.createElement('span');						// crea span 
         var nodoTexto = document.createTextNode('Ingrese dirección de correo electrónico válida');  // nodo texto (que dice la alerta)
         elementoSpan.appendChild(nodoTexto);
		 agregar.appendChild(elementoSpan);
         return false;
    }

			// obtener la contraseña y validar 
	var contraseña = document.getElementById('input-password').value;
		if (contraseña.length<6 || contraseña == 'password' || contraseña == 123456 || contraseña == 098754){ //el largo de contraseña mayor a 6 caracteres,
			var agregar = document.getElementsByClassName('form-group')[0];			// se crea containter
			var elementoSpan = document.createElement('span');					// se crea span
			var nodoTexto = document.createTextNode('Su contraseña debe tener al menos 6 caracteres'); //agrega nodo texto 
			elementoSpan.appendChild(nodoTexto);
			agregar.appendChild(elementoSpan);
			return false
		}

			//selección de bicicleta y validar
	var seleccionBicicleta = document.getElementsByTagName('select').selectedIndex;
	if (seleccionBicicleta == null || seleccionBicicleta == 0){
		var lista = document.getElementsByClassName('form-group input-box')[1].classList.add('seleccionBicicleta');//div contenedor de lista desplegable 
		var agregar = document.getElementsByClassName('seleccionBicicleta')[0]; // agrega container 
		var elementoSpan = document.createElement('span');						//agrega span 
		var nodoTexto = document.createTextNode('Seleccione una opción válida'); //agrega nodo texto 
		elementoSpan.appendChild(nodoTexto);
		agregar.appendChild(elementoSpan);

	}

}