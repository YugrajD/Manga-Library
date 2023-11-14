const myLibrary = [];

window.onload = function() {
    displaySavedInfo();
}

function displayInput() {
    var book = document.getElementById("bookEnter").value;
    var author = document.getElementById("authorEnter").value;
    var pages = document.getElementById("pages").value;
    var status = document.getElementById("Reading-Status").value;

    var bookData = {
        book: book,
        author: author,
        pages: pages,
        status: status
    };

    var bookInfo = 'Book name: ' + book + ' Author: ' + author + ' Page Count: ' + pages + " Reading Status: " + status;

    document.getElementById("displayArea").innerHTML = bookInfo;
    
    var existingData = JSON.parse(localStorage.getItem('bookData')) || [];
    existingData.push(bookData);
    localStorage.setItem('bookData', JSON.stringify(existingData));

    displaySavedInfo();
}

function togglePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = (popup.style.display === "none" || popup.style.display === "") ? "block" : "none";

}

function displaySavedInfo() {
    var savedInfo = JSON.parse(localStorage.getItem('bookData')) || [];
    var displayDiv = document.getElementById('displayArea');
    displayDiv.innerHTML = '';

    savedInfo.forEach(function (book) {
        var infoString = 'Title: ' + book.book +
          ', Author: ' + book.author +
          ', Page Count: ' + book.pages +
          ', Reading Status: ' + book.status + '<br>';
        displayDiv.innerHTML += infoString;
      });
    }
    function deleteEntry(index) {
        // Retrieve existing data from local storage
        var savedInfo = JSON.parse(localStorage.getItem('bookData')) || [];
    
        // Remove the entry at the specified index
        savedInfo.splice(index, 1);
    
        // Save the updated data to local storage
        localStorage.setItem('bookData', JSON.stringify(savedInfo));
    
        // Display the updated information
        displaySavedInfo();
      }