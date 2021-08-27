//functions
function pbar(a,b,c){
	var amount = a/b
	var result = ""
	var shadedbars = Math.floor(amount*c) 
	var clearbars = c-shadedbars
	for(i = 1;i<c;i++){
		if(shadedbars >= i){
			result = result + "|"
		}else{
			result = result + "."
		}
	}
function encrypt(content,seed){

}
return result
}
//Test Area
console.log("Quality Testing")
console.log(pbar(5,7,20))
