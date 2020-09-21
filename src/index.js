import Vue from 'vue';

var typying =new Vue({
	el:'#typing',
   data(){
	   return{
		   typingMode:1,
		   typingWords:'',
		   words:[
			   ['neko','ねこ'],
			   ['saru','さる'],
			   ['wani','わに'],
			   ['buta','ぶた'],
			   ['inu','いぬ'],
			   ['tanuki','たぬき'],
			   ['tora','とら'],
			   ['nezumi','ねずみ'],
			   ['uma','うま'],
			   ['kaba','かば'],
			   ['tori','とり'],
			   ['risu','りす'],
			   ['kuma','くま'],
			   ['yagi','やぎ'],
			   ['hebi','へび'],
			   ['kirin','きりん'],
			   ['usagi','うさぎ'],
			   ['zou','ぞう']
		   ],
		   typedWords: [],
		   solvedCount:0,
		   timer:15,
		   point:0,
		   isCorrect:false
	   }
   },
	methods:{
		count: function() {
			if(this.timer > 0){
				this.timer -= 1;
			}
		},
		timeUp: function() {
			this.typingMode = 3;
			var point = this.typedWords.length;
			console.log(point);
		},
		startBtn(){
			this.typingMode = 2;
			this.solvedWords = [];
			let self = this;
			setInterval(function() {
				self.count();
			}, 1000),
			setTimeout(function() {
				self.timeUp();
			}, 15000)
			this.$nextTick(() => {
				this.$refs.textInput.focus();
			});
		},
		reset(){
			this.typingMode = 2;
		}
	},
	computed:{
		currentWord() {
			const typedWords = this.words.filter((word) => {
				return (!this.typedWords.includes(word)) // 解答されてないものだけ
			})
			const randomIndex = Math.floor(Math.random()*typedWords.length)
			return [typedWords[randomIndex][0], typedWords[randomIndex][1]];
		}
	},
	updated(){
		if(this.typingWords == this.currentWord[0]){
			this.typingWords ='';
			this.typedWords.push(this.typingWords);
			this.point++;
		}
	}
               
})
