function lineChart(ele, data) {
    const gradeScoreChart = echarts.init(ele);
    const option = {
        legend: {
            orient: 'vertical',
            top: 'center',
            left: 'left',
            data: ['2016', '2017'],
            textStyle:{
                color:'#95c836'
            }
        },
        grid: {
            left: '23.4%',
            right: 20,
            top:30,
            bottom:0,
            containLabel: true,
            borderColor: 'red'
        },
        xAxis: {
            type: 'category',
            splitArea: {
                show: true
            },
            interval:0,
            boundaryGap: true ,
            data: ['一年级', '二年级', '三年级', '四年级', '五年级', '六年级'],
            axisLabel:{
                color:'#5ab9b9',
            },
            axisLine:{
                lineStyle:{
                    color:'#5ab9b9',
                }
            },
            axisTick:{
                show:false
            }
        },
        yAxis: {
            type: 'value',
            splitArea: {
                show: true
            },
            axisLabel:{
                color:'#5ab9b9',
            },
            axisLine:{
                lineStyle:{
                    color:'#5ab9b9',
                }
            },
            axisTick:{
                show:false
            }

        },
        series: [{
                name: '2016',
                type: 'line',
                animation:false,
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
                animation:false,
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
}
