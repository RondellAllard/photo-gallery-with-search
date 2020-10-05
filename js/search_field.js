// Capture value of input field in a variable.
// ----Convert the input value to a common case. We will use lower case.
// ----Convert the datacaption value to lower case  to be able to be compared to the input value.
// Run that value each time  through the datacaptions avialable to see which contains it.
// ----The data-caption needs to be split in to an array of words
// -------- If not of the words are found, the words need to be split into arrays and ran through the values
// ----Create an if statement that sets all picture anchor tags to display none.
// Display in real time only those images on the page that meet the search criteria

const input = document.getElementById("search"); // The input in the bar
const newParagraph = document.getElementsByClassName("magic").innerHTML;
const myAnchors = document.getElementsByTagName("a");

input.addEventListener("keyup", () => {
  for (let i = 0; i < myAnchors.length; i++) {
    let dataCaption = myAnchors[i].getAttribute("data-caption");
    let data = dataCaption.indexOf(input.value);
    if (data < 0) {
      myAnchors[i].style.display = "none";
    } else if ((data) => 0) {
      myAnchors[i].style.display = "inline-block";
    }
  }
});

// let inputCaseConvert = input.value.toLowerCase();
// let items = document.getElementById("gallery").getElementsByTagName("a"); // The anchor tage selector in the gallery
// let dataCaptionCaseConvert = items[i]["data-caption"].toLowerCase();
// let dataCapArray = dataCaptionCaseConvert.split(" "); //Converts the data-caption to an array.

// console.log(items);
