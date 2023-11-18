function updateItemDetailsForm(itemsCount) {
    var itemsDetails = document.getElementById("itemsDetails");
    itemsDetails.innerHTML = "";

    for (var i = 0; i < itemsCount; i++) {
        itemsDetails.innerHTML +=
            "<div>" +
            '<input type="text" id="itemContent' +
            i +
            '" name="itemContent' +
            i +
            '" placeholder="Content #' +
            (i + 1) +
            '"></div>';
    }
}

function createMasonry() {
    var itemsCount = document.getElementById("itemsCount").value;
    var layoutDirection = document.getElementById("layoutDirection").value;
    var masonryContainer = document.getElementById("masonryContainer");
    masonryContainer.innerHTML = "";
    masonryContainer.className = "masonry-container " + layoutDirection;

    for (var i = 0; i < itemsCount; i++) {
        var itemContent =
            document.getElementById("itemContent" + i).value ||
            "Default #" + (i + 1);
        var item = document.createElement("div");
        item.classList.add("masonry-item");
        item.textContent = itemContent;
        masonryContainer.appendChild(item);
    }
}

updateItemDetailsForm(document.getElementById("itemsCount").value);
