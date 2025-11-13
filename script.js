document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
});

document.getElementById("countrySelect").addEventListener("change", function () {
  const value = this.value;
  const recommendationDiv = document.getElementById("recommendation");

  if (value === "india") {
    recommendationDiv.innerHTML = `
      <h3>India – Explore Jaipur, the Pink City</h3>
      <p>Discover vibrant culture, royal palaces, and colorful markets in Jaipur.</p>
      <img src="images/jaipur1.jpg" alt="Jaipur City Palace">
      <img src="images/jaipur2.jpg" alt="Hawa Mahal">
    `;
  } else if (value === "japan") {
    recommendationDiv.innerHTML = `
      <h3>Japan – Visit Kyoto’s Ancient Temples</h3>
      <p>Immerse yourself in Japan’s serene temples and cherry blossom gardens.</p>
      <img src="images/kyoto1.jpg" alt="Kiyomizu-dera Temple">
      <img src="images/kyoto2.jpg" alt="Fushimi Inari Shrine">
    `;
  } else if (value === "france") {
    recommendationDiv.innerHTML = `
      <h3>France – Enjoy the Charm of Paris</h3>
      <p>From the Eiffel Tower to cozy cafés, Paris is perfect for art and romance lovers.</p>
      <img src="images/paris1.jpg" alt="Eiffel Tower">
      <img src="images/paris2.jpg" alt="Louvre Museum">
    `;
  } else {
    recommendationDiv.innerHTML = "";
  }
});
