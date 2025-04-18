// Goal details for each card
const goalDetails = {
    "REDUCE ACID RAIN": "Acid rain harms forests and lakes. This goal aims to reduce sulfur and nitrogen emissions.",
    "SAVE ENVIRONMENT": "Promote recycling, reduce deforestation, and protect biodiversity worldwide.",
    "STOP POLLUTION": "Work on cutting plastic use, reducing waste, and improving clean air standards.",
    "GLOBAL WARMING": "Combat climate change by cutting greenhouse gases and promoting clean energy."
  };
  
  // Select all plus buttons
  const plusButtons = document.querySelectorAll(".plus");
  
  // Create a modal element
  let modal = document.createElement("div");
  modal.className = "goal-modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <h3 id="goal-title"></h3>
      <p id="goal-desc"></p>
    </div>
  `;
  document.body.appendChild(modal);
  
  // Handle click on each plus button
  plusButtons.forEach(button => {
    button.addEventListener("click", () => {
      const title = button.parentElement.querySelector("h3").textContent;
      document.getElementById("goal-title").textContent = title;
      document.getElementById("goal-desc").textContent = goalDetails[title] || "More info coming soon...";
      modal.style.display = "block";
    });
  });
  
  // Handle closing the modal
  modal.querySelector(".close").onclick = () => modal.style.display = "none";
  window.onclick = (e) => {
    if (e.target === modal) modal.style.display = "none";
  };
  