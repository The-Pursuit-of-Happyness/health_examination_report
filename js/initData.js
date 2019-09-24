
(function(){
        const data = {
                'fei':{
                        averageScore: 99,
                        level:'提高',
                        levelScore:55,
                        goodRatio:'89%',
                        lastLevelRatio:'34%',
                        highscoreGrade:'六',
                        gradeScore:88,
                        lowScoreGrade:'四',
                        lowScore:44,
                },
                '50meter':{
                        averageScore: 99,
                        level:'提高',
                        levelScore:55,
                        goodRatio:'89%',
                        lastLevelRatio:'34%',
                        highscoreGrade:'六',
                        gradeScore:88,
                        lowScoreGrade:'四',
                        lowScore:44,
                }
        }
        for (const s of document.querySelectorAll(".pageFour > section")) {
                const t = s.querySelector("[data-single-average-score]");
                if(t) {
                const averageScore = t.getAttribute('data-single-average-score');
                t.innerHTML = data[averageScore].averageScore;
                }
                console.log('ttt:',t)
        }
})();