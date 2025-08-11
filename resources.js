fetch("data/resources.json")
  .then(response => response.json())
  .then(data => {
    displayResources(data);

    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const filtered = data.filter(item =>
        item.subject.toLowerCase().includes(query) ||
        item.type.toLowerCase().includes(query) ||
        item.title.toLowerCase().includes(query)
      );

      if (filtered.length === 0) {
        document.getElementById("resourceList").innerHTML = "<p>No resources found.</p>";
      } else {
        displayResources(filtered);
      }
    });
  })
  .catch(error => {
    console.error("Error loading resources:", error);
  });

function displayResources(resources) {
  const list = document.getElementById("resourceList");
  list.innerHTML = "";

  resources.forEach(item => {
    const div = document.createElement("div");
    div.className = "resource-item";
    div.innerHTML = `
      <h3>${item.title}</h3>
      <p><strong>Subject:</strong> ${item.subject}</p>
      <p><strong>Type:</strong> ${item.type}</p>
      <a href="${item.file}" target="_blank">Download/View</a>
    `;
    list.appendChild(div);
  });
}
