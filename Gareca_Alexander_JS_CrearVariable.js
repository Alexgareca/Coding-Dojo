var edad = null; //En la variable edad se requiere la edad del cliente, seria de valor numerico tipo integer ya que las años son representados por numeros enteros.
var altura = null; //En la variable altura se requiere la altura del cliente en la unidad de medida de metros, seria de valor numerico tipo float, ya que puede incluir numeros con decimales.
var edadRequerida = 10; //En la variable edadRequerida se establece un valor de ingreso de edad del cliente. Tipo(Int)
var alturaRequerida = 1.0; // En la variable alturaRequerida se establece un valor de ingreso de altura del cliente. Tipo(Float) 

//Establecemos una condición para evaluar que el cliente cumpla con los requisitos de acceso a los juegos
if(edad > edadRequerida && altura >= alturaRequerida){
    console.log('El cliente puede ingresar')
}
//En caso de no cumplir el cliente no tendra ingreso al juego.
else{
    console.log('El cliente no puede ingresar')
}