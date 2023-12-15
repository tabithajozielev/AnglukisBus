// Togle Class Active
const navbarNav = document.querySelector(".navbar .navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

// Pastikan elemen ditemukan sebelum menambahkan event listener
if (hamburger) {
  // Ketika hamburger menu diklik
  hamburger.onclick = () => {
    navbarNav.classList.toggle("navbar-active");
  };
}

// Klik di luar sidebar untuk menyembunyikan nav
document.addEventListener("click", function (e) {
  if (
    hamburger &&
    navbarNav &&
    !hamburger.contains(e.target) &&
    !navbarNav.contains(e.target)
  ) {
    navbarNav.classList.remove("navbar-active");
  }
});

// Inisialisasi peta Leaflet
function initMap() {
  var map = L.map("geo").setView([-7.7956, 110.3695], 13); // Koordinat untuk Jogja

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Daftar lokasi
  const locations = [
    { name: "Jogja National Museum", coordinates: [-7.797068, 110.370529] },
    {
      name: "Kampung Wisata Sosromenduran",
      coordinates: [-7.792190114299601, 110.36215318922402],
    },
    {
      name: "Museum Bahari",
      coordinates: [-7.801093753319892, 110.34930079536952],
    },
    {
      name: "Museum Batik Yogyakarta",
      coordinates: [-7.795631324187208, 110.3772705228209],
    },
    {
      name: "Museum Batik Keraton Yogyakarta",
      coordinates: [-7.80746074530993, 110.36455730886192],
    },
    {
      name: "Museum Benteng Vredebrug Yogyakarta",
      coordinates: [-7.800197326137424, 110.36615346653365],
    },
    {
      name: "Museum Biologi Fakultas Biologi UGM",
      coordinates: [-7.801767327248212, 110.3743755981112],
    },
    {
      name: "Museum Dewantara Kirti Griya",
      coordinates: [-7.805411903915989, 110.37842898002617],
    },
    {
      name: "Museum Kereta Kraton Yogyakarta",
      coordinates: [-7.805329856739921, 110.36262349536953],
    },
    {
      name: "Museum Kotagede Intro Living",
      coordinates: [-7.797068, 110.370529],
    },
    {
      name: "Museum Monumen Pangeran Diponegoro Sasana Wiratama",
      coordinates: [-7.7867112101600195, 110.35147419929285],
    },
    {
      name: "Museum Perjuangan Yogyakarta",
      coordinates: [-7.8165461692051315, 110.37186862597129],
    },
    {
      name: "Museum Puro Pakualaman",
      coordinates: [-7.800980642400425, 110.37615613751747],
    },
    {
      name: "Museum Sandi",
      coordinates: [-7.784512372380732, 110.37115479536926],
    },
    {
      name: "Museum Sasmitaloka Panglima Besar Sudirman",
      coordinates: [-7.802309774171074, 110.37542959536951],
    },
    {
      name: "Museum Sonobudoyo Unit I",
      coordinates: [-7.802246344652054, 110.36445859722049],
    },
    {
      name: "Museum Sonobudoyo Unit II",
      coordinates: [-7.804399615466071, 110.36612415304127],
    },
    {
      name: "Museum Pusat TNI-AD Dharma Wiratama",
      coordinates: [-7.782250231998504, 110.37539573769764],
    },
    {
      name: "Taman Budaya",
      coordinates: [-7.7999340190925945, 110.36765789536939],
    },
    {
      name: "Taman Legawong",
      coordinates: [-7.8244170310469405, 110.39369998222816],
    },
    {
      name: "Taman Pintar",
      coordinates: [-7.800628974001845, 110.36765509536951],
    },
    {
      name: "Tamansari",
      coordinates: [-7.810183204284695, 110.35887080886802],
    },
  ];

  // Tambahkan marker untuk setiap lokasi
  locations.forEach((location) => {
    L.marker(location.coordinates)
      .addTo(map)
      .bindPopup(
        `${location.name}<br><button onclick="navigateToGoogleMaps(${location.coordinates[0]}, ${location.coordinates[1]})">Menuju Lokasi</button>`
      )
      .openPopup();
  });
}

// Fungsi untuk mengarahkan ke Google Maps
function navigateToGoogleMaps(latitude, longitude) {
  window.open(
    `https://www.google.com/maps?q=${latitude},${longitude}`,
    "_blank"
  );
}

// Pastikan elemen dengan ID "geo" ditemukan sebelum memanggil initMap
const geoElement = document.getElementById("geo");
if (geoElement) {
  initMap();
}

// ... Bagian JavaScript lainnya tetap sama ...

const menuCards = document.querySelectorAll(".menu-card");

// Tambahkan event listener untuk setiap menu card
menuCards.forEach((card) => {
  card.addEventListener("click", () => {
    // Tambahkan interaksi atau tindakan yang diinginkan saat kartu diklik
    alert("Anda memilih lokasi wisata!");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  feather.replace();

  // Panggil fungsi inisialisasi peta Leaflet di sini
  initMap();

  // Kode lainnya di dalam event listener DOMContentLoaded
});

const locations = [
  "Jogja National Museum",
  "Kampung Wisata Sosromenduran",
  "Museum Bahari",
  "Museum Batik Keraton Yogyakarta",
  "Museum Batik Yogyakarta",
  "Museum Benteng Vredebrug Yogyakarta",
  "Museum Biologi Fakultas Biologi UGM",
  "Museum Dewantara Kirti Griya",
  "Museum Kereta Kraton Yogyakarta",
  "Museum Kotagede Intro Living",
  "Museum Monumen Pangeran Diponegoro Sasana Wiratama",
  "Museum Perjuangan Yogyakarta",
  "Museum Puro Pakualaman",
  "Museum Sandi",
  "Museum Sasmitaloka Panglima Besar Sudirman",
  "Museum Sonobudoyo Unit I",
  "Museum Sonobudoyo Unit II",
  "Museum Pusat TNI-AD Dharma Wiratama",
  "Taman Budaya",
  "Taman Legawong",
  "Taman Pintar",
  "Tamansari",
  // Tambahkan lokasi lainnya sesuai kebutuhan
];

document.addEventListener("DOMContentLoaded", function () {
  feather.replace();

  // ...

  const locationsList = document.getElementById("locations");
  const searchInput = document.getElementById("search-input");

  // Tambahkan opsi-opsi dari daftar lokasi wisata ke dalam datalist
  locations.forEach((location) => {
    const option = document.createElement("option");
    option.value = location;
    locationsList.appendChild(option);
  });

  // Fungsi untuk menangani pencarian
  const handleSearch = () => {
    const searchInputValue = searchInput.value.toLowerCase();
    const menuCards = document.querySelectorAll(".menu-card");

    menuCards.forEach((card) => {
      const title = card
        .querySelector(".menu-card-title")
        .textContent.toLowerCase();
      const address = card
        .querySelector(".menu-card-address")
        .textContent.toLowerCase();

      if (
        title.includes(searchInputValue) ||
        address.includes(searchInputValue)
      ) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  };

  // Tambahkan event listener untuk input pencarian
  searchInput.addEventListener("input", handleSearch);

  // Tambahkan event listener untuk datalist
  locationsList.addEventListener("input", () => {
    const selectedLocation = locationsList.value;
    const menuCards = document.querySelectorAll(".menu-card");

    menuCards.forEach((card) => {
      const title = card
        .querySelector(".menu-card-title")
        .textContent.toLowerCase();

      if (title.includes(selectedLocation.toLowerCase())) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });

  const searchButton = document.getElementById("search-button");
  searchButton.addEventListener("click", handleSearch);

  searchInput.addEventListener("input", handleSearch);
});
