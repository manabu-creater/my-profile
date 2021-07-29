function header(rootDir){
  $.ajax({
      url: rootDir + "header.html", // ディレクトリー変更
      cache: false,
      async: false,
      dataType: 'html',
      success: function(html){
          html = html.replace(/\{\$root\}/g, rootDir); 
          document.write(html);
      }
  });
}