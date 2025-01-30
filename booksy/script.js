var popupoverlay=document.querySelector(".pop-up-overlay")
var popupbox=document.querySelector(".pop-up-box")
var addpopup=document.getElementById("addpopup")

addpopup.addEventListener("click", function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

var cancelbook=document.getElementById("cancel-book")

    cancelbook.addEventListener("click", function(event){
        event.preventDefault()
          popupoverlay.style.display="none"
    popupbox.style.display="none"

    })

    var container=document.querySelector(".container")
    var addbook=document.getElementById("add-book")
    var booktitle=document.getElementById("book-title-input")
    var bookauthor=document.getElementById("book-author-input")
    var bookdesc=document.getElementById("book-desc-inp")

    addbook.addEventListener("click", function(event){
        event.preventDefault()

        var div=document.createElement("div")
        div.setAttribute("class", "bookcontainer")
        div.innerHTML=
         `<h2>${booktitle.value}</h2>
        <h5> ${bookauthor.value}</h5>
        
        <p>${bookdesc.value}</p>
          <button onclick="deletebook(event)">delete</button>`
        container.append(div)
    })

    function deletebook(event){
        event.target.parentElement.remove()
    }
