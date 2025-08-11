fetch("data/students.json")
  .then(response => response.json())
  .then(data => {
    displayStudents(data);

    const searchInput = document.getElementById("searchStudent");
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const filtered = data.filter(student =>
        student.name.toLowerCase().includes(query) ||
        student.skills.join(" ").toLowerCase().includes(query) ||
        student.interests.join(" ").toLowerCase().includes(query) ||
        student.goals.toLowerCase().includes(query)
      );
      displayStudents(filtered);
    });
  });

function displayStudents(students) {
  const list = document.getElementById("studentList");
  list.innerHTML = "";

  students.forEach(student => {
    const div = document.createElement("div");
    div.className = "student-card";
    div.innerHTML = `
      <h3>${student.name}</h3>
      <p><strong>Branch:</strong> ${student.branch}</p>
      <p><strong>Skills:</strong> ${student.skills.join(", ")}</p>
      <p><strong>Interests:</strong> ${student.interests.join(", ")}</p>
      <p><strong>Goals:</strong> ${student.goals}</p>
      <button class="connect-btn">Connect</button>
    `;
    list.appendChild(div);
  });

  document.querySelectorAll(".connect-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      alert("This is a prototype. Connect feature coming soon!");
    });
  });
}

