
function loadXMLDoc() {
  var feedUrl = 'resources/job.xml';
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {

console.log('my status' +this.status);
console.log(this.readyState);

    if (this.readyState == 4 && this.status == 200) {
      buildHtml(this);
    }
  };
  xmlhttp.open("GET", feedUrl, true);
  xmlhttp.send();
}



function buildHtml(xml) {
  var i;
  var xmlDoc = xml.responseXML;
  var table="<tr><th>Title </th><th>Link</th></tr>";
  var x = xmlDoc.getElementsByTagName("item");
  for (i = 0; i <x.length; i++) {
    table += "<tr><td>" +
    x[i].getElementsByTagName("description")[0].childNodes[0].nodeValue +
    "</td><td>";
  }



  document.getElementById("demo").innerHTML = table;
}

// function buildHtml(xml) {
//   var i;
//   var xmlDoc = xml.responseXML;
//   var table="<tr><th>Title </th><th>Link</th></tr>";
//   var x = xmlDoc.getElementsByTagName("item");
//   for (i = 0; i <x.length; i++) {
//     table += "<tr><td>" +
//     x[i].getElementsByTagName("title")[0].childNodes[0].nodeValue +
//     "</td><td>" +
//     x[i].getElementsByTagName("link")[0].childNodes[0].nodeValue +
//     "</td></tr>";
//   }
//   document.getElementById("demo").innerHTML = table;
// }