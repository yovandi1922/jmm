/* =========================================================
   Jenira Grosir Mode — script.js
   Grosir Baju Pria, Wanita, Jeans & Batik
   ========================================================= */

const WA_NUMBER = "6289681827536";
const STORE = "Jenira Grosir Mode";

/* ---------- DATA PRODUK ---------- */
const PRODUCTS = {
  "baju-pria": {
    label: "Baju Pria",
    badge: "01",
    desc: "Grosir baju pria berkualitas — kemeja, kaos, polo, sweater, dan lainnya. Harga khusus untuk reseller, toko, dan konveksi.",
    subgroups: {
      "Kemeja & Kaos Pria": [
        {
          nama: "Kemeja Formal Pria",
          harga: "Rp 2.500.000",
          satuan: "/paket",
          rating: "4.8",
          lokasi: "Bandung",
          img: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Kemeja Flanel Pria",
          harga: "Rp 2.800.000",
          satuan: "/paket",
          rating: "4.7",
          lokasi: "Bandung",
          img: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Kaos Polo Pria",
          harga: "Rp 2.200.000",
          satuan: "/paket",
          rating: "4.8",
          lokasi: "Jakarta",
          img: "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Kaos Oblong Pria",
          harga: "Rp 1.800.000",
          satuan: "/paket",
          rating: "4.6",
          lokasi: "Bandung",
          img: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Kemeja Denim Pria",
          harga: "Rp 3.000.000",
          satuan: "/paket",
          rating: "4.9",
          lokasi: "Jakarta",
          img: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Sweater Pria",
          harga: "Rp 3.200.000",
          satuan: "/paket",
          rating: "4.7",
          lokasi: "Bandung",
          img: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
  },
  "baju-wanita": {
    label: "Baju Wanita",
    badge: "02",
    desc: "Grosir baju wanita berkualitas — dress, blouse, gamis, kebaya, dan lainnya. Model terkini, bahan adem.",
    subgroups: {
      "Dress & Blouse": [
        {
          nama: "Dress Midi Wanita",
          harga: "Rp 2.800.000",
          satuan: "/paket",
          rating: "4.9",
          lokasi: "Bandung",
          img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Blouse Wanita",
          harga: "Rp 2.400.000",
          satuan: "/paket",
          rating: "4.7",
          lokasi: "Bandung",
          img: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Gamis Wanita",
          harga: "Rp 3.500.000",
          satuan: "/paket",
          rating: "4.8",
          lokasi: "Solo",
          img: "https://images.pexels.com/photos/7679444/pexels-photo-7679444.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          nama: "Kebaya Wanita",
          harga: "Rp 4.500.000",
          satuan: "/paket",
          rating: "5.0",
          lokasi: "Solo",
          img: "https://images.pexels.com/photos/32394195/pexels-photo-32394195.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          nama: "Kaos Wanita",
          harga: "Rp 1.800.000",
          satuan: "/paket",
          rating: "4.6",
          lokasi: "Bandung",
          img: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Rok Plisket Wanita",
          harga: "Rp 2.200.000",
          satuan: "/paket",
          rating: "4.8",
          lokasi: "Bandung",
          img: "https://images.unsplash.com/photo-1583496661160-fb5886a13d44?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
  },
  jeans: {
    label: "Celana Jeans",
    badge: "03",
    desc: "Grosir celana jeans pria & wanita — slim fit, regular, skinny, boyfriend, high waist. Bahan tebal, tidak mudah pudar.",
    subgroups: {
      "Jeans Pria & Wanita": [
        {
          nama: "Jeans Pria Slim Fit",
          harga: "Rp 3.500.000",
          satuan: "/paket",
          rating: "4.8",
          lokasi: "Jakarta",
          img: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Jeans Pria Regular",
          harga: "Rp 3.500.000",
          satuan: "/paket",
          rating: "4.7",
          lokasi: "Jakarta",
          img: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Jeans Wanita Skinny",
          harga: "Rp 3.200.000",
          satuan: "/paket",
          rating: "4.8",
          lokasi: "Bandung",
          img: "https://images.unsplash.com/photo-1604176354204-9268737828e4?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Jeans Wanita Boyfriend",
          harga: "Rp 3.200.000",
          satuan: "/paket",
          rating: "4.7",
          lokasi: "Bandung",
          img: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Jeans Pria Distro",
          harga: "Rp 4.000.000",
          satuan: "/paket",
          rating: "4.9",
          lokasi: "Jakarta",
          img: "https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Jeans Wanita High Waist",
          harga: "Rp 3.400.000",
          satuan: "/paket",
          rating: "4.8",
          lokasi: "Bandung",
          img: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=400&q=80",
        },
      ],
    },
  },
  batik: {
    label: "Batik",
    badge: "04",
    desc: "Grosir batik pria, wanita, couple, dan kain batik premium. Motif halus, bahan nyaman, cocok untuk seragam dan koleksi.",
    subgroups: {
      "Batik Pria & Wanita": [
        {
          nama: "Batik Pria Lengan Panjang",
          harga: "Rp 4.500.000",
          satuan: "/paket",
          rating: "4.9",
          lokasi: "Yogyakarta",
          img: "https://images.pexels.com/photos/30506062/pexels-photo-30506062.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          nama: "Batik Pria Lengan Pendek",
          harga: "Rp 4.000.000",
          satuan: "/paket",
          rating: "4.8",
          lokasi: "Yogyakarta",
          img: "https://images.pexels.com/photos/6046186/pexels-photo-6046186.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          nama: "Batik Wanita Kemeja",
          harga: "Rp 4.200.000",
          satuan: "/paket",
          rating: "4.8",
          lokasi: "Solo",
          img: "https://images.pexels.com/photos/6286834/pexels-photo-6286834.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          nama: "Batik Wanita Dress",
          harga: "Rp 4.800.000",
          satuan: "/paket",
          rating: "4.9",
          lokasi: "Solo",
          img: "https://images.pexels.com/photos/4937224/pexels-photo-4937224.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          nama: "Batik Couple",
          harga: "Rp 7.500.000",
          satuan: "/paket",
          rating: "5.0",
          lokasi: "Yogyakarta",
          img: "https://images.pexels.com/photos/30506062/pexels-photo-30506062.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          nama: "Kain Batik Premium",
          harga: "Rp 5.500.000",
          satuan: "/paket",
          rating: "4.9",
          lokasi: "Solo",
          img: "https://images.pexels.com/photos/6046186/pexels-photo-6046186.jpeg?auto=compress&cs=tinysrgb&w=400",
        },
      ],
    },
  },
};

/* ---------- HELPER ---------- */
function openWA(pesan) {
  window.open(
    `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(pesan)}`,
    "_blank",
    "noopener",
  );
}

function pesanProduk(produk, harga) {
  return `Halo ${STORE},\n\nSaya mau beli produk berikut:\n\nProduk: ${produk}\nHarga: ${harga}\n\nMohon info stok, cara pesan, dan estimasi kirim.\nTerima kasih.`;
}

function scrollToHash(offset = 130) {
  const hash = window.location.hash.replace("#", "");
  if (!hash) return;
  const el = document.getElementById(hash);
  if (!el) return;
  setTimeout(() => {
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: "smooth" });
  }, 120);
}

function highlightCard(card) {
  const top =
    card.getBoundingClientRect().top +
    window.pageYOffset -
    window.innerHeight / 2 +
    80;
  window.scrollTo({ top, behavior: "smooth" });
  card.classList.add("highlight");
  setTimeout(() => card.classList.remove("highlight"), 3200);
}

/* ---------- KARTU PRODUK ---------- */
function cardHTML(p, kategoriLabel) {
  return `
    <div class="product-card" data-produk="${p.nama}" data-harga="${p.harga} ${p.satuan}">
      <div class="p-img">
        <img src="${p.img}" alt="${p.nama}" loading="lazy" />
      </div>
      <div class="p-body">
        <div class="p-cat">${kategoriLabel}</div>
        <h4>${p.nama}</h4>
        <div class="p-price">${p.harga}<small>${p.satuan}</small></div>
        <div class="p-meta">
          <span class="p-rating">
            <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            ${p.rating}
          </span>
          <span class="p-loc">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            ${p.lokasi}
          </span>
        </div>
      </div>
    </div>`;
}

/* ---------- RENDER KATALOG ---------- */
function renderCatalog() {
  const wrap = document.getElementById("catalog");
  if (!wrap) return;
  let html = "";
  Object.keys(PRODUCTS).forEach((key) => {
    const cat = PRODUCTS[key];
    html += `<section class="cat-section" id="${key}">
      <div class="cat-section-head">
        <h2>${cat.label} <span class="cat-badge">${cat.badge}</span></h2>
        <p>${cat.desc}</p>
      </div>`;

    Object.keys(cat.subgroups).forEach((subName) => {
      html += `<h3 class="subgroup-head">${subName}</h3>`;
      html += `<div class="product-grid">`;
      cat.subgroups[subName].forEach((p) => {
        html += cardHTML(p, subName);
      });
      html += `</div>`;
    });

    html += `</section>`;
  });
  wrap.innerHTML = html;
}

/* ---------- STICKY TABS ---------- */
function initTabs() {
  const tabs = Array.from(document.querySelectorAll(".tab-btn"));
  if (!tabs.length) return;
  const sections = tabs
    .map((t) => document.getElementById(t.dataset.target))
    .filter(Boolean);

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const el = document.getElementById(tab.dataset.target);
      if (!el) return;
      const top = el.getBoundingClientRect().top + window.pageYOffset - 130;
      window.scrollTo({ top, behavior: "smooth" });
      history.replaceState(null, "", `#${tab.dataset.target}`);
    });
  });

  function update() {
    const scrollY = window.pageYOffset + 180;
    let current = sections[0]?.id;
    sections.forEach((sec) => {
      if (sec.offsetTop <= scrollY) current = sec.id;
    });
    tabs.forEach((t) =>
      t.classList.toggle("active", t.dataset.target === current),
    );
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

/* ---------- PENCARIAN ---------- */
function cariKatalog(e) {
  if (e) e.preventDefault();
  const input = document.getElementById("searchInput");
  if (!input) return;
  const q = input.value.trim().toLowerCase();
  if (!q) return;
  const cards = Array.from(document.querySelectorAll(".product-card"));
  const match = cards.find((c) =>
    c.querySelector("h4").textContent.toLowerCase().includes(q),
  );
  if (!match) {
    alert("Produk tidak ditemukan. Coba kata kunci lain.");
    return;
  }
  highlightCard(match);
}

function cariDariHome(e) {
  e.preventDefault();
  const input = document.getElementById("searchInput");
  if (!input) return;
  const q = input.value.trim();
  if (!q) return;
  window.location.href = `katalog.html?q=${encodeURIComponent(q)}`;
}

/* ---------- FORM KONTAK ---------- */
function kirimKontak(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const pesan = document.getElementById("pesan").value.trim();
  if (!nama || !pesan) return;
  openWA(`Halo ${STORE},\n\nNama: ${nama}\n\n${pesan}`);
}

/* ---------- NAV + WA FLOAT ---------- */
function initNav() {
  const ham = document.getElementById("hamburger");
  const mm = document.getElementById("mobileMenu");
  if (ham && mm) {
    ham.addEventListener("click", () => mm.classList.toggle("open"));
    mm.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => mm.classList.remove("open")),
    );
  }
}

function initWAFloat(msg) {
  const wf = document.getElementById("waFloat");
  if (!wf) return;
  const text =
    msg ||
    `Halo ${STORE}, saya mau tanya-tanya soal produk grosir baju yang tersedia.`;
  wf.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
  wf.target = "_blank";
  wf.rel = "noopener";
}

/* ---------- INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  initNav();
  initWAFloat();

  const contactForm = document.getElementById("contactForm");
  const searchForm = document.getElementById("searchForm");
  const catalog = document.getElementById("catalog");

  if (contactForm) contactForm.addEventListener("submit", kirimKontak);

  if (searchForm && !catalog) {
    searchForm.addEventListener("submit", cariDariHome);
  }

  if (catalog) {
    renderCatalog();
    initTabs();
    scrollToHash(130);
    searchForm?.addEventListener("submit", cariKatalog);

    // MODIFIKASI: Klik produk mengarah ke halaman Checkout
    document.addEventListener("click", (e) => {
      const card = e.target.closest(".product-card");
      if (card) {
        // Simpan produk yang dipilih ke localStorage untuk simulasi
        localStorage.setItem('selected_product', card.dataset.produk);
        localStorage.setItem('selected_price', card.dataset.harga);
        // Arahkan ke halaman checkout
        window.location.href = 'checkout.html';
      }
    });

    const params = new URLSearchParams(window.location.search);
    const qParam = params.get("q");
    if (qParam && searchForm) {
      document.getElementById("searchInput").value = qParam;
      setTimeout(() => cariKatalog(null), 400);
    }

    const ctaWa = document.getElementById("ctaWa");
    if (ctaWa) {
      ctaWa.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
        `Halo ${STORE}, saya mau tanya soal produk grosir baju yang tidak ada di katalog.`,
      )}`;
      ctaWa.target = "_blank";
      ctaWa.rel = "noopener";
    }
  }
});