import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "坪常日｜台灣氣泡茶代表品牌",
  description: "坪常日｜源自新北坪林的氣泡茶品牌。包種氣泡茶與橘香氣泡茶，堅持傳統、持續創新。",
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `
  <!-- Floating Bubbles -->
  <div class="bubbles-container" aria-hidden="true" id="bubbles"></div>

  <!-- Header -->
  <header id="site-header">
    <nav class="container">
      <div class="logo">
        <a href="#hero"><img src="https://www.pingna-day.com/assets/images/pingna_day_logo.png" alt="坪常日 Pingna Day" /></a>
      </div>
      <button class="nav-toggle" aria-label="選單" id="navToggle">
        <span></span><span></span><span></span>
      </button>
      <ul class="nav-links" id="navLinks">
        <li><a href="#sparkling">氣泡茶</a></li>
        <li><a href="#story">品牌故事</a></li>
        <li><a href="#products">更多產品</a></li>
        <li><a href="#contact">聯絡我們</a></li>
        <li><a href="../en/" class="lang-switch">EN</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <!-- Hero -->
    <section id="hero" class="hero">
      <div class="hero-content">
        <h1>
          <span class="hero-brand">坪常日</span>
          <span class="hero-tagline" style="color: #00747a; font-weight: 700; margin-top: 8px;">榮登 2025 APEC Korea
            台灣館指定贊助</span>
        </h1>
        <p class="hero-subtitle" style="font-size: 1.5rem; color: #333; margin-top: 10px;">台灣茶香，閃耀國際舞台</p>
      </div>
      <div class="hero-campaign-image">
        <img src="https://www.pingna-day.com/campaigns/2025-apec-korea/images/000_picture_with_banner.jpg" alt="2025 APEC Korea 現場" />
      </div>
      <div class="hero-buttons">
        <a href="/zh/campaigns/2025-apec-korea" class="btn-primary" style="background: #00747a;">觀看 APEC 現場直擊</a>
        <a href="#sparkling" class="btn-primary btn-outline">探索氣泡茶</a>
      </div>
      <div class="scroll-indicator">
        <span>向下探索</span>
        <div class="scroll-arrow"></div>
      </div>
    </section>

    <!-- Star Products: Sparkling Tea -->
    <section id="sparkling" class="sparkling-section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">明星產品</span>
          <h2>坪常日氣泡茶</h2>
          <p>無糖 · 無酒精 · 真茶氣泡</p>
        </div>
        <div class="sparkling-grid">
          <!-- 包種氣泡茶 -->
          <div class="sparkling-card reveal reveal-delay-1">
            <div class="sparkling-card-image">
              <img src="https://www.pingna-day.com/assets/images/sparkling_paochong_tea.png" alt="包種氣泡茶" />
            </div>
            <div class="sparkling-card-content">
              <h3>包種氣泡茶</h3>
              <p>
                文山包種茶以輕發酵、無薰花式製程聞名，帶有花香、水色蜜綠顯黃。我們將文山包種茶與氣泡水結合，創新口感、獨特風味，無論日常或派對，都是您最佳的飲品選擇。
              </p>
              <div class="product-tags">
                <span>花香</span><span>蜜綠</span><span>無糖</span><span>無酒精</span>
              </div>
              <div class="purchase-links">
                <a class="btn-purchase" href="https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=14813200"
                  target="_blank" rel="noopener noreferrer">
                  momo購物網
                </a>
                <a class="btn-purchase-alt" href="https://www.wonderfulfood.com.tw/Product/UFJEMDIxOTEwMDAwNA%3D%3D"
                  target="_blank" rel="noopener noreferrer">
                  台灣好農
                </a>
              </div>
            </div>
          </div>
          <!-- 橘香氣泡茶 -->
          <div class="sparkling-card sparkling-card-orange reveal reveal-delay-2">
            <div class="sparkling-card-image">
              <img src="https://www.pingna-day.com/assets/images/sparkling_orange_scented_tea.png" alt="橘香氣泡茶" />
            </div>
            <div class="sparkling-card-content">
              <h3>橘香氣泡茶</h3>
              <p>
                結合新北坪林在地柑橘的產業脈絡，透過柑橘自帶酸甜與氣泡弱酸性的結合，讓飲品層次感提升。兼顧在地性與消費需求，讓您猶如置身坪林宇宙中享受繽紛。
              </p>
              <div class="product-tags">
                <span>柑橘</span><span>酸甜</span><span>氣泡</span><span>在地</span>
              </div>
              <div class="purchase-links">
                <a class="btn-purchase" href="https://www.momoshop.com.tw/goods/GoodsDetail.jsp?i_code=14813200"
                  target="_blank" rel="noopener noreferrer">
                  momo購物網
                </a>
                <a class="btn-purchase-alt" href="https://www.wonderfulfood.com.tw/Product/UFJEMDIxOTEwMDAwNQ%3D%3D"
                  target="_blank" rel="noopener noreferrer">
                  台灣好農
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Brand Story -->
    <section id="story" class="story-section">
      <div class="container">
        <div class="story-grid">
          <div class="story-image reveal">
            <img src="https://www.pingna-day.com/assets/images/pingna_day_home_1.jpg" alt="坪林茶園" />
          </div>
          <div class="story-content reveal reveal-delay-1">
            <span class="section-label section-label-light">品牌故事</span>
            <h2>有了風土，才是坪常日</h2>
            <p>
              兩百多年前，一群來自福建安溪的茶農及製茶師傅來到了大文山、落腳在坪林。傳承自祖輩的製茶技術，加上坪林得天獨厚的氣候與地理環境，讓這裡的「好茶」名揚四海。
            </p>
            <p>
              散村聚落的坪林，家庭即是製茶廠，大多茶農也是茶師。「堅持傳統、持續創新」，我們將坪林的在地風土帶給大家，來坪林走走，帶給大家我們所期待的「坪常日」。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Other Products -->
    <section id="products" class="products-section">
      <div class="container">
        <div class="section-header reveal">
          <span class="section-label">更多坪常日</span>
          <h2>探索更多產品</h2>
        </div>
        <div class="products-grid">
          <!-- 包種茶 -->
          <div class="product-card reveal reveal-delay-1">
            <div class="product-card-image">
              <img class="lightbox-trigger"
                data-gallery="../assets/images/paochong_tea_bag.jpg,../assets/images/paochong_tea_with_tree.jpg,../assets/images/paochong_tea_with_cup.jpg"
                src="https://www.pingna-day.com/assets/images/paochong_tea_bag.jpg" alt="坪林文山包種茶" />
            </div>
            <div class="product-card-content">
              <h3>坪林文山包種茶</h3>
              <p>
                外觀呈墨綠條索狀、香氣高雅似花香、滋味甘醇鮮活，水色呈蜜綠顯黃。以茉莉花、蘭花、梔子花等白色花香皆是常見的類型。
              </p>
              <div class="purchase-links">
                <a class="btn-purchase-alt" href="https://www.wonderfulfood.com.tw/Product/UFJEMDIxOTEwMDAwMg%3D%3D"
                  target="_blank" rel="noopener noreferrer">
                  台灣好農
                </a>
              </div>
            </div>
          </div>
          <!-- 蜜香紅茶 -->
          <div class="product-card reveal reveal-delay-2">
            <div class="product-card-image">
              <img class="lightbox-trigger"
                data-gallery="../assets/images/honey_black_tea_bag.jpg,../assets/images/honey_black_tea_with_tree.jpg,../assets/images/honey_black_tea_with_cup.jpg"
                src="https://www.pingna-day.com/assets/images/honey_black_tea_bag.jpg" alt="坪林蜜香紅茶" />
            </div>
            <div class="product-card-content">
              <h3>坪林蜜香紅茶</h3>
              <p>
                坪林春夏之交、小綠葉蟬著蜒後的天然香氣茶菁。攪拌與發酵的雙重作用，讓花、果蜜同時存在於茶湯中，蜜甜香氣馥郁。
              </p>
              <div class="purchase-links">
                <a class="btn-purchase-alt" href="https://www.wonderfulfood.com.tw/Product/UFJEMDIxOTEwMDAwMw%3D%3D"
                  target="_blank" rel="noopener noreferrer">
                  台灣好農
                </a>
              </div>
            </div>
          </div>
          <!-- 茶糖 -->
          <div class="product-card reveal reveal-delay-3">
            <div class="product-card-image">
              <img class="lightbox-trigger"
                data-gallery="../assets/images/paochong_tea_candy.png,../assets/images/paochong_tea_candy_with_powder.jpg"
                src="https://www.pingna-day.com/assets/images/paochong_tea_candy.png" alt="坪林文山包種茶糖" />
            </div>
            <div class="product-card-content">
              <h3>坪林文山包種茶糖</h3>
              <p>
                以文山包種茶為基底，研磨茶粉搭配天然蔗糖。保留茶韻，增添入口即化的甘潤滋味，口感清爽不膩，適合作為伴手禮。
              </p>
              <div class="purchase-links">
                <a class="btn-purchase-alt" href="https://www.wonderfulfood.com.tw/Product/UFJEMDIxOTEwMDAwOA%3D%3D"
                  target="_blank" rel="noopener noreferrer">
                  台灣好農
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section id="contact" class="contact-section">
      <div class="container reveal">
        <h2>聯絡我們</h2>
        <p>
          想要問任何問題，歡迎聯繫我們！
        </p>
        <form action="https://formspree.io/f/mzdwbqjg" method="POST" class="contact-form" style="max-width: 500px; margin: 0 auto; display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
          <input type="text" name="name" placeholder="您的姓名" required style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
          <input type="email" name="email" placeholder="您的 Email" required style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;" />
          <textarea name="message" placeholder="您的訊息" required rows="4" style="padding: 10px; border: 1px solid #ccc; border-radius: 4px;"></textarea>
          <button type="submit" class="btn-primary" style="background: #00747a; color: #fff; padding: 10px; border: none; border-radius: 4px; cursor: pointer; font-size: 1rem;">送出</button>
        </form>
      </div>
    </section>
  </main>

  <!-- Footer Image -->
  <img src="https://www.pingna-day.com/assets/images/pingna_day_home_2.jpg" alt="坪林溪流" style="width:100%;display:block;" />

  <footer>
    <div class="footer-social">
      <a target="_blank" href="https://www.facebook.com/Pingna.Day" rel="noopener noreferrer">Facebook</a>
      <a target="_blank" href="https://instagram.com/pingna.day" rel="noopener noreferrer">Instagram</a>
      <a target="_blank" href="https://www.threads.com/@pingna.day" rel="noopener noreferrer">Threads</a>
    </div>
    <p class="footer-copy">&copy; 2026 坪常日。版權所有。</p>
  </footer>


  <!-- Lightbox DOM -->
  <div id="lightbox" class="lightbox">
    <button id="lightboxClose" class="lightbox-close">&times;</button>
    <button id="lightboxPrev" class="lightbox-btn lightbox-prev">&#10094;</button>
    <div class="lightbox-content">
      <img id="lightboxImg" src="" alt="Gallery Image" />
    </div>
    <button id="lightboxNext" class="lightbox-btn lightbox-next">&#10095;</button>
  </div>

  <script>
    // Mobile nav toggle
    document.getElementById('navToggle').addEventListener('click', function () {
      document.getElementById('navLinks').classList.toggle('open');
    });
    document.querySelectorAll('.nav-links a').forEach(function (link) {
      link.addEventListener('click', function () {
        document.getElementById('navLinks').classList.remove('open');
      });
    });

    // Header scroll effect
    var header = document.getElementById('site-header');
    window.addEventListener('scroll', function () {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });

    // Scroll reveal
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(function (el) {
      revealObserver.observe(el);
    });

    // Generate floating bubbles
    (function () {
      var container = document.getElementById('bubbles');
      var count = 18;
      for (var i = 0; i < count; i++) {
        var bubble = document.createElement('div');
        bubble.className = 'bubble';
        var size = Math.random() * 20 + 6;
        var left = Math.random() * 100;
        var duration = Math.random() * 12 + 10;
        var delay = Math.random() * 15;
        var drift = (Math.random() - 0.5) * 80;
        bubble.style.cssText =
          'width:' + size + 'px;height:' + size + 'px;' +
          'left:' + left + '%;' +
          'animation-duration:' + duration + 's;' +
          'animation-delay:' + delay + 's;' +
          '--drift:' + drift + 'px;';
        container.appendChild(bubble);
      }
    })();

    // Lightbox Logic
    (function () {
      var lightbox = document.getElementById("lightbox");
      var lightboxImg = document.getElementById("lightboxImg");
      var btnPrev = document.getElementById("lightboxPrev");
      var btnNext = document.getElementById("lightboxNext");
      var currentGallery = [];
      var currentIndex = 0;

      function openLightbox(galleryStr, index) {
        if (!galleryStr) return;
        currentGallery = galleryStr.split(",");
        currentIndex = index || 0;
        updateImage();
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden"; // prevent background scrolling
      }

      function closeLightbox() {
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
      }

      function updateImage() {
        if (currentGallery.length === 0) return;
        lightboxImg.style.opacity = 0;
        setTimeout(function () {
          lightboxImg.src = currentGallery[currentIndex];
          lightboxImg.style.opacity = 1;
        }, 200);

        btnPrev.style.display = currentGallery.length > 1 ? "flex" : "none";
        btnNext.style.display = currentGallery.length > 1 ? "flex" : "none";
      }

      function nextImage(e) {
        if (e) e.stopPropagation();
        if (currentGallery.length <= 1) return;
        currentIndex = (currentIndex + 1) % currentGallery.length;
        updateImage();
      }

      function prevImage(e) {
        if (e) e.stopPropagation();
        if (currentGallery.length <= 1) return;
        currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
        updateImage();
      }

      document.querySelectorAll(".lightbox-trigger").forEach(function (el) {
        el.addEventListener("click", function () {
          openLightbox(this.getAttribute("data-gallery"), 0);
        });
      });

      document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
      lightbox.addEventListener("click", function (e) {
        if (e.target === lightbox || e.target.classList.contains("lightbox-content")) {
          closeLightbox();
        }
      });

      btnNext.addEventListener("click", nextImage);
      btnPrev.addEventListener("click", prevImage);

      document.addEventListener("keydown", function (e) {
        if (!lightbox.classList.contains("active")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
      });
    })();

  </script>
` }} />
    </>
  );
}