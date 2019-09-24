
(function(){
        const data = {
			method:'《国家学生体质健康标准》规范测试方法',
			allStudent:555,
			menCount:222,
			womenCount:333,
			ratio:'2:3',
			averageScore:'88',
			improveRatio:'20%',
			ranking:3,
			verygood:'90%',
			good:'10%',
			pass:'20%',
			unpass:'30%',
			improveScore:45,
			gradeHighScore:'六',
			highScore:99,
			gradeLowScore:'一',
			lowScore:10,
			scoreDownGrades:'四',
			scoreUpGrades:'六',
			distanceScore:30,
			downScoreMuchGrade:'一',
			downScoreMuch:34,
			fivePartGoodRatio:'25%',
			fivePartHighAverageGrade:'六',
			fivePartHighAverageGradeScore:99,
			fivePartLowScore:66,
			fivePartLastLevelGrade:'五',
			fivePartDistanceScore:30,
			fivePartDownGrade:'四',
			fivePartDownGradeScore:40,
			fivePartMethod:'222',
			fivePartGradeA:'六',
			fivePartGradeB:'四',
			fivePartProjectHighScore:'跳绳 87',
			fivePartProjectLowScore:'50米跑 30',
			fivePartImproveProject:'肺活量',
			fivePartImproveProjectScore:'6.68',
			fivePartProject:'50*8',
			fivePartProjectDownScore:'20',
			fivePartStrongProjectA:'50*8',
			fivePartStrongProjectB:'50米跑',
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

		function setValByQuerySelectorEle(dataName, data){
			const ele = document.querySelector(`[${dataName}]`);
			console.log('data:',ele);
			if(ele) {
				ele.innerHTML = data;
			}
			return;
		}
		function handleHasVal(ele,data, type,name){
			if(ele) {
				ele.innerHTML = data[type][name];
			}
			return ;
		}

		setValByQuerySelectorEle('data-method',data && data.method);
		setValByQuerySelectorEle('data-allmen',data && data.allStudent);
		setValByQuerySelectorEle('data-men',data && data.menCount);
		setValByQuerySelectorEle('data-women',data && data.womenCount);
		setValByQuerySelectorEle('data-ratio',data && data.ratio);
		setValByQuerySelectorEle('data-average',data && data.averageScore);
		setValByQuerySelectorEle('data-ranking',data && data.ranking);
		setValByQuerySelectorEle('data-verygood',data && data.verygood);
		setValByQuerySelectorEle('data-good',data && data.good);
		setValByQuerySelectorEle('data-pass',data && data.pass);
		setValByQuerySelectorEle('data-unpass',data && data.unpass);
		setValByQuerySelectorEle('data-improve-score',data && data.improveScore);
		setValByQuerySelectorEle('data-improve-ratio',data && data.improveRatio);

		setValByQuerySelectorEle('data-grade-high-score',data && data.gradeHighScore);
		setValByQuerySelectorEle('data-high-score',data && data.highScore);
		setValByQuerySelectorEle('data-grade-low-score',data && data.gradeLowScore);
		setValByQuerySelectorEle('data-low-score',data && data.lowScore);
		setValByQuerySelectorEle('data-score-down-grades',data && data.scoreDownGrades);
		setValByQuerySelectorEle('data-score-up-grades',data && data.scoreUpGrades);
		setValByQuerySelectorEle('data-distance-score',data && data.distanceScore);
		setValByQuerySelectorEle('data-down-score-much-grade',data && data.downScoreMuchGrade);
		setValByQuerySelectorEle('data-down-score-much',data && data.downScoreMuch);
		
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
		
		setValByQuerySelectorEle('data-fivePart-good-ratio',data && data.fivePartGoodRatio);
		setValByQuerySelectorEle('data-fivePart-high-average-grade',data && data.fivePartHighAverageGrade);
		setValByQuerySelectorEle('data-fivePart-high-average-grade-score',data && data.fivePartHighAverageGradeScore);
		setValByQuerySelectorEle('data-fivePart-low-score',data && data.fivePartLowScore);
		setValByQuerySelectorEle('data-fivePart-last-level-grade',data && data.fivePartLastLevelGrade);
		setValByQuerySelectorEle('data-fivePart-distance-score',data && data.fivePartDistanceScore);
		setValByQuerySelectorEle('data-fivePart-down-grade',data && data.fivePartDownGrade);
		setValByQuerySelectorEle('data-fivePart-down-grade-score',data && data.fivePartDownGradeScore);
		setValByQuerySelectorEle('data-fivePart-gradeA',data && data.fivePartGradeA);
		setValByQuerySelectorEle('data-fivePart-gradeB',data && data.fivePartGradeB);
		setValByQuerySelectorEle('data-fivePart-method',data && data.fivePartMethod);

        setValByQuerySelectorEle('data-fivePart-project-high-score',data && data.fivePartProjectHighScore);
		setValByQuerySelectorEle('data-fivePart-project-low-score',data && data.fivePartProjectLowScore);
		setValByQuerySelectorEle('data-fivePart-improve-project',data && data.fivePartImproveProject);
		setValByQuerySelectorEle('data-fivePart-improve-project-score',data && data.fivePartImproveProjectScore);
		setValByQuerySelectorEle('data-fivePart-project',data && data.fivePartProject);
		setValByQuerySelectorEle('data-fivePart-project-down-score',data && data.fivePartProjectDownScore);
		setValByQuerySelectorEle('data-fivePart-strong-projectA',data && data.fivePartStrongProjectA);
		setValByQuerySelectorEle('data-fivePart-strong-projectB',data && data.fivePartStrongProjectB);
		
})();