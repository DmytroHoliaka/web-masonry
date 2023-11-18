function collectFormData() {
    var itemsCount = document.getElementById("itemsCount").value;
    var layoutDirection = document.getElementById("layoutDirection").value;
    var itemsData = [];

    for (var i = 0; i < itemsCount; i++) {
        var content = document.getElementById("itemContent" + i).value;
        itemsData.push({ id: i, content: content });
    }

    return {
        itemsCount: itemsCount,
        layoutDirection: layoutDirection,
        items: itemsData,
    };
}

function sendDataToServer() {
    var formData = collectFormData();
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "./php/data.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            console.log("Response: " + this.responseText);
        }
    };
    xhr.send(JSON.stringify(formData));
}
