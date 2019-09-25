function pieChart(ele, data) {
    const BMIChart = echarts.init(ele);
            // 指定图表的配置项和数据
            const BMIChartoption = {
                legend: {
                    orient: 'vertical',
                    x: '8.7%',
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
                grid:{
                    top:0,
                    bottom:40,
                    left:0,
                    right:0,
                    containerLabel:true,
                },
                series: [
                    {
                        name:'学校',
                        type:'pie',
                        animation:false,
                        selectedMode: 'single',
                        radius: [0, '75%'],
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
                        radius: ['80%', '90%'],
                        animation:false,
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
// pirChart('BMIChart');
// pirChart('50Chart');
// pirChart('zwtqqChart');
// pirChart('feiChart');
// pirChart('situpChart');
// pirChart('50*8Chart');
// pirChart('ropeskippingChart');
