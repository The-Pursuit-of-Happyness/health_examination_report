const gradeScoreChart = echarts.init(document.getElementById('gradeScoreChart'));
const option = {
    legend: {
        orient: 'vertical',
        top: 'center',
        left: 'left',
        data: ['2016', '2017']
    },
    grid: {
        left: 100,
        right: 20,
        containLabel: true,
        borderColor: 'red'
    },
    xAxis: {
        type: 'category',
        splitArea: {
            show: true
        },
        boundaryGap: false,
        data: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'],
    },
    yAxis: {
        type: 'value',
        splitArea: {
            show: true
        }
    },
    series: [{
            name: '2016',
            type: 'line',
            itemStyle: {
                color: '#e2c400'
            },
            lineStyle: {
                color: '#e2c400'
            },
            data: [120, 132, 101, 134, 90, 230]
        },
        {
            name: '2017',
            type: 'line',
            itemStyle: {
                color: '#95c836'
            },
            lineStyle: {
                color: '#95c836'
            },
            data: [220, 182, 191, 234, 290, 330]
        },
    ]
};
gradeScoreChart.setOption(option);