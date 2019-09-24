 const chartData1 = [85, 84.5, 83, 81, 80, 75];
 const chartName = ['六年级', '五年级', '四年级', '三年级', '二年级', '一年级'];
 const chartColor1 = ["#e8c223", "#e8c223", "#e8c223", "#e8c223", "#e8c223", "#f4811a"];
 // #95C836 ;  #5ab9b9  #e8c223  #f4811a

 function histoGram(elementname, chartData, chartName, chartColor) {
     const histoGram = echarts.init(document.getElementById(elementname));
     histoGram.setOption({
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
             bottom: '5%',
             top: '5%',
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
 }

 histoGram('histoGram1', chartData1, chartName, chartColor1);
 const chartData2 = [85, 84.5, 83, 81, 80, 78];
 const chartColor2 = ["#5ab9b9"];
 histoGram('histoGram2', chartData2, chartName, chartColor2);

 const chartData3 = [85, 84.5, 83, 81, 80, 78];
 const chartColor3 = ["#5ab9b9"];
 histoGram('histoGram3', chartData3, chartName, chartColor3);

 const chartData4 = [85, 84.5, 83, 81, 80, 78];
 const chartColor4 = ["#5ab9b9"];
 histoGram('histoGram4', chartData4, chartName, chartColor4);

 const chartData5 = [85, 84.5, 83, 81, 80, 78];
 const chartColor5 = ["#5ab9b9"];
 histoGram('histoGram5', chartData5, chartName, chartColor5);

 const chartData6 = [85, 84.5, 83, 81, 80, 78];
 const chartColor6 = ["#5ab9b9"];
 histoGram('histoGram6', chartData6, chartName, chartColor6);

 const chartData7 = [85, 84.5, 83, 81, 80, 78];
 const chartColor7 = ["#5ab9b9"];
 histoGram('histoGram7', chartData7, chartName, chartColor7);

 const chartData8 = [85, 84.5, 83, 81, 80, 78];
 const chartColor8 = ["#5ab9b9"];
 histoGram('histoGram8', chartData8, chartName, chartColor8);