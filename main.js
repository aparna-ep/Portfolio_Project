function submitSuggestion() {
    const suggestion = document.getElementById("userSuggestion").value;
    const response = document.getElementById("responseMessage");
    const list = document.getElementById("suggestionList");

    if (suggestion.trim() === "") {
        response.textContent = "Please enter a suggestion before submitting.";
        response.style.color = "red";
        return;
    }

    // Add suggestion to the list
    const li = document.createElement("li");
    li.textContent = suggestion;
    list.appendChild(li);

    // Clear textbox + show success message
    document.getElementById("userSuggestion").value = "";
    response.textContent = "Thank you for your suggestion!";
    response.style.color = "green";
}