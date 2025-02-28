// Generate Ramadan table
function generateRamadanTable() {
  const tableBody = document.getElementById('ramadanTableBody');
  const prayerTimes = {
    fajr: "4:30 AM",
    dhuhr: "1:00 PM",
    asr: "4:30 PM",
    maghrib: "7:15 PM",
    isha: "8:45 PM",
    taraweeh: "9:00 PM",
  };

  for (let day = 1; day <= 30; day++) {
    const isJumah = day % 7 === 5; // Fridays are every 7 days (e.g., Day 5, 12, 19, 26)
    const row = document.createElement('tr');
    if (isJumah) {
      row.classList.add('juma');
    }

    row.innerHTML = `
      <td class="px-6 py-4 border-b border-gray-200">Day ${day}${isJumah ? " (Jumah)" : ""}</td>
      <td class="px-6 py-4 border-b border-gray-200">${prayerTimes.fajr}</td>
      <td class="px-6 py-4 border-b border-gray-200">${prayerTimes.dhuhr}</td>
      <td class="px-6 py-4 border-b border-gray-200">${prayerTimes.asr}</td>
      <td class="px-6 py-4 border-b border-gray-200">${prayerTimes.maghrib}</td>
      <td class="px-6 py-4 border-b border-gray-200">${prayerTimes.isha}</td>
      <td class="px-6 py-4 border-b border-gray-200">${prayerTimes.taraweeh}</td>
    `;

    tableBody.appendChild(row);
  }
}

// Generate the table when the page loads
generateRamadanTable();