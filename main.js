// var tbody = document.getElementsByTagName('tbody')[0];



// var xml = new XMLHttpRequest();

// xml.open('GET','http://mysafeinfo.com/api/data?list=bestnovels&format=json');
// xml.addEventListener('readystatechange', function () {
// 	if(xml.readyState == 4 && xml.status == 200){
   
//         getData();

// 	}
// })
// xml.send();


// function getData() {
//    console.log(JSON.parse(xml.responseText));
//     var books = JSON.parse(xml.responseText);
//     var text = ``;
//    for (var i = 0; i < books.length; i++) {
   	
//    	text += '<tr>';
//    	text += '<td>'+books[i].rank +'</td>';
//    	text += '<td>'+books[i].cnt +'</td>';
//    	text += '<td>'+books[i].tt +'</td>';
//    	text += '<td>'+books[i].au +'</td>';
//    	text += '<td>'+books[i].yr +'</td>';
//    	text += '<td><a  href="https://sh.wikipedia.org/wiki/'+books[i].tt +'" class="btn btn-warning btn-sm">Read More</a></td>'
//     text += '</tr>';
//    }

//    tbody.innerHTML = text;
// }


var tbody = document.getElementsByTagName('tbody')[0];

var xml = new XMLHttpRequest();

xml.open('GET', 'http://mysafeinfo.com/api/data?list=volcanoes&format=json');
xml.addEventListener('readystatechange', function(){
  if(xml.readyState == 4 && xml.status == 200){

    getData()

  }
})
xml.send();


function getData(){
  
   
   var vulkani = JSON.parse(xml.responseText);
   console.log(vulkani);
   var text ='';
     for (var i = 0; i <vulkani.length; i++) {

     text += '<tr>';
     text += '<td>'+ vulkani[i].nm +'</td>';
     text += '<td>'+ vulkani[i].cn +'</td>';
     text += '<td>'+ vulkani[i].typ +'</td>';
     text += '<td>'+ vulkani[i].elev +'</td>';
     text += '<td>'+ vulkani[i].lat +'</td>';
     text += '<td>'+ vulkani[i].lng +'</td>';
     text += '<td><a href="http://www.gps-coordinates.org/my-location.php?lat='+ vulkani[i].lat +'&lng='+ vulkani[i].lng +'" class="btn btn-primary">Go To</a></td>';
     text += '</tr>';

     }

   tbody.innerHTML = text;
}