document.addEventListener("DOMContentLoaded", function() {
    // Get references to the DOM elements
    const lookupButton = document.getElementById("lookup");
    const resultDiv = document.getElementById("result");
    const countryInput = document.getElementById("country");

    // Add event listener to the lookup button
    lookupButton.addEventListener("click", function() {
        // Get the country value from the input field
        const country = countryInput.value.trim();

        // If the input is empty, we will fetch data for all countries
        const url = country ? `world.php?country=${country}` : "world.php";

        // Clear previous results
        resultDiv.innerHTML = "Loading...";

        // Create a new XMLHttpRequest (AJAX) to fetch data
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);

        // Set up the onload callback to process the response
        xhr.onload = function() {
            if (xhr.status === 200) {
                // Success: Insert the response data into the result div
                resultDiv.innerHTML = xhr.responseText;
            } else {
                // Error: Display an error message
                resultDiv.innerHTML = "<p>Error fetching data. Please try again later.</p>";
            }
        };

        // Handle network errors
        xhr.onerror = function() {
            resultDiv.innerHTML = "<p>Network error. Please check your connection.</p>";
        };

        // Send the AJAX request
        xhr.send();
    });
});
