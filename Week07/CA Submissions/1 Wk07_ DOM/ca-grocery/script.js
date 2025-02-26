
document.addEventListener("DOMContentLoaded", () => {
    // 1a.) Change all elements with class "hot" to "cool"
    /*const hotItems = document.querySelectorAll("li.hot");
    hotItems.forEach(item => item.className = "cool");*/

    // 1b.) Change the 3rd "hot" element to "cool" if there are at least 3
    /*const hotElements = document.getElementsByClassName("hot");
    if (hotElements.length >= 3) {
        hotElements[2].className = "cool";
    }*/

    // 1c.) Change the first "hot" element to "cool" if at least one exists
    /*const listItems = document.getElementsByTagName("li");
    for (let item of listItems) {
        if (item.className === "hot") {
            item.className = "cool";
            break;
        }
    }*/
});
//decomment to select
