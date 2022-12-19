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
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })
  console.log("resalePriceList", resalePriceList)

  //shortlist the data for charts
  const shortlisted = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == "Jan" && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "ANG MO KIO") {
      shortlisted.push(dataPoint);
    }
  }
  console.log("shortlisted", shortlisted);

  // let newseries = shortlisted.groupBy(shortl  isted => {
  //   return shortlisted.month;
  // });
  // console.log("new series", newseries)

  // const shorlisted2 = [];
  // for (let dataPoint of shortlisted) {
  //   const listofprice = dataPoint.resaleprice;
  //   let monthList = dataPoint.month;
  //   shorlisted2.push(datapoint)
  // }

  //to group the shortlisted into months
  // let shorlistGroup = shortlisted.reduce((months, dataPoint) => {
  //   months[dataPoint.month] = months[dataPoint.month] || [];
  //   months[dataPoint.month].push(dataPoint);
  //   return months;
  // }, {});

  // console.log("shortlistGroup", shortlistGroup)

  //to group the arrays into Month groups


  // push the shortlited data into series
  const series = [];
  for (let dataPoint of shortlisted) {
 
    series.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })

    // to group the shortlisted into months
    // let series2 = series.reduce((months, dataPoint) => {
    //   months[dataPoint.x] = months[dataPoint.x] || [];
    //   months[dataPoint.x].push(dataPoint);
    //   return months;
    // }, {});

    // console.log("newseries", series2);
    console.log("Series", series);

  }
  return series;

}







function transformData2(data) {
  const resalePriceList = data.map(function(dataPoint) {
    return {
      "floorarea": dataPoint.floor_area_sqm,
      "town": dataPoint.town,
      "flatType": dataPoint.flat_type,
      "month": dataPoint.month,
      "resaleprice": dataPoint.resale_price,
      "streetName": dataPoint.street_name,
      "storeyrange": dataPoint.storey_range,
      "blockNo": dataPoint.block
    }
  })
  console.log("resalePriceList", resalePriceList)

  // add in series 2
  const shortlisted2 = [];
  for (let dataPoint of resalePriceList) {
    if (dataPoint.month == "Feb" && dataPoint.flatType == "3 ROOM" && dataPoint.storeyrange == "Lower Floor" && dataPoint.town == "ANG MO KIO") {
      shortlisted2.push(dataPoint);
    }
  }
  console.log("shortlisted", shortlisted2);

  const series2 = [];
  for (let dataPoint of shortlisted2) {

    series2.push({
      x: dataPoint.streetName,
      y: dataPoint.resaleprice

    })
    console.log("Series2", series2);


  }
  return series2;
}



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
