function handleDonation() {
    const input = document.getElementById("donationInput");
    const value = parseFloat(input.value);
    const progress = document.getElementById("progress-bar");
    const circle = document.getElementById("progress-circle");
    const current = document.getElementById("current-amount");
    
    if (!value || value <= 0) return;
  
    let currentValue = parseInt(current.innerText.replace(/[^0-9]/g, ""));
    currentValue += value;
    if (currentValue > 50000) currentValue = 50000;
  
    let percentage = Math.floor((currentValue / 50000) * 100);
  
    progress.style.width = percentage + "%";
    circle.innerText = percentage + "%";
    current.innerText = `$${currentValue.toLocaleString()}`;
  
    // Show popup message
    document.getElementById("thankYouPopup").style.display = "flex";
  
    input.value = "";
  }
  
  function closePopup() {
    document.getElementById("thankYouPopup").style.display = "none";
  }
  