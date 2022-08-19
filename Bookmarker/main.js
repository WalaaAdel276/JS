var siteName = document.getElementById("siteName");
var siteURL = document.getElementById("siteURL");
var bookMarkerContainer ;
if (localStorage.getItem("markerlist") == null) {
    bookMarkerContainer = [];
}
else {
    bookMarkerContainer = JSON.parse(localStorage.getItem("markerlist"));
    displayBookMarker();
}

function addBookMarker() {
    if (validationInput()) {
        var bookMarker = {
            name: siteName.value,
            link: siteURL.value,
        }
        bookMarkerContainer.push(bookMarker);
        localStorage.setItem("markerlist", JSON.stringify(bookMarkerContainer));
        displayBookMarker();
        clearMarker();

    } else {
        var alert = "";
        alert=` <label for="nameError" class="mb-3 LB"> Name is Required</label>` ;
       document.getElementById("nameError").innerHTML = alert;
       var alert2 = "";
         alert2=` <label for="urlError" class="mb-3 LB"> URL Field is Required</label>` ;
         document.getElementById("urlError").innerHTML = alert2;
    
    }
     
}

function clearMarker() {
    siteName.value = "";
    siteURL.value = "";

}
function displayBookMarker() {

    var temp = "";
    for (var i = 0; i < bookMarkerContainer.length; i++) {
        temp += `
        <h2>${bookMarkerContainer[i].name}</h2>
        <a href="${ bookMarkerContainer[i].link}"  target="_blank"><button class="btn btn-primary">
         Visit
     </button></a> 
     <button class="btn btn-danger" onclick="deleteBookMarker(${i})">
         Delete
     </button>
     <div class="clr"></div>
        `
    }
   document.getElementById("tableBody").innerHTML=temp;
}

function validationInput() {
    if (siteName.value != "" && siteURL.value != "") {
        return true;

    } else {
        return false;
    }
}
function deleteBookMarker(index) {
    bookMarkerContainer.splice(index, 1);
    displayBookMarker();
    localStorage.setItem("markerlist", JSON.stringify(bookMarkerContainer));

}