//alert("loaded");
// <pre class="prettyprint" id="code">
var div = document.createElement("div");
div.id = "tempdiv";
div.innerHTML = `
<pre class="prettyprint" id="code">
      
 
function getdetails(name) {




  var e = new XMLHttpRequest;
  e.onreadystatechange = function() {
      if (4 == e.readyState && 200 == e.status) {
          var t = e.responseText;


          console.log(t);
var obj = JSON.parse(t);
console.log(obj.entries[0]);
$.getScript("/dist/js/"+obj.entries[0].Category+"/"+name+".js", function() {
  //alert("Script loaded but not necessarily executed.");
});
//var val = JSON.parse(obj[0]);
//console.log(val);
document.getElementById("about").innerHTML = obj.entries[0].Description;
document.getElementById("auth").innerHTML = obj.entries[0].Auth;
document.getElementById("https").innerHTML = obj.entries[0].HTTPS;
document.getElementById("cors").innerHTML = obj.entries[0].Cors;
document.getElementById("url").href = obj.entries[0].Link;
document.getElementById("iframe").src = "/"+obj.entries[0].Category+"/"+name+".html";
var node = new PrettyJSON.view.Node({
  el:document.getElementById('json'),
  data:obj
});
node.expandAll;
//document.getElementById('code').innerHTML = JSON.stringify(obj, null, 4);
      }   
  }
  ,
  e.open("GET", "https://api.publicapis.org/entries?title="+name, !0),
  e.send(null)

}
    </pre>



`;

//var node = document.createTextNode("var code = document.createElement('code');");

//pre.appendChild(node);


var element = document.getElementById("cexample");

element.appendChild(div);
$.getScript("https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js", function() {
   // alert("Script loaded but not necessarily executed.");
 });