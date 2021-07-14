// import bar from './bar';

// bar();



//新北市文化資產

jsonData.forEach(x => getDist(x.address));


function getDist(st) {
    var arr = Array.from(st)
    var index = arr.findIndex(x => x == '區');
    var dist = arr.slice(index - 2, index + 1).join('');
    return dist
    // console.log(dist);
}

let data = jsonData;
data.forEach(x => x.dist = getDist(x.address));

// .forEach(x => x.dist = getDist(x.address));
// console.log(jsonData);
// data.forEach(function (x){
    //     console.log(x.address);
    // })
    console.log(data[0])

ko.applyBindings(data);

// 頁首圖片
// https://www.travel.taipei/zh-tw/attraction/details/217
// https://www.flickr.com/photos/taiwan_scenery_gallery/

// ●knockout.js
// ●Bootstrap
// ●BootstrapTable

// 想用新北市來做！

// ・新北市文化資產
// https://data.ntpc.gov.tw/od/detail?oid=D8EB898F-6C59-4689-9191-48DBBEF16606

// ※新北市觀光旅遊網。
// https://tour.ntpc.gov.tw/
// https://tour.ntpc.gov.tw/zh-tw/ContentPage/List?wnd_id=49
// 景點全搜
// https://tour.ntpc.gov.tw/zh-tw/Attraction/Search?wnd_id=60&theme=11

// ※新北市iMAP
// https://map.ntpc.gov.tw/

// 要找open source圖片！ 


//https://github.com/google/google-api-javascript-client