function insertData() {

  title.forEach(function (row) {
    document.getElementById("title1").innerText = row.title1;
    document.getElementById("title2").innerText = row.title2;
  })

  var thead = document.querySelector('table thead');
  header.forEach(function (row) {
    var header0 = document.createElement('th');
    header0.innerText = row.headerNo;
    var header1 = document.createElement('th');
    header1.innerText = row.headerTask;
    var header2 = document.createElement('th');
    header2.innerText = row.headerAssign;
    var header3 = document.createElement('th');
    header3.innerText = row.headerStatus;
    var header4 = document.createElement('th');
    header4.innerText = row.headerSchedulStartDate;
    var header5 = document.createElement('th');
    header5.innerText = row.headerSchedulEndDate;
    var header6 = document.createElement('th');
    header6.innerText = row.headerStartDate;
    var header7 = document.createElement('th');
    header7.innerText = row.headerEndDate;
    var header8 = document.createElement('th');
    header8.innerText = row.headerDays;
    var header9 = document.createElement('th');
    header9.innerText = row.headerNote;
    var tr = document.createElement('tr');
    tr.appendChild(header0);
    tr.appendChild(header1);
    tr.appendChild(header2);
    tr.appendChild(header3);
    tr.appendChild(header4);
    tr.appendChild(header5);
    tr.appendChild(header6);
    tr.appendChild(header7);
    tr.appendChild(header8);
    tr.appendChild(header9);
    thead.appendChild(tr);
  })
  var tbody = document.querySelector('table tbody');
  var j = 0;
  data.forEach(function (row) {

    j += 1;

    var column0 = document.createElement('td');
    var column1 = document.createElement('td');
    var column2 = document.createElement('td');
    var column3 = document.createElement('td');
    var column4 = document.createElement('td');
    var column5 = document.createElement('td');
    var column6 = document.createElement('td');
    var column7 = document.createElement('td');
    var column8 = document.createElement('td');
    var column9 = document.createElement('td');


    column0.innerText = j;

    if(row.status === "100%"){
      var del1 = document.createElement('del');
      del1.innerText = row.task;
      column1.appendChild(del1);

      var del2 = document.createElement('del');
      del2.innerText = row.assign;
      column2.appendChild(del2);

      var del3 = document.createElement('del');
      del3.innerText = row.status;
      column3.appendChild(del3);

      var del4 = document.createElement('del');
      del4.innerText = formatDatetime(row.schedulstartdate);
      column4.appendChild(del4);

      var del5 = document.createElement('del');
      del5.innerText = formatDatetime(row.schedulenddate);
      column5.appendChild(del5);

      var del6 = document.createElement('del');
      del6.innerText = formatDatetime(row.startdate);
      column6.appendChild(del6);

      var del7 = document.createElement('del');
      del7.innerText = formatDatetime(row.enddate);
      column7.appendChild(del7);

      var del8 = document.createElement('del');
      del8.innerText = getDiffdate(row.schedulstartdate, row.schedulenddate);
      column8.appendChild(del8);

      var del9 = document.createElement('del');
      del9.innerText = row.note;
      column9.appendChild(del9);

    }else{
      column1.innerText = row.task;
      column2.innerText = row.assign;
      column3.innerText = row.status;
      column4.innerText = formatDatetime(row.schedulstartdate);
      column5.innerText = formatDatetime(row.schedulenddate);
      column6.innerText = formatDatetime(row.startdate);
      column7.innerText = formatDatetime(row.enddate);
      column8.innerText = getDiffdate(row.schedulstartdate, row.schedulenddate);
      column9.innerText = row.note;    
    }
    var tr = document.createElement('tr');
    tr.appendChild(column0);
    tr.appendChild(column1);
    tr.appendChild(column2);
    tr.appendChild(column3);
    tr.appendChild(column4);
    tr.appendChild(column5);
    tr.appendChild(column6);
    tr.appendChild(column7);
    tr.appendChild(column8);
    tr.appendChild(column9);
    tbody.appendChild(tr);
})
}