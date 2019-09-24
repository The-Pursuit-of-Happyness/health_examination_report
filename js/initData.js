
(function(){
        const data = {
			'BMI':{
				averageScore: 99,
				level:'提高',
				levelScore:55,
				goodRatio:'89%',
				fatRatio:'55%',
				lastLevelRatio:'34%',
				highScoreGrade:'六',
				highScore:88,
				lowScoreGrade:'四',
				lowScore:44,
		},
                'fei':{
                        averageScore: 99,
                        level:'提高',
                        levelScore:55,
                        goodRatio:'89%',
                        lastLevelRatio:'34%',
                        highScoreGrade:'六',
                        highScore:88,
                        lowScoreGrade:'四',
                        lowScore:44,
                },
                '50meter':{
                        averageScore: 99,
                        level:'提高',
                        levelScore:55,
                        goodRatio:'89%',
                        lastLevelRatio:'34%',
                        highScoreGrade:'六',
                        highScore:88,
                        lowScoreGrade:'四',
                        lowScore:44,
				},
				'zwtqq':{
					averageScore: 99,
					level:'提高',
					levelScore:55,
					goodRatio:'89%',
					lastLevelRatio:'34%',
					highScoreGrade:'六',
					highScore:88,
					lowScoreGrade:'四',
					lowScore:44,
			},
			'ropeskipping':{
					averageScore: 99,
					level:'提高',
					levelScore:55,
					goodRatio:'89%',
					lastLevelRatio:'34%',
					highScoreGrade:'六',
					highScore:88,
					lowScoreGrade:'四',
					lowScore:44,
			},
			'situp':{
				averageScore: 99,
				level:'提高',
				levelScore:55,
				goodRatio:'89%',
				lastLevelRatio:'34%',
				highScoreGrade:'六',
				highScore:88,
				lowScoreGrade:'四',
				lowScore:44,
		},
		'50*8':{
				averageScore: 99,
				level:'提高',
				levelScore:55,
				goodRatio:'89%',
				lastLevelRatio:'34%',
				highScoreGrade:'六',
				highScore:88,
				lowScoreGrade:'四',
				lowScore:44,
		},

		}
		function handleHasVal(ele,data, type,name){
			if(ele) {
				ele.innerHTML = data[type][name];
			}
			return ;
		}
        for (const s of document.querySelectorAll(".pageFour > section")) {
                const t = s.querySelector("[data-single-average-score]");
				const type = t ? t.getAttribute('data-single-average-score') : null;
                if(type) {
						const averageScore = s.querySelector("[data-single-average-score]");
						const fatRatio = s.querySelector("[data-single-fat-ratio]");
                        const level = s.querySelector("[data-single-level]");
                        const levelScore = s.querySelector("[data-single-level-score]");
                        const goodRatio = s.querySelector("[data-single-good-ratio]");
                        const lastLevelRatio = s.querySelector("[data-single-last-level-ratio]");
                        const highScoreGrade = s.querySelector("[data-single-highscore-grade]");
                        const highScore = s.querySelector("[data-single-highScore]");
                        const lowscoreGrade = s.querySelector("[data-single-lowScore-grade]");
						const lowScore = s.querySelector("[data-single-lowScore]");
						handleHasVal(fatRatio, data, type,'fatRatio');
						handleHasVal(averageScore, data, type,'averageScore');
						handleHasVal(level, data, type,'level');
						handleHasVal(levelScore, data, type,'levelScore');
						handleHasVal(goodRatio, data, type,'goodRatio');
						handleHasVal(lastLevelRatio, data, type,'lastLevelRatio');
						handleHasVal(highScoreGrade, data, type,'highScoreGrade');
						handleHasVal(highScore, data, type,'highScore');
						handleHasVal(lowscoreGrade, data, type,'lowScoreGrade');
						handleHasVal(lowScore, data, type,'lowScore');
                }
        }
})();