export default function add(a, b){
    return a + b;
}
export function divide(a,b){
    return a/b;
}
export function sub(a,b,callback){
    setTimeout(
        function (){
            callback((a - b),divide(a,b));
        }, 3000
    )
}
export function callbackGetSub(a,b) {
    console.log("il risultato di sub è: "+a);
}