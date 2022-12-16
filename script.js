const options = {
  chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },




  series: [
    // NO DATA
  ],
  // what to show there is no data
  noData: {
    "text": "Loading..."
  }


}


// create the chart
const chart = new ApexCharts(document.querySelector('#chart'), options);

// render the chart
chart.render()


window.addEventListener("DOMContentLoaded", async function() {
  const data = await loadData('data.js');
  const series = transformData(data);
  // const series2 = transformData2(data);


  chart.updateSeries([
    {
      'name': 'Sales',
      'data': series
    }

  ])
})

// document.querySelector("#btnload").addEventListener('click', async function() {
//   const data = await loadData('data.js');
//   const series = transformData(data);
//   const series2 = transformData2(data);

//   chart.updateSeries([
//     {
//       'name': 'Sales',
//       'data': series2
//     }
//   ])
// })

// const options2 = {
//   chart2: {
//     type: 'bar'
//   },
//   plotOptions: {
//     bar: {
//       horizontal: true
//     }
//   },


//   series: [
//     // NO DATA
//   ],
//   // what to show there is no data
//   noData: {
//     "text": "Loading..."
//   }


// }

// // create the chart
// const chart2 = new ApexCharts(document.querySelector('#chart2'), options2);

// // render the chart
// chart2.render()


// window.addEventListener("DOMContentLoaded", async function() {
//   const data = await loadData('data.js');
//   const series = transformData(data);
//   const series2 = transformData2(data);


//   chart2.updateSeries([
//     {
//       'name': 'Sales',
//       'data': series
//     }
//   ])
// })