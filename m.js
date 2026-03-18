// Booking & Contact Modal
function openBooking() {
  document.getElementById("bookingModal").style.display = "flex";
}

function closeBooking() {
  document.getElementById("bookingModal").style.display = "none";
}

// Image Lightbox Dialog
function openImageModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const expandedImg = document.getElementById("expandedImg");
  
  // Set the source of the modal image to the clicked image's source
  expandedImg.src = imgElement.src;
  modal.style.display = "flex";
}

function closeImageModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Close modals when clicking outside of the content box
window.onclick = function(event) {
  const bookingModal = document.getElementById("bookingModal");
  const imageModal = document.getElementById("imageModal");
  
  if (event.target === bookingModal) {
    bookingModal.style.display = "none";
  }
  if (event.target === imageModal) {
    imageModal.style.display = "none";
  }
}
// Send Form Data to WhatsApp
function sendToWhatsApp(event) {
  // 1. Prevent the page from reloading
  event.preventDefault();

  // 2. Get the values the user typed in
  const inquiryType = document.getElementById("inquiryType").value;
  const userName = document.getElementById("userName").value;
  const userPhone = document.getElementById("userPhone").value;
  const bookingDate = document.getElementById("bookingDate").value;

  // 3. The Owner's WhatsApp Number (Include country code 91, no plus or spaces)
  const ownerNumber = "917705011220"; 

  // 4. Format the message for WhatsApp (%0A creates a new line)
  const message = `*New Booking / Inquiry - OSR*%0A%0A` +
                  `*Type:* ${inquiryType}%0A` +
                  `*Name:* ${userName}%0A` +
                  `*Phone:* ${userPhone}%0A` +
                  `*Date:* ${bookingDate}%0A%0A` +
                  `Please contact me to confirm this booking.`;

  // 5. Create the official WhatsApp API link
  const whatsappURL = `https://wa.me/${ownerNumber}?text=${message}`;

  // 6. Open WhatsApp in a new tab/app
  window.open(whatsappURL, '_blank');

  // 7. Optional: Close the form and clear the inputs after sending
  closeBooking();
  document.getElementById("bookingForm").reset();
}