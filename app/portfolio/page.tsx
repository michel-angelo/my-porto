"use client";

import Link from "next/link";
import { ViewTransition } from "react";

export default function PortfolioPage() {
  return (
    <div className="brutalist-theme">
      {/* NAV */}
      <nav className="bp-nav">
        <span className="bp-nav-left">Solo Digital Studio · Jakarta</span>
        
        {/* Clickable SSSABSTUDIO logo that morphs back to home page */}
        <Link href="/" className="no-underline">
          <ViewTransition name="branding">
            <span className="bp-nav-logo">
              SSSAB<span>STUDIO</span>
            </span>
          </ViewTransition>
        </Link>
        
        <div className="bp-nav-right">
          <a href="#karya">Karya</a>
          <a href="#proses">Proses</a>
          <a href="#kontak">Kontak</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="bp-hero">
        <div className="bp-hero-left">
          <div>
            <h2 className="bp-hero-tagline">
              Bisnis lokal,
              <em>jangkauan</em>
              nasional.
            </h2>
            <p className="bp-hero-sub">
              Kami bantu UMKM dan bisnis kecil Indonesia tampil digital — bukan sekadar punya website, tapi punya alat yang benar-benar menambah omset.
            </p>
          </div>
          <button 
            onClick={() => alert("Formulir Kontak: Terima kasih atas ketertarikan Anda! Kami akan segera menghubungi Anda.")}
            className="bp-hero-cta"
          >
            Ceritakan bisnismu →
          </button>
        </div>
        
        <div className="bp-hero-right">
          <div className="bp-hero-deco">3×</div>
          <div className="bp-hero-stats">
            <div>
              <div className="bp-hero-stat-label">Rata-rata peningkatan jangkauan klien</div>
              <div className="bp-hero-stat-val">3× lebih luas</div>
              <div className="bp-hero-stat-desc">setelah hadir secara digital dengan strategi yang tepat</div>
            </div>
            <div>
              <div className="bp-hero-stat-label">Klien aktif yang kembali untuk proyek kedua</div>
              <div className="bp-hero-stat-val">87%</div>
              <div className="bp-hero-stat-desc">karena kami treat setiap bisnis seperti bisnis sendiri</div>
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="bp-ticker">
        <div className="bp-ticker-inner">
          <span className="bp-ticker-item">Website UMKM</span><span className="bp-ticker-sep">✦</span>
          <span className="bp-ticker-item">Digitalisasi Bisnis</span><span className="bp-ticker-sep">✦</span>
          <span className="bp-ticker-item">Desain Brand</span><span className="bp-ticker-sep">✦</span>
          <span className="bp-ticker-item">Strategi Digital</span><span className="bp-ticker-sep">✦</span>
          <span className="bp-ticker-item">Toko Online</span><span className="bp-ticker-sep">✦</span>
          <span className="bp-ticker-item">Social Media Kit</span><span className="bp-ticker-sep">✦</span>
          {/* Repeated for loop duplication */}
          <span className="bp-ticker-item">Website UMKM</span><span className="bp-ticker-sep">✦</span>
          <span className="bp-ticker-item">Digitalisasi Bisnis</span><span className="bp-ticker-sep">✦</span>
          <span className="bp-ticker-item">Desain Brand</span><span className="bp-ticker-sep">✦</span>
          <span className="bp-ticker-item">Strategi Digital</span><span className="bp-ticker-sep">✦</span>
          <span className="bp-ticker-item">Toko Online</span><span className="bp-ticker-sep">✦</span>
          <span className="bp-ticker-item">Social Media Kit</span><span className="bp-ticker-sep">✦</span>
        </div>
      </div>

      {/* SECTION 01 — PAIN POINTS */}
      <section className="bp-pain-section">
        <div className="bp-pain-header">
          <div className="bp-pain-header-num">01</div>
          <div className="bp-pain-header-title">Pernah merasa ini?</div>
        </div>
        <div className="bp-pain-grid">
          <div className="bp-pain-card">
            <div className="bp-pain-q">"Produk saya bagus, tapi kok sepi pembeli?"</div>
            <div className="bp-pain-a">Terlihat dulu, baru dipercaya.</div>
            <span className="bp-pain-arrow">→</span>
          </div>
          <div className="bp-pain-card">
            <div className="bp-pain-q">"Sudah buat Instagram, tapi nggak ada yang beli."</div>
            <div className="bp-pain-a">Hadir digital butuh strategi, bukan sekadar akun.</div>
            <span className="bp-pain-arrow">→</span>
          </div>
          <div className="bp-pain-card">
            <div className="bp-pain-q">"Agensi mahal, freelancer nggak bisa diandalkan."</div>
            <div className="bp-pain-a">Ada pilihan ketiga — studio yang jujur.</div>
            <span className="bp-pain-arrow">→</span>
          </div>
        </div>
      </section>

      {/* SECTION 02 — PORTO */}
      <section id="karya" className="bp-porto-section">
        <div className="bp-porto-header">
          <div className="bp-porto-header-num">02</div>
          <div className="bp-porto-header-title">Karya terpilih</div>
          <div className="bp-porto-header-link" onClick={() => alert("Halaman galeri lengkap sedang disiapkan!")}>
            Lihat semua →
          </div>
        </div>
        <div className="bp-porto-grid">
          <div className="bp-porto-card">
            <div className="bp-porto-deco">✦</div>
            <div className="bp-porto-card-tag">Branding + Web · 2024</div>
            <div className="bp-porto-card-title">Dapur Ibu Sri<br />— dari warung ke toko online</div>
          </div>
          <div className="bp-porto-card">
            <div className="bp-porto-card-tag">E-Commerce · 2024</div>
            <div className="bp-porto-card-title">Batik Lasem Wijaya</div>
          </div>
          <div className="bp-porto-card">
            <div className="bp-porto-card-tag">Web App · 2025</div>
            <div className="bp-porto-card-title">Koperasi Digital Maju</div>
          </div>
          <div className="bp-porto-card">
            <div className="bp-porto-card-tag">Brand Identity · 2025</div>
            <div className="bp-porto-card-title">Kopi Gayo Nusantara</div>
          </div>
          <div className="bp-porto-card">
            <div className="bp-porto-card-tag">Landing Page · 2025</div>
            <div className="bp-porto-card-title">Jamu Bu Tini</div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — PROSES */}
      <section id="proses" className="bp-proses-section">
        <div className="bp-proses-header">
          <div className="bp-proses-header-num">03</div>
          <div className="bp-proses-header-title">Cara kita kerja sama</div>
        </div>
        <div className="bp-proses-grid">
          <div className="bp-proses-step">
            <div className="bp-proses-bar"></div>
            <div className="bp-proses-step-num">01</div>
            <div className="bp-proses-step-title">Kenalan dulu</div>
            <p className="bp-proses-step-desc">
              Kamu cerita soal bisnis, saya dengerin. Gratis, tanpa komitmen. Saya perlu ngerti konteksmu sebelum apapun.
            </p>
          </div>
          <div className="bp-proses-step">
            <div className="bp-proses-bar"></div>
            <div className="bp-proses-step-num">02</div>
            <div className="bp-proses-step-title">Diagnosa bareng</div>
            <p className="bp-proses-step-desc">
              Kita identifikasi titik lemah digital bisnismu — dan saya jelasin kenapa, bukan cuma "kamu butuh website".
            </p>
          </div>
          <div className="bp-proses-step">
            <div className="bp-proses-bar"></div>
            <div className="bp-proses-step-num">03</div>
            <div className="bp-proses-step-title">Eksekusi transparan</div>
            <p className="bp-proses-step-desc">
              Kamu bisa pantau progress kapanpun. Tidak ada yang terjadi di balik layar tanpa kamu tahu.
            </p>
          </div>
          <div className="bp-proses-step">
            <div className="bp-proses-bar"></div>
            <div className="bp-proses-step-num">04</div>
            <div className="bp-proses-step-title">Serah terima + ajar</div>
            <p className="bp-proses-step-desc">
              Kamu terima hasilnya dan tahu cara pakainya sendiri. Tujuanku: kamu nggak tergantung padaku.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section id="kontak" className="bp-footer-cta">
        <div>
          <h3 className="bp-footer-q">
            Siap <em>kelihatan</em> di internet?
          </h3>
          <div className="bp-footer-micro">
            Tidak ada kontrak panjang. Tidak ada biaya tersembunyi.
          </div>
        </div>
        <button 
          onClick={() => alert("Hubungi kami via WhatsApp / Email di: hello@sssabstudio.com")}
          className="bp-footer-btn"
        >
          Mulai ngobrol →
        </button>
      </section>
    </div>
  );
}
