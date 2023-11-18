var lastData = null;

function loadMasonryData() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "./php/website-data.json", true);
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            var data = JSON.parse(this.responseText);
            createMasonryLayout(data);
        }
    };
    xhr.send();
}

function createMasonryLayout(data) {
    if (JSON.stringify(lastData) === JSON.stringify(data)) {
        return;
    }

    lastData = data;

    var container = document.getElementById("block-5");
    container.innerHTML = "";
    container.className = "masonry-container-second " + data.layoutDirection;

    data.items.forEach(function (item) {
        var div = document.createElement("div");
        div.className = "masonry-item";
        div.textContent = item.content || "Default #" + item.id;
        container.appendChild(div);
    });
}

function periodicallyUpdateData() {
    setInterval(loadMasonryData, 1000);
}

document.addEventListener("DOMContentLoaded", function () {
    loadMasonryData();
    periodicallyUpdateData();
});
