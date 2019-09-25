function setGlobalData(classname, data) {
        const targetEle = document.querySelector(`.${classname}`);
        function setValByQuerySelectorEle(dataName, data) {
		const ele = targetEle.querySelector(`[${dataName}]`);
		if (ele) {
			ele.innerHTML = data;
		}
		return;
	}
	function handleHasVal(ele, data, type, name) {
		if (ele) {
			ele.innerHTML = data[type][name];
		}
		return;
	}
	function handleChartData(elements, data, other) {
		for(let item of elements) {
			const chartType = item.getAttribute('data-chart-type');
			if(chartType === 'pie') {
				// const chartDataName = item.getAttribute('data-chart');
				pieChart(item,data);
			}
			if(chartType === 'bar') {
				// const chartDataName = item.getAttribute('data-chart');
				const chartData = [85, 84.5, 83, 81, 80, 75];
				const chartName = ['六年级', '五年级', '四年级', '三年级', '二年级', '一年级'];
				barChart(item,{chartData,chartName, chartColor: other && other.chartColor});
			}
			if(chartType === 'line') {
				// const chartDataName = item.getAttribute('data-chart');
				lineChart(item,data);
			}
			
		}
	}
    //第二部分数据
	setValByQuerySelectorEle('data-method', data && data.method);
	setValByQuerySelectorEle('data-allmen', data && data.allStudent);
	setValByQuerySelectorEle('data-men', data && data.menCount);
	setValByQuerySelectorEle('data-women', data && data.womenCount);
	setValByQuerySelectorEle('data-ratio', data && data.ratio);

    //第三部分数据
	setValByQuerySelectorEle('data-average', data && data.averageScore);
	setValByQuerySelectorEle('data-ranking', data && data.ranking);
	setValByQuerySelectorEle('data-verygood', data && data.verygood);
	setValByQuerySelectorEle('data-good', data && data.good);
	setValByQuerySelectorEle('data-pass', data && data.pass);
	setValByQuerySelectorEle('data-unpass', data && data.unpass);
	setValByQuerySelectorEle('data-improve-score', data && data.improveScore);
	setValByQuerySelectorEle('data-improve-ratio', data && data.improveRatio);

	setValByQuerySelectorEle('data-grade-high-score', data && data.gradeHighScore);
	setValByQuerySelectorEle('data-high-score', data && data.highScore);
	setValByQuerySelectorEle('data-grade-low-score', data && data.gradeLowScore);
	setValByQuerySelectorEle('data-low-score', data && data.lowScore);
	setValByQuerySelectorEle('data-score-down-grades', data && data.scoreDownGrades);
	setValByQuerySelectorEle('data-score-up-grades', data && data.scoreUpGrades);
	setValByQuerySelectorEle('data-distance-score', data && data.distanceScore);
	setValByQuerySelectorEle('data-down-score-much-grade', data && data.downScoreMuchGrade);
	setValByQuerySelectorEle('data-down-score-much', data && data.downScoreMuch);
	
	const partThreeEle = targetEle.querySelector('.pageThree > section');
	const partThreeChartEle = partThreeEle.querySelectorAll("[data-chart]");
	const other = {
		chartColor:["#e8c223", "#e8c223", "#e8c223", "#e8c223", "#e8c223", "#f4811a"]
	};
	handleChartData(partThreeChartEle, data, other);
	//第四部分
	for (const s of targetEle.querySelectorAll(".pageFour > section")) {
		const t = s.querySelector("[data-single-average-score]");
		const type = t ? t.getAttribute('data-single-average-score') : null;
		if (type) {
			const fatRatio = s.querySelector("[data-single-fat-ratio]");
			const averageScore = s.querySelector("[data-single-average-score]");
			const level = s.querySelector("[data-single-level]");
			const levelScore = s.querySelector("[data-single-level-score]");
			const goodRatio = s.querySelector("[data-single-good-ratio]");
			const lastLevelRatio = s.querySelector("[data-single-last-level-ratio]");
			const highScoreGrade = s.querySelector("[data-single-highscore-grade]");
			const highScore = s.querySelector("[data-single-highScore]");
			const lowscoreGrade = s.querySelector("[data-single-lowScore-grade]");
			const lowScore = s.querySelector("[data-single-lowScore]");
			const chartElements = s.querySelectorAll("[data-chart]");
			handleHasVal(fatRatio, data, type, 'fatRatio');
			handleHasVal(averageScore, data, type, 'averageScore');
			handleHasVal(level, data, type, 'level');
			handleHasVal(levelScore, data, type, 'levelScore');
			handleHasVal(goodRatio, data, type, 'goodRatio');
			handleHasVal(lastLevelRatio, data, type, 'lastLevelRatio');
			handleHasVal(highScoreGrade, data, type, 'highScoreGrade');
			handleHasVal(highScore, data, type, 'highScore');
			handleHasVal(lowscoreGrade, data, type, 'lowScoreGrade');
			handleHasVal(lowScore, data, type, 'lowScore');
			handleChartData(chartElements, data, {chartColor:['#5ab9b9']});
		}
	}
	
	//第五部分数据
	setValByQuerySelectorEle('data-fivePart-good-ratio', data && data.fivePartGoodRatio);
	setValByQuerySelectorEle('data-fivePart-high-average-grade', data && data.fivePartHighAverageGrade);
	setValByQuerySelectorEle('data-fivePart-high-average-grade-score', data && data.fivePartHighAverageGradeScore);
	setValByQuerySelectorEle('data-fivePart-low-score', data && data.fivePartLowScore);
	setValByQuerySelectorEle('data-fivePart-last-level-grade', data && data.fivePartLastLevelGrade);
	setValByQuerySelectorEle('data-fivePart-distance-score', data && data.fivePartDistanceScore);
	setValByQuerySelectorEle('data-fivePart-down-grade', data && data.fivePartDownGrade);
	setValByQuerySelectorEle('data-fivePart-down-grade-score', data && data.fivePartDownGradeScore);
	setValByQuerySelectorEle('data-fivePart-gradeA', data && data.fivePartGradeA);
	setValByQuerySelectorEle('data-fivePart-gradeB', data && data.fivePartGradeB);
	setValByQuerySelectorEle('data-fivePart-method', data && data.fivePartMethod);

	setValByQuerySelectorEle('data-fivePart-project-high-score', data && data.fivePartProjectHighScore);
	setValByQuerySelectorEle('data-fivePart-project-low-score', data && data.fivePartProjectLowScore);
	setValByQuerySelectorEle('data-fivePart-improve-project', data && data.fivePartImproveProject);
	setValByQuerySelectorEle('data-fivePart-improve-project-score', data && data.fivePartImproveProjectScore);
	setValByQuerySelectorEle('data-fivePart-project', data && data.fivePartProject);
	setValByQuerySelectorEle('data-fivePart-project-down-score', data && data.fivePartProjectDownScore);
	setValByQuerySelectorEle('data-fivePart-strong-projectA', data && data.fivePartStrongProjectA);
	setValByQuerySelectorEle('data-fivePart-strong-projectB', data && data.fivePartStrongProjectB);
}