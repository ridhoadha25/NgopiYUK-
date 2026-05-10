// ================= LOADER =================
    window.addEventListener("load", () => {
        document.getElementById("loader").style.display = "none";
    });

    // ================= TOAST =================
    function showToast(message){

        const toast = document.getElementById("toast");

        toast.innerText = message;

        toast.classList.remove("hidden");

        setTimeout(() => {
            toast.classList.add("hidden");
        }, 3000);

    }

    // ================= MOBILE MENU =================
    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden");
    });

    // ================= DARK MODE =================
    const darkBtn = document.getElementById("darkBtn");

    darkBtn.addEventListener("click", () => {

        document.body.classList.toggle("bg-gray-900");
        document.body.classList.toggle("text-white");

        document.querySelectorAll(".bg-white").forEach(card => {

            card.classList.toggle("bg-gray-800");
            card.classList.toggle("text-white");

        });

        const icon = darkBtn.querySelector("i");

        icon.classList.toggle("fa-moon");
        icon.classList.toggle("fa-sun");

    });

    // ================= SEARCH =================
    document.getElementById("searchBtn")
    .addEventListener("click", () => {

        const keyword = prompt("Cari kopi favoritmu:");

        if(keyword){
            showToast("Hasil pencarian: " + keyword);
        }

    });

    // ================= BUY BUTTON =================
    document.querySelectorAll(".buyBtn")
    .forEach(btn => {

        btn.addEventListener("click", () => {
            showToast("☕ Pesanan berhasil dibuat!");
        });

    });

    // ================= CART BUTTON =================
    document.querySelectorAll(".cartBtn")
    .forEach(btn => {

        btn.addEventListener("click", () => {
            showToast("🛒 Ditambahkan ke keranjang!");
        });

    });

    // ================= SUBSCRIBE =================
    document.getElementById("subscribeBtn")
    .addEventListener("click", () => {

        const email =
        document.getElementById("emailInput").value;

        if(email === ""){
            showToast("Masukkan email terlebih dahulu!");
        } else {
            showToast("Berhasil subscribe!");
            document.getElementById("emailInput").value = "";
        }

    });

    // ================= BACK TO TOP =================
    const topBtn = document.getElementById("topBtn");

    window.addEventListener("scroll", () => {

        if(window.scrollY > 300){
            topBtn.classList.remove("hidden");
        } else {
            topBtn.classList.add("hidden");
        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

    // ================= ACTIVE NAV =================
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop;

            if(scrollY >= sectionTop - 200){
                current = section.getAttribute("id");
            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active-nav");

            if(link.getAttribute("href").includes(current)){
                link.classList.add("active-nav");
            }

        });

    });

    // ================= FOOTER YEAR =================
    document.getElementById("year").innerText =
    new Date().getFullYear();