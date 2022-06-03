
var regEx = new RegExp("^[A-Z]+$");
//função gera galavra
function palavrasAleatorias (){
    var palavras = ["amor", "felicidade", "paz", "gratidao","sucesso","inteligencia","musica"];
    var busca = palavras[Math.ceil(Math.random() * (palavras.length - 1))];
    document.getElementById("canvas").innerHTML = busca;
}
console.log(palavrasAleatorias(palavras));



//check se a palavra cabe no espaço
function check(espaço, palavras){
    if(espaço.length !== palavras.length){
        return false;
    } for (let i = 0; i < espaço.length; i++){
    if(espaço[i] !== '-' && espaço[i] !== palavras[i]){
        return false;
    } //se não couber  
    }
    return true;  //se couber no espaço
}
