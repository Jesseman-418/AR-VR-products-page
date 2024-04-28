document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".product-tabs li");

  tabs.forEach(tab => {
    tab.addEventListener("click", function() {
      const tabId = this.getAttribute("data-tab");
      const activeTab = document.querySelector(".product-grid.active");
      const newActiveTab = document.getElementById(tabId);

      // Remove active class from all tabs and product grids
      tabs.forEach(tab => tab.classList.remove("active"));
      document.querySelectorAll(".product-grid").forEach(grid => grid.classList.remove("active"));

      // Add active class to the clicked tab and its corresponding product grid
      this.classList.add("active");
      newActiveTab.classList.add("active");

      // Load products dynamically when the tab is clicked
      if (tabId === "ar-products") {
        loadProducts(tabId, arProducts);
      } else if (tabId === "vr-products") {
        loadProducts(tabId, vrProducts);
      }
    });
  });

  // Function to load products dynamically (simulated)
  function loadProducts(tabId, products) {
    const productGrid = document.getElementById(tabId);

    // Clear existing products in all product grids
    document.querySelectorAll(".product-grid").forEach(grid => grid.innerHTML = "");

    // Loop through products and create cards
    products.forEach(product => {
      const card = document.createElement("div");
      card.classList.add("product-card");

      const image = document.createElement("img");
      image.src = product.image;
      image.alt = product.name;
      card.appendChild(image);

      const name = document.createElement("h3");
      name.textContent = product.name;
      card.appendChild(name);

      const description = document.createElement("p");
      description.textContent = product.description;
      card.appendChild(description);

      productGrid.appendChild(card);
    });
  }

  const arProducts = [
    {
      name: "TechVision AR Glasses",
      image: "images/ar_glasses.jpeg",
      description: "Experience immersive augmented reality with the TechVision AR Glasses. These lightweight glasses offer crystal-clear visuals and spatial audio for an unparalleled AR experience. With built-in sensors and gesture recognition, interacting with virtual objects feels natural and intuitive."
    },
    // ... other AR products
  ];

  const vrProducts = [
    {
      name: "VR Headset",
      image: "images/vr_headset.jpeg",
      description: "Dive into virtual worlds with the TechVision VR Headset. This high-performance headset offers lifelike graphics and responsive motion tracking for a truly immersive VR experience. Whether you're gaming or exploring virtual environments, the TechVision VR Headset delivers unmatched realism."
    },
    // ... other VR products
  ];

  // Voice Recognition for Commands
  if (window.SpeechRecognition || window.webkitSpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US'; // Change language as needed

    // Start recognition on button click (can be expanded to other triggers)
    document.getElementById('learnMoreARButton').addEventListener('click', () => {
      recognition.start();
    });
    document.getElementById('exploreVRButton').addEventListener('click', () => {
      recognition.start();
    });

    recognition.onresult = (event) => {
      const command = event.results[0][0].transcript.toLowerCase();
      // Add multiple commands here for different functionalities
      if (command.includes('learn more about ar')) {
        window.location.href = "About-AR.html";
      } else if (command.includes('explore vr products')) {
        document.querySelector('.product-tabs li:last-child').click();
      } else if (command.includes('download ar app')) {
        document.querySelector('.download_app').click();
      } else if (command.includes('play video')) {
        const videoElement = document.getElementById('youTubeVideoId');
        videoElement.play();
      } else if (command.includes('pause video')) {
        const videoElement = document.getElementById('youTubeVideoId');
        videoElement.pause();
      } 
      // Add more commands for other buttons and functionalities as needed
    };
  }
});
