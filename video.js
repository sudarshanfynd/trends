<!--
  Video Gallery — Trends Saj Parbon (Webflow-ready, White BG)
-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Video Gallery | Trends Saj Parbon</title>
  <style>
    :root{
      --bg:#ffffff;
      --card:#ffffff;
      --text:#0d0d0d;
      --muted:#5a7c94;
      --ink:#111111;
      --brand: #ff4fa3;
      --radius-xl: 24px;
      --radius-2xl: 28px;
      --container: 1200px;
      --shadow: 0 16px 40px rgba(0,0,0,.08);
      --shadow-md: 0 10px 28px rgba(0,0,0,.12);
      --border:#dbe7f3;
    }
    html,body{margin:0;padding:0;background:var(--bg);font-family:ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";color:var(--text)}
    img{max-width:100%;display:block}
    .container{max-width:var(--container);margin:0 auto;padding:0 16px}
    .topbar{position:sticky;top:0;z-index:10;background:#f8f9fa;border-bottom:1px solid rgba(0,0,0,.06)}
    .topbar-inner{display:flex;align-items:center;gap:12px;padding:10px 16px;color:var(--text)}
    .brand-dot{width:8px;height:8px;border-radius:999px;background:var(--brand)}

    .page{padding:40px 0}
    .heading{display:flex;align-items:center;justify-content:center;gap:12px;margin:0 0 16px}
    .heading h1{font-size:28px;line-height:1.2;color:var(--text);margin:0}
    @media(min-width:768px){.heading h1{font-size:34px}}

    .lead{max-width:720px;margin:0 auto 24px;color:#333;text-align:center}

    .grid{display:grid;grid-template-columns:1fr;gap:24px;max-width:1040px;margin:0 auto;border:1px solid rgba(219,231,243,.8);border-top-width:2px;padding:24px;border-radius:var(--radius-2xl);background:#fafafa}
    @media(min-width:768px){.grid{grid-template-columns:repeat(2,1fr);gap:28px;padding:32px}}

    .card{background:var(--card);color:var(--ink);border-radius:var(--radius-xl);box-shadow:var(--shadow);overflow:hidden;transition:transform .12s ease, box-shadow .2s}
    .card:hover{transform:translateY(-2px);box-shadow:var(--shadow-md)}
    .card .content{padding:16px}
    .card h3{margin:0;font-size:16px;text-align:center;color:var(--text)}

    .video{position:relative;width:100%;aspect-ratio:16/9;background:#eaeaea}
    .video::before{content:"";display:block;padding-top:56.25%}
    .video iframe{position:absolute;inset:0;width:100%;height:100%;border:0}

    .icon{width:24px;height:24px;display:inline-block}
    .icon svg{width:100%;height:100%;stroke:var(--brand)}
  </style>
</head>
<body>
  <div class="topbar">
    <div class="topbar-inner container">
      <span class="brand-dot" aria-hidden></span>
      <span>Trends Saj Parbon</span>
    </div>
  </div>

  <main class="page container">
    <header class="heading" aria-label="Video Gallery heading">
      <span class="icon" aria-hidden>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M22 12v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7"/>
          <path d="M2 7h20v5H2z"/>
          <path d="M6 7l1.5-3L13 7"/>
          <path d="M7 7l1.5-3"/>
          <path d="M12 7l1.5-3"/>
        </svg>
      </span>
      <h1>Video Gallery</h1>
    </header>

    <p class="lead">Welcome to the Trends Saj Parbon video gallery! Dive into a collection of engaging videos of the campaign.</p>

    <section class="grid" aria-label="Video list">
      <article class="card" role="group" aria-labelledby="v1-title">
        <div class="video">
          <iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Trends Saj Parbon Highlights" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="content">
          <h3 id="v1-title">Trends Saj Parbon Highlights</h3>
        </div>
      </article>

      <article class="card" role="group" aria-labelledby="v2-title">
        <div class="video">
          <iframe src="https://www.youtube.com/embed/oHg5SJYRHA0" title="Durga Puja Fashion Lookbook" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="content">
          <h3 id="v2-title">Durga Puja Fashion Lookbook</h3>
        </div>
      </article>

      <article class="card" role="group" aria-labelledby="v3-title">
        <div class="video">
          <iframe src="https://www.youtube.com/embed/9bZkp7q19f0" title="Para/RWA Moments" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <div class="content">
          <h3 id="v3-title">Para/RWA Moments</h3>
        </div>
      </article>
    </section>
  </main>

  <script>
    document.title = 'Video Gallery | Trends Saj Parbon';
  </script>
</body>
</html>
