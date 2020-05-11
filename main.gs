function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('デイリー当番');
  var areaRange = sheet.getRange('A1:A3');
  
  var areas = areaRange.getValues();

  // 配列の先頭の要素を一番最後に移動させる
  areas.push(areas.shift());

  // シートにローテーション結果を記入する
  areaRange.setValues(areas); 
  
  const deily_person = areas[0][0]
  
  // デバッグ用
  Logger.log(deily_person);
    
  var out = ContentService.createTextOutput();

  //Mime TypeをJSONに設定
  out.setMimeType(ContentService.MimeType.JSON);

  //JSONテキストをセットする
  out.setContent(JSON.stringify(deily_person));

  return out;
}

function doPost(e) {
  Logger.log(e);
}


