//functions
const { exec } = require("child_process");


function wholenum(n){
	if(n == math.floor(n)){
		return true
	}else{
		return false
	}
}
function searchlist(array,term){
	var id = null
	var result = false
	for(i = 0; i < array.length; i++){
		if(array[i]==term){
			id = i
		}
	}
	return {
		"id":id,
		"result":result
	}
}
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

return result
}
/*
function encrypt(content){
	
let asciitable = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z','"',"'",'`','~','-','+','=','_','|','🐶','🅰','🌡','🐱','👌','🔞','🔥','📅','📕','⛔','💋','📻','?',
'.','🅱','💵','🚱','🔫','🎲','💬','🍆','™','©','⚒','🧂',':',';',
'👤','🤵','❔','🎟','✅','🤵']
var seed = Math.floor(Math.random()*asciitable.length*(Math.random()*4096))
console.log(seed)
var encryptedtable = []
var seedb = seed
while(seedb>asciitable.length){
	
		seedb = seedb - asciitable.length
	
}
for(i = 0; i < asciitable.length; i++){
	var position = i+seedb
	if(position > asciitable.length){
		position = position - asciitable.length
	}		
	position = position - 1
	encryptedtable[i] = asciitable[position]
	content.split()
}
console.log(seedb)
key = 'CCEK-'+seed
console.log(key)
const encryptedmessage = {
	"message": null,
	"key": key
}
return encryptedmessage
}
*/
/*
function decrypt(content,key,dateprocessed){

}
*/
var npmversion = "0.0.0"

const runtime = {
	
}

//Test Area
console.log("Quality Testing")
console.log(pbar(5,7,20))
