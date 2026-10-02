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
          img: "https://i.pinimg.com/1200x/d8/db/84/d8db84505faf5b0515e592d5253a6738.jpg?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Kaos Polo Pria",
          harga: "Rp 2.200.000",
          satuan: "/paket",
          rating: "4.8",
          lokasi: "Jakarta",
          img: "https://i.pinimg.com/1200x/20/e5/5e/20e55e578dde7ceea39c49e06c64327c.jpg?auto=format&fit=crop&w=400&q=80",
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
          img: "https://i.pinimg.com/736x/1c/16/d4/1c16d48bf228805955e47842b8b27492.jpg?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Sweater Pria",
          harga: "Rp 3.200.000",
          satuan: "/paket",
          rating: "4.7",
          lokasi: "Bandung",
          img: "https://i.pinimg.com/1200x/bd/ec/f1/bdecf1c337c914d37e2dfc2d1719a609.jpg?auto=format&fit=crop&w=400&q=80",
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
          img: "https://i.pinimg.com/736x/01/66/7c/01667cb2b8b301793ff634764d6adf32.jpg?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Blouse Wanita",
          harga: "Rp 2.400.000",
          satuan: "/paket",
          rating: "4.7",
          lokasi: "Bandung",
          img: "https://i.pinimg.com/736x/ec/26/9e/ec269ee753e6daefe6dfba4fc12ae5d8.jpg?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Gamis Wanita",
          harga: "Rp 3.500.000",
          satuan: "/paket",
          rating: "4.8",
          lokasi: "Solo",
          img: "https://i.pinimg.com/736x/de/c6/65/dec665aced8585c3fce2f98ee1041bbb.jpg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          nama: "Kebaya Wanita",
          harga: "Rp 4.500.000",
          satuan: "/paket",
          rating: "5.0",
          lokasi: "Solo",
          img: "https://i.pinimg.com/736x/49/29/2a/49292a373ab7a99772bb41be44e1cede.jpg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          nama: "Kaos Wanita",
          harga: "Rp 1.800.000",
          satuan: "/paket",
          rating: "4.6",
          lokasi: "Bandung",
          img: "https://i.pinimg.com/1200x/2e/15/bb/2e15bbf20b802f71f19fa9946589ee36.jpg?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Rok Plisket Wanita",
          harga: "Rp 2.200.000",
          satuan: "/paket",
          rating: "4.8",
          lokasi: "Bandung",
          img: "https://i.pinimg.com/736x/87/84/9b/87849b59df1e795bc2951e00452d0e1e.jpg?auto=format&fit=crop&w=400&q=80",
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
          img: "https://i.pinimg.com/1200x/0b/19/d3/0b19d3e2498c8ded54e395492cf45b82.jpg?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Jeans Pria Regular",
          harga: "Rp 3.500.000",
          satuan: "/paket",
          rating: "4.7",
          lokasi: "Jakarta",
          img: "https://i.pinimg.com/1200x/ab/bf/af/abbfaf321d40514cbc820856d2da12ed.jpg?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Jeans Wanita Skinny",
          harga: "Rp 3.200.000",
          satuan: "/paket",
          rating: "4.8",
          lokasi: "Bandung",
          img: "https://i.pinimg.com/736x/aa/03/7d/aa037d5c88ac2792087d47ca0b1d55dc.jpg?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Jeans Wanita Boyfriend",
          harga: "Rp 3.200.000",
          satuan: "/paket",
          rating: "4.7",
          lokasi: "Bandung",
          img: "https://i.pinimg.com/736x/24/b1/f7/24b1f742e0baed108b360a5ec3fba10d.jpg?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Jeans Pria Distro",
          harga: "Rp 4.000.000",
          satuan: "/paket",
          rating: "4.9",
          lokasi: "Jakarta",
          img: "https://i.pinimg.com/1200x/f4/6b/51/f46b51217abecd60bc1fc63503cbe883.jpg?auto=format&fit=crop&w=400&q=80",
        },
        {
          nama: "Jeans Wanita High Waist",
          harga: "Rp 3.400.000",
          satuan: "/paket",
          rating: "4.8",
          lokasi: "Bandung",
          img: "https://i.pinimg.com/1200x/f6/6b/fb/f66bfb75c61e0db3eee93e7bae74ca1b.jpg?auto=format&fit=crop&w=400&q=80",
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
          img: "https://i.pinimg.com/1200x/1a/98/2e/1a982e6570ab71b563ca84c095a66608.jpg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          nama: "Batik Pria Lengan Pendek",
          harga: "Rp 4.000.000",
          satuan: "/paket",
          rating: "4.8",
          lokasi: "Yogyakarta",
          img: "https://i.pinimg.com/1200x/ff/09/86/ff0986a4de143165d8c07b99cb30eb7e.jpg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          nama: "Batik Wanita Kemeja",
          harga: "Rp 4.200.000",
          satuan: "/paket",
          rating: "4.8",
          lokasi: "Solo",
          img: "https://i.pinimg.com/736x/32/bc/b5/32bcb511be0efd2fd8a4b7fdcecf5fde.jpg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          nama: "Batik Wanita Dress",
          harga: "Rp 4.800.000",
          satuan: "/paket",
          rating: "4.9",
          lokasi: "Solo",
          img: "https://i.pinimg.com/1200x/ce/31/1a/ce311aed2846f513c58023c921a8068a.jpg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          nama: "Batik Couple",
          harga: "Rp 7.500.000",
          satuan: "/paket",
          rating: "5.0",
          lokasi: "Yogyakarta",
          img: "https://i.pinimg.com/736x/19/37/24/193724f506ad0af65bd7555ee997f4ba.jpg?auto=compress&cs=tinysrgb&w=400",
        },
        {
          nama: "Kain Batik Premium",
          harga: "Rp 5.500.000",
          satuan: "/paket",
          rating: "4.9",
          lokasi: "Solo",
          img: "https://i.pinimg.com/736x/23/67/06/2367067ac22f7c5ed543cb804f582fb3.jpg?auto=compress&cs=tinysrgb&w=400",
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
        localStorage.setItem("selected_product", card.dataset.produk);
        localStorage.setItem("selected_price", card.dataset.harga);
        // Arahkan ke halaman checkout
        window.location.href = "checkout.html";
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
