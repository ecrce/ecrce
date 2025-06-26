
document.addEventListener("DOMContentLoaded", function() {
    const threatList = document.getElementById("threat-list");

    fetch('https://attack.mitre.org/api.php?query=techniques')
        .then(response => response.json())
        .then(data => {
            const techniques = data.objects;
            techniques.forEach(technique => {
                const listItem = document.createElement("li");
                listItem.classList.add("threat-item");
                listItem.innerHTML = `<strong>${technique.name}</strong>: ${technique.description}`;
                threatList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error("Error fetching threat data:", error);
        });
});
