//日付フォーマット変更処理
function formatDatetime(stringDate) {

    var result = "";

    var dt = new Date(stringDate);

    var year = dt.getFullYear();
    var month = dt.getMonth() + 1;
    var date = dt.getDate();
    var hours = dt.getHours();
    var minutes = dt.getMinutes();
    var seconds = dt.getSeconds();

    if (stringDate === null || stringDate === "") {
        //nothing
    } else if ((hours + minutes + seconds) == "000000") {
        result = year + "/" + month + "/" + date;
    } else if ((seconds) == "00") {
        result = year + "/" + month + "/" + date + " " + hours + ":" + minutes;
    } else {
        result = year + "/" + month + "/" + date + " " + hours + ":" + minutes + ":" + seconds;
    }
    return result;
}

//作業日数計算処理
function getDiffdate(startdate, enddate) {
    var result = "";

    if (startdate != null && enddate != null) {
        var startDt = new Date(startdate);
        var endDt = new Date(enddate);
        var diffDate = endDt.getTime() - startDt.getTime();
        result = diffDate / (1000 * 60 * 60 * 24);
    }

    return result;
}
