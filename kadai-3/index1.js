//生まれた日を入力
const day = parseInt(process.argv[2])

if (day % 3 === 0) {
　 console.log('あなたは臆病な性格です')
} else if (day % 3 === 1) {  
   console.log('あなたは楽観的な性格です')
} else if (day % 3 === 2){
   console.log('あなた怒りっぽい性格です') 
}