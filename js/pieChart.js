function pirChart(eleName) {
    const BMIChartEle = document.getElementById(eleName);
    const BMIChart = echarts.init(BMIChartEle);
            // 指定图表的配置项和数据
            const BMIChartoption = {
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    top:'center',
                    formatter: function (name) {
                        const ratio = (30 / 100).toFixed(2)*100 +'%';
                        return name + ratio;
                    },
                    data:[{
                        name:'优秀',
                        textStyle:{
                            color:'#95c836'
                        },
                    },{
                        name:'良好',
                        textStyle:{
                            color:'#e2c400'
                        },
                    },{
                        name:'及格',
                        textStyle:{
                            color:'#ed8300'
                        },
                    },{
                        name:'不及格',
                        textStyle:{
                            color:'#ca4e23'
                        },
                    }],
                },
                series: [
                    {
                        name:'学校',
                        type:'pie',
                        selectedMode: 'single',
                        radius: [0, '30%'],
                        label:{
                            show:false,
                        },
                        data:[
                            {value:335, name:'优秀',itemStyle:{color:'#95c836'}},
                            {value:310, name:'良好',itemStyle:{color:'#e2c400'}},
                            {value:234, name:'及格',itemStyle:{color:'#ed8300'}},
                            {value:135, name:'不及格',itemStyle:{color:'#ca4e23'}},
                        ]
                    },
                    {
                        name:'全区',
                        type:'pie',
                        radius: ['40%', '55%'],
                        label:{
                            show:false,
                        },
                        itemStyle:{
                            opacity:0.5
                        },
                        data:[
                            {value:335, name:'优秀',itemStyle:{color:'#95c836'}},
                            {value:310, name:'良好',itemStyle:{color:'#e2c400'}},
                            {value:234, name:'及格',itemStyle:{color:'#ed8300'}},
                            {value:135, name:'不及格',itemStyle:{color:'#ca4e23'}},
                        ]
                    }
                ]
            };
            BMIChart.setOption(BMIChartoption);
}
pirChart('BMIChart');
pirChart('50Chart');
pirChart('zwtqqChart');
pirChart('feiChart');
pirChart('situpChart');
pirChart('50*8Chart');
pirChart('ropeskippingChart');
