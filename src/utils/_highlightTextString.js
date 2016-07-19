export default function(text, section) {
  /*
    --------------------------------------------------------------
    // ORIGINAL CODE FROM: http://jsfiddle.net/FutureWebDev/HfS7e/
    --------------------------------------------------------------
    var text = document.getElementById("query").value;
    var query = new RegExp("(\\b" + text + "\\b)", "gim");
    var e = document.getElementById("searchtext").innerHTML;
    var enew = e.replace(/(<span>|<\/span>)/igm, "");
    document.getElementById("searchtext").innerHTML = enew;
    var newe = enew.replace(query, "<span>$1</span>");
    document.getElementById("searchtext").innerHTML = newe;
    --------------------------------------------------------------
  */

  let query = new RegExp('(\\b' + text + '\\b)', 'gim');
  // let newSection = section.replace(/(<mark>|<\/mark>)/igm, '');
  let hightlightedText = section.replace(query, '<mark>$1</mark>');

  console.log(hightlightedText);

  return hightlightedText;
}
