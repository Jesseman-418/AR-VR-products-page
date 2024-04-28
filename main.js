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
    {
      name: "TechVision AR Smartwatch",
      image: "images/ar_smartwatch.jpeg",
      description: "Stay connected and informed with the TechVision AR Smartwatch. This sleek smartwatch combines traditional timekeeping with advanced augmented reality features. Receive notifications, navigate your surroundings with AR maps, and track your fitness goals—all from your wrist."
    },
    {
      name: "TechVision AR Headset",
      image: "images/ar_headset.jpeg",
      description: "Take your entertainment to the next level with the TechVision AR Headset. This cutting-edge headset delivers stunning visuals and immersive audio for gaming, movies, and more. With adjustable straps and ergonomic design, it's comfortable to wear for extended periods of time."
    }
  ];
  
  const vrProducts = [
    {
      name: " VR Headset",
      image: "images/vr_headset.jpeg",
      description: "Dive into virtual worlds with the TechVision VR Headset. This high-performance headset offers lifelike graphics and responsive motion tracking for a truly immersive VR experience. Whether you're gaming or exploring virtual environments, the TechVision VR Headset delivers unmatched realism."
    },
    {
      name: " VR Gaming Chair",
      image: "images/vr_gaming_chair.png",
      description: "Enhance your gaming experience with the TechVision VR Gaming Chair. This ergonomic chair features built-in haptic feedback and integrated VR controls, allowing you to feel every movement and action in-game. Immerse yourself in virtual worlds like never before."
    },
    {
      name: " VR Motion Controller",
      image: "images/vr_motion_controller.jpeg",
      description: "Get hands-on with virtual reality using the TechVision VR Motion Controller. This intuitive controller allows for precise movement and interaction in virtual environments. With ergonomic design and tactile feedback, it provides a seamless VR experience for gamers and creators alike."
    }
  ];
});
