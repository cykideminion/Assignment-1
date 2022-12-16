async function loadData() {
  const response = await axios.get("data.json");
  return response.data;
  // console.log(response.data);
}

loadData();

// let data = loadData();


// function transformData(data) {
//     let resalePriceList = [];
//     for (let dataPoint of data) {
//       resalePriceList.push({
//         "resaleprice": dataPoint.resale_price,
//         "streetName": dataPoint.street_name
//       })
//       console.log(resalePriceList);
//     }}

//function to transform the data needed
function transformData(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "lcomdate": dataPoint.lease_commence_date,
      "remainLease": dataPoint.remaining_lease,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range
    }
  })
  console.log("resalePriceList", resalePriceList)

  //shortlist the data for charts
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" & dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);
    }
  }
  console.log("shortlisted", shortlisted);


  // let newseries = shortlisted.groupBy(shortlisted => {
  //   return shortlisted.month;
  // });
  // console.log("new series", newseries)




  //push the shortlited data into series
  const series = [];
  for (let dataPoint of shortlisted) {
    const idresale = dataPoint.floorarea;
    const listofprice = dataPoint.resaleprice;
    let monthList = dataPoint.month;
    console.log(idresale);
    console.log(listofprice);
    console.log(monthList)


    series.push({
      x: dataPoint.month,
      y: dataPoint.resaleprice

    })

    // grouping into months
    // let monthListt = {
    //   "0": [],
    //   "1": [],
    //   "2": [],
    //   "3": [],
    //   "4": [],
    //   "5": [],
    //   "6": [],
    //   "7": [],
    //   "8": [],
    //   "8": [],
    //   "10": [],
    //   "11": []
    // }

    // for (let dataPoint of series) {
    //   const monthIndex = dataPoint.x;
    //   monthListt[monthIndex].push(dataPoint);
    // }
    // console.log(monthList)

    // for (let dataPoint in series) {

    //   if (series.x == monthList)
    //     newseries.push(dataPoint)
    // }

    console.log(series);
  }

  return series;


}







// add in series 2

// function transformData2(data) {
//   const resalePriceList2 = data.map(function(dataPoint) {
//     return {

//       "lcomdate": dataPoint.lease_commence_date,
//       "remainLease": dataPoint.remaining_lease
//     }
//   })
//   console.log("resalePriceList2", resalePriceList2)

//   const shortlisted2 = [];
//   for (let dataPoint of resalePriceList2) {
//     if (dataPoint.remainLease >= 60) {
//       shortlisted2.push(dataPoint);

//     }
//   }
//   console.log("shortlisted", shortlisted2);
//   const series2 = [];
//   for (let dataPoint of shortlisted2) {

//     const listoflease = dataPoint.lcomdate;
//     const remainleaseList = dataPoint.remainLease;

//     console.log(listoflease);
//     console.log(remainleaseList)

//     series2.push({
//       x: dataPoint.lcomdate,
//       y: dataPoint.remainLease
//     })
//   }

//   console.log(series2);
//   return series2;
// }
  // add in series 2




//   const shortlisted = [];
//   for (let dataPoint of earnings) {
//     if (dataPoint.date.getFullYear() == 2020) {
//       shortlisted.push(dataPoint);
//     }
//   }
//   console.log("shortlisted", shortlisted);
// }






//   

