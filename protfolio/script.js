function openNewPage() {
    let name = document.getElementById("name").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value
    let text = document.getElementById("text").value
    let userInfo = {
        name: name,
        lastName: lastName,
        email: email,
        text: text
    };

    if (name.length < 1 || lastName.length < 1 || email.indexOf("@") === -1 || text.length <= 0) {
        alert("Please fill in the details")
    } else {
        let arrInfo = JSON.parse(sessionStorage.getItem("Info")) || [];
        arrInfo.push(userInfo);
        sessionStorage.setItem("Info", JSON.stringify(arrInfo));

        window.open("thankyoupage.html", "_blank");
    }
    sessionStorage.removeItem("Info")
}