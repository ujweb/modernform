$(document).ready(function(e) {


  $('#country-select').quickselect({
    judge: 'all', // all=全部篩選,head=從首字篩選
    show: 6, // 點選後可見到幾個選項,超過捲動
    errorText: 'No results found', // 沒有符合結果時顯示的字樣
  });

  $('#country-select-2').quickselect({
    judge: 'all', // all=全部篩選,head=從首字篩選
    show: 6, // 點選後可見到幾個選項,超過捲動
    errorText: 'No results found', // 沒有符合結果時顯示的字樣
  });

  $('#type-select').quickselect({
    judge: 'all', // all=全部篩選,head=從首字篩選
    show: 5, // 點選後可見到幾個選項,超過捲動
  });

  $('#type-select-1').quickselect({
    judge: 'all', // all=全部篩選,head=從首字篩選
    show: 5, // 點選後可見到幾個選項,超過捲動
  });

  $('#type-select-2').quickselect({
    judge: 'all', // all=全部篩選,head=從首字篩選
    show: 5, // 點選後可見到幾個選項,超過捲動
  });

  $('#type-select-3').quickselect({
    judge: 'all', // all=全部篩選,head=從首字篩選
    show: 5, // 點選後可見到幾個選項,超過捲動
  });



});