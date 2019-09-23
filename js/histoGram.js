 const chartData = [85, 84.5, 83, 81, 80, 75];
 const chartName = ['六年级', '五年级', '四年级', '三年级', '二年级', '一年级'];
 const chartColor = ["#e8c223", "#e8c223", "#e8c223", "#e8c223", "#e8c223", "#f4811a"]; // #95C836 ;  #5ab9b9  #e8c223  #f4811a
 const histoGram1 = echarts.init(document.getElementById('histoGram1'));
 histoGram1.setOption({
     //  title: {
     //     text: '单位:  '+unit,
     //     right:0,
     //     textStyle: {
     //         color: '#000',
     //         fontSize:14,
     //     }
     // },     
     backgroundColor: '#fff',
     grid: {
         left: '2%',
         right: '10%',
         bottom: '10%',
         top: '10%',
         containLabel: true
     },
     xAxis: [{
             show: false,
         },
         {
             show: false,
         }
     ],
     yAxis: {
         type: 'category',
         inverse: true,
         show: false
     },

     series: [
         //亮色条 百分比
         {
             show: true,
             type: 'bar',
             barGap: '-100%',
             barWidth: '30%',
             z: 2,
             itemStyle: {
                 normal: {
                     color: function(params) {
                         var num = chartColor.length;
                         return chartColor[params.dataIndex % num]
                     }
                 }
             },
             label: {
                 normal: {
                     show: true,
                     textStyle: {
                         color: function(params) {
                             var num = chartColor.length;
                             return chartColor[params.dataIndex % num]
                         },
                         fontSize: 25,
                         fontWeight: 'bold'
                     },
                     position: 'right',
                     formatter: function(data) {
                         return (chartData[data.dataIndex]).toFixed(1);
                     }
                 }
             },
             data: chartData,
         },
         //年份
         {
             show: true,
             type: 'bar',
             xAxisIndex: 1, //代表使用第二个X轴刻度
             barGap: '-100%',
             barWidth: '10%',
             itemStyle: {
                 normal: {
                     barBorderRadius: 200,
                     color: 'transparent'
                 }
             },
             label: {
                 normal: {
                     show: true,
                     position: [0, '-20'],
                     textStyle: {
                         fontSize: 14,
                         color: '#333',
                     },
                     formatter: function(data) {
                         return chartName[data.dataIndex];
                     }
                 }
             },
             data: chartData
         }
     ]
 });