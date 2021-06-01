
function maskCep(value){

value= value.replace(/\D/g,"");
value = value.replace(/^(\d{5})(\d)/,"$1-$2");
console.log(value);
return value
}
export default maskCep;