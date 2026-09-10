// 観光地データ
var spots = [
    {
        name: "伊勢神宮",
        lat: 34.4550,
        lng: 136.7258,
        image: "images/ise.jpg",
        description: "長い歴史を持つ三重県を代表する神社です。<br>豊かな森と静かな参道も見どころです。"
    },
    {
        name: "鳥羽水族館",
        lat: 34.4814,
        lng: 136.8432,
        image: "images/toba.jpg",
        description: "たくさんの海や川の生きものに出会えます。<br>ジュゴンの展示でも知られています。"
    },
    {
        name: "志摩スペイン村",
        lat: 34.3606,
        lng: 136.8490,
        image: "images/shima.jpg",
        description: "スペインの街並みを再現したテーマパークです。<br>乗り物やショーを楽しむことができます。"
    },
    {
        name: "なばなの里",
        lat: 35.0809,
        lng: 136.7044,
        image: "images/nabana.jpg",
        description: "季節の花が広がる自然豊かな施設です。<br>冬のイルミネーションも人気があります。"
    },
    {
        name: "鬼ヶ城",
        lat: 33.8924,
        lng: 136.1237,
        image: "images/onigajo.jpg",
        description: "波と風が作った岩の景色が続く名勝です。<br>遊歩道から熊野灘を見ることができます。"
    }
];

// 地図を表示
function initMap() {
    var mie = { lat: 34.55, lng: 136.55 };
    var map = new google.maps.Map(document.getElementById("map"), {
        center: mie,
        zoom: 8
    });

    var infoWindow = new google.maps.InfoWindow();

    // マーカーを作成
    for (var i = 0; i < spots.length; i++) {
        makeMarker(spots[i], map, infoWindow);
    }
}

function makeMarker(spot, map, infoWindow) {
    var marker = new google.maps.Marker({
        position: { lat: spot.lat, lng: spot.lng },
        map: map,
        title: spot.name
    });

    marker.addListener("click", function () {
        var content = '<div class="info-window">' +
            '<h3>' + spot.name + '</h3>' +
            '<img src="' + spot.image + '" alt="' + spot.name + '">' +
            '<p>' + spot.description + '</p>' +
            '</div>';

        infoWindow.setContent(content);
        infoWindow.open(map, marker);
    });
}

// アコーディオン
$(function () {
    $("#accordion").accordion({
        collapsible: true,
        heightStyle: "content"
    });
});
