let header = document.querySelector(`#page-header`) //selects page-header id in div tag
header.style.textAlign = "left" //sets the text alignment in that selector

let dogImages = document.querySelectorAll(`.dog-image`) //selects the dog-image class in all img tags
for (let i = 0; i < dogImages.length; i++) {  //sets function to go through each image for dogs on next line
    dogImages[i].style.borderRadius = `50px`
}
// Select some elements...