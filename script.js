* {
  box-sizing: border-box;
}

:root {
  --bg: #08111f;
  --bg-soft: #101b2d;
  --panel: #0f1b2b;
  --panel-strong: #122440;
  --card: rgba(15, 27, 43, 0.9);
  --card-border: rgba(142, 170, 255, 0.2);
  --text: #edf3ff;
  --muted: #b3c6eb;
  --primary: #7cc6ff;
  --secondary: #8af0d0;
  --accent: #d2a8ff;
  --shadow: rgba(4, 10, 20, 0.48);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background:
    radial-gradient(circle at top, rgba(124, 198, 255, 0.14), transparent 28%),
    linear-gradient(180deg, #07101c 0%, #0a1422 100%);
  color: var(--text);
  line-height: 1.6;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(16px);
  background: rgba(8, 17, 31, 0.7);
  border-bottom: 1px solid rgba(157, 182, 255, 0.12);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 72px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: #0a1422;
  font-size: 0.8rem;
  font-weight: 800;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 20px;
  color: var(--muted);
  font-size: 0.96rem;
}

.main-nav a:hover {
  color: var(--text);
}

.hero {
  padding: 88px 0 52px;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.5fr 0.9fr;
  gap: 32px;
  align-items: center;
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--secondary);
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;
}

h1 {
  margin: 0;
  font-size: clamp(2.6rem, 5vw, 4.4rem);
  line-height: 1.05;
  letter-spacing: -0.06em;
}

.hero-copy {
  max-width: 620px;
  margin: 18px 0 0;
  font-size: 1.08rem;
  color: var(--muted);
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  margin-top: 28px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: 0 18px;
  border-radius: 12px;
  border: 1px solid transparent;
  font-weight: 700;
  transition: transform 0.2s ease, border-color 0.2s ease;
}

.button:hover {
  transform: translateY(-1px);
}

.button.primary {
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  color: #061422;
}

.button.secondary {
  border-color: rgba(124, 198, 255, 0.3);
  background: rgba(15, 27, 43, 0.55);
  color: var(--text);
}

.hero-pills {
  list-style: none;
  padding: 0;
  margin: 26px 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero-pills li {
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(124, 198, 255, 0.08);
  border: 1px solid rgba(124, 198, 255, 0.18);
  color: var(--muted);
  font-size: 0.88rem;
}

.panel {
  background: rgba(10, 18, 31, 0.9);
  border: 1px solid var(--card-border);
  border-radius: 22px;
  box-shadow: 0 18px 36px var(--shadow);
}

.spotlight {
  padding: 24px 22px;
}

.spotlight h2 {
  margin: 0 0 12px;
  font-size: 1.35rem;
}

.spotlight p {
  margin: 0;
  color: var(--muted);
}

.mini-list {
  margin-top: 24px;
  display: grid;
  gap: 12px;
}

.mini-list div {
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 12px 14px;
  border-radius: 14px;
  background: rgba(124, 198, 255, 0.05);
  border: 1px solid rgba(124, 198, 255, 0.08);
}

.mini-list strong {
  display: inline-flex;
  width: 22px;
  height: 22px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(124, 198, 255, 0.12);
  color: var(--primary);
}

.stats {
  padding: 0 0 30px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.stat {
  padding: 26px 18px;
  border-radius: 18px;
  background: rgba(13, 24, 39, 0.78);
  border: 1px solid var(--card-border);
  text-align: center;
}

.stat strong {
  display: block;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: 8px;
}

.stat span {
  color: var(--muted);
}

.section {
  padding: 82px 0;
}

.section-heading {
  margin-bottom: 28px;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.6rem);
  letter-spacing: -0.05em;
}

.dark-section {
  background: rgba(9, 18, 29, 0.7);
  border-top: 1px solid rgba(124, 198, 255, 0.08);
  border-bottom: 1px solid rgba(124, 198, 255, 0.08);
}

.grid.three {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}

.card, .module-card, .prompt-item {
  border-radius: 18px;
  background: rgba(12, 22, 36, 0.85);
  border: 1px solid var(--card-border);
  padding: 24px 20px;
  box-shadow: 0 18px 32px rgba(2, 6, 12, 0.28);
}

.card h3, .module-card h3, .prompt-item h3 {
  margin-top: 0;
  margin-bottom: 12px;
}

pre {
  margin: 0;
  overflow-x: auto;
  background: rgba(8, 15, 25, 0.82);
  border: 1px solid rgba(124, 198, 255, 0.12);
  border-radius: 14px;
  padding: 16px;
  color: var(--secondary);
  font-size: 0.87rem;
}

.two-col {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 22px;
}

.mt-4 {
  margin-top: 22px;
}

.panel h3 {
  margin: 0 0 18px;
  padding: 22px 22px 0;
  font-size: 1.3rem;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.92rem;
}

th, td {
  text-align: left;
  vertical-align: top;
  padding: 12px 22px;
  border-top: 1px solid rgba(124, 198, 255, 0.08);
}

th {
  width: 42%;
  color: var(--primary);
  font-weight: 700;
}

td {
  color: var(--muted);
}

.module-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
}

.module-card {
  position: relative;
  overflow: hidden;
}

.module-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: rgba(140, 170, 255, 0.12);
  color: var(--primary);
  font-weight: 800;
}

.module-card p {
  margin: 0;
  color: var(--muted);
}

.prompt-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.prompt-item p {
  margin: 0;
  color: var(--muted);
}

.site-footer {
  padding: 28px 0 50px;
  border-top: 1px solid rgba(124, 198, 255, 0.08);
}

.footer-row {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  color: var(--muted);
  font-size: 0.94rem;
}

@media (max-width: 900px) {
  .hero-grid,
  .two-col,
  .module-grid,
  .grid.three,
  .prompt-list,
  .stats-grid {
    grid-template-columns: 1fr;
  }

  .main-nav {
    display: none;
  }

  .hero {
    padding-top: 68px;
  }

  .footer-row {
    flex-direction: column;
  }
}
