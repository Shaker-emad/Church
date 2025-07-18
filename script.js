let patriarchs = [];
let currentIndex = 0;

async function loadData() {
  const res = await fetch("data.json");
  patriarchs = await res.json();
  showPatriarch(currentIndex);
}

function showPatriarch(index) {
  const p = patriarchs[index];
  const card = document.getElementById("patriarch-card");
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}" class="patriarch-img"/>
    <h2>${p.name}</h2>
    <p><strong>رقم:</strong> ${p.order}</p>
    <p><strong>السنوات:</strong> ${p.patriarchate_years}</p>
    <p><strong>الكنيسة:</strong> ${p.church}</p>
    <p class="summary">${p.summary}</p>
    <h3>مواقفه الدفاعية:</h3>
    <ul>
      ${p.defensive_positions.map(pos => `<li>${pos}</li>`).join("")}
    </ul>
  `;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  if (currentIndex < patriarchs.length - 1) {
    currentIndex++;
    showPatriarch(currentIndex);
  }
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    showPatriarch(currentIndex);
  }
});

loadData();
