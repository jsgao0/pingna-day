import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "巧主廚的隱咖喱-輔大店｜坪常日推薦",
  description: "巧主廚的隱咖喱-輔大店，位於新莊區輔大附近的隱藏版咖喱專賣店。A curry a day keeps the doctor away！",
};

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: `

  <!-- Navigation -->
  <nav class="site-nav" id="siteNav">
    <div class="nav-inner">
      <a href="https://www.pingna-day.com/zh/" class="nav-logo">
        <img src="https://www.pingna-day.com/assets/images/pingna_day_logo.png" alt="坪常日 Pingna Day" />
      </a>
      <a href="https://www.pingna-day.com/zh/" class="nav-back">
        ← <span>回到坪常日</span>
      </a>
    </div>
  </nav>

  <!-- Hero -->
  <section class="hero" id="top">
    <div class="hero-bg"></div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <div class="hero-badge">坪常日推薦 ✦ Following</div>
      <h1><em>巧主廚的隱咖喱</em><br>輔大店</h1>
      <p class="hero-tagline">"A curry a day keeps the doctor away!"</p>
      <a class="hero-cta" href="https://www.facebook.com/curry494/" target="_blank" rel="noopener noreferrer">
        造訪 Facebook 粉絲頁 →
      </a>
    </div>
    <div class="hero-scroll">
      向下探索
      <span></span>
    </div>
  </section>

  <!-- About -->
  <section class="about" id="about">
    <div class="container">
      <div class="about-grid">
        <div class="about-image reveal">
          <img src="./images/restaurant.png" alt="巧主廚的隱咖喱-輔大店 店內環境" />
        </div>
        <div class="about-text reveal reveal-delay-1">
          <span class="section-label">關於店家</span>
          <h2 class="section-title">藏身輔大旁的<br>隱藏版咖喱專賣</h2>
          <p>
            「巧主廚的隱咖喱」坐落在新莊輔大校園旁的巷弄裡，是一間以日式咖喱為基底、融合主廚獨特創意的小食堂。在這裡，每一盤咖喱都是細火慢燉、層次分明的暖心之作。
          </p>
          <p>
            店名中的「隱」字，代表著不張揚的堅持——用料實在、手工熬製，每一口都能感受到主廚對料理的溫度。學生們口耳相傳，讓這間不起眼的小店，成為輔大周邊最受歡迎的咖喱秘境。
          </p>
          <div class="info-cards">
            <div class="info-card">
              <div class="info-icon">📍</div>
              <h4>位置</h4>
              <p>新北市新莊區<br>輔大校區附近</p>
            </div>
            <div class="info-card">
              <div class="info-icon">🍛</div>
              <h4>主打</h4>
              <p>日式咖喱飯<br>創意咖喱料理</p>
            </div>
            <div class="info-card">
              <div class="info-icon">⭐</div>
              <h4>特色</h4>
              <p>手工慢燉醬汁<br>隱藏版巷弄美食</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Menu Highlights -->
  <section class="menu-section" id="menu">
    <div class="container">
      <span class="section-label reveal">推薦料理</span>
      <h2 class="section-title reveal">每一盤，都是主廚的用心</h2>
      <p class="section-desc reveal">從經典日式咖喱到創意變化款，巧主廚用在地食材與獨家配方，打造令人回味的咖喱體驗。</p>
      <div class="menu-grid">
        <div class="menu-card reveal reveal-delay-1">
          <img class="menu-card-img" src="./images/hero.png" alt="經典咖喱飯" />
          <div class="menu-card-body">
            <h3>經典咖喱飯</h3>
            <p>細火慢燉的濃郁咖喱醬汁，搭配軟嫩肉塊與新鮮蔬菜，配上一碗白飯就是最療癒的一餐。</p>
            <span class="menu-tag">招牌必點</span>
          </div>
        </div>
        <div class="menu-card reveal reveal-delay-2">
          <img class="menu-card-img" src="./images/omelette.png" alt="蛋包咖喱飯" />
          <div class="menu-card-body">
            <h3>蛋包咖喱飯</h3>
            <p>蓬鬆金黃的歐姆蛋覆蓋在飯上，淋上特製咖喱醬汁，滑嫩蛋香與濃郁咖喱的完美融合。</p>
            <span class="menu-tag">人氣推薦</span>
          </div>
        </div>
        <div class="menu-card reveal reveal-delay-3">
          <img class="menu-card-img" src="./images/restaurant.png" alt="店內用餐環境" />
          <div class="menu-card-body">
            <h3>溫馨用餐空間</h3>
            <p>木質調的小食堂風格，溫暖的燈光與香氣四溢的咖喱，讓你像回到家一樣放鬆自在。</p>
            <span class="menu-tag">氛圍滿分</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Brand Story -->
  <section class="story" id="story">
    <div class="container">
      <span class="section-label reveal">品牌精神</span>
      <h2 class="section-title reveal" style="color:#fff;">醫生怎麼說？</h2>
      <p class="section-desc reveal">
        巧主廚相信，一碗好咖喱能療癒一整天的疲憊。從挑選香料到熬煮醬汁，每個步驟都不馬虎。「隱」在巷弄裡的美味，只等懂吃的人來發掘。
      </p>
      <blockquote class="story-quote reveal">
        "A curry a day keeps the doctor away!"<br>
        <small style="font-size:16px;color:rgba(255,255,255,0.5);font-style:normal;">— 巧主廚的隱咖喱</small>
      </blockquote>
    </div>
  </section>

  <!-- Visit / Map -->
  <section class="visit" id="visit">
    <div class="container">
      <span class="section-label reveal">造訪我們</span>
      <h2 class="section-title reveal">來新莊，吃一碗好咖喱</h2>
      <div class="visit-grid" style="margin-top:32px;">
        <div class="map-placeholder reveal">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.03!2d121.4361942!3d25.0329959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7e222b00d5b%3A0xcabecdef395de05d!2z5ben5Li75bua55qE5ZKW5ZOpIOaWsOiOiiDovJTlpKfnq5k!5e0!3m2!1szh-TW!2stw!4v1700000000000!5m2!1szh-TW!2stw"
            loading="lazy" referrerpolicy="no-referrer-when-downgrade"
            title="巧主廚的隱咖喱-輔大店 地圖">
          </iframe>
        </div>
        <div class="reveal reveal-delay-1">
          <h3 style="margin-bottom:20px;">店家資訊</h3>
          <div class="visit-item">
            <span class="visit-icon">🏠</span>
            <div>
              <strong>店名</strong>
              <span>巧主廚的隱咖喱-輔大店</span>
            </div>
          </div>
          <div class="visit-item">
            <span class="visit-icon">📍</span>
            <div>
              <strong>地址</strong>
              <span>新北市新莊區（輔大附近）</span>
            </div>
          </div>
          <div class="visit-item">
            <span class="visit-icon">🍽️</span>
            <div>
              <strong>料理類型</strong>
              <span>日式咖喱・創意咖喱料理</span>
            </div>
          </div>
          <div class="visit-item">
            <span class="visit-icon">💡</span>
            <div>
              <strong>小提醒</strong>
              <span>座位有限，建議避開尖峰時段前往</span>
            </div>
          </div>
          <a class="fb-link" href="https://www.facebook.com/curry494/" target="_blank" rel="noopener noreferrer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            Facebook 粉絲專頁
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="page-footer">
    <div class="footer-links">
      <a href="https://www.pingna-day.com/zh/">坪常日首頁</a>
      <a href="https://www.facebook.com/Pingna.Day" target="_blank" rel="noopener noreferrer">Facebook</a>
      <a href="https://instagram.com/pingna.day" target="_blank" rel="noopener noreferrer">Instagram</a>
    </div>
    <p>&copy; 2026 <a href="https://www.pingna-day.com/zh/">坪常日</a>。版權所有。</p>
  </footer>

  <script>
    // Nav scroll effect
    var nav = document.getElementById('siteNav');
    window.addEventListener('scroll', function () {
      nav.classList.toggle('scrolled', window.scrollY > 40);
    });

    // Scroll reveal
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) e.target.classList.add('revealed');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(function (el) { observer.observe(el); });
  </script>
` }} />
    </>
  );
}