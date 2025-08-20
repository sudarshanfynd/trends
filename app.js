<!--
  Trends Saj Parbon — Contest Registration (Webflow-ready)
  How to use in Webflow:
  1) Add an Embed component and paste this entire code block.
  2) Upload your assets to Webflow and replace the placeholder image URLs below.
  3) Optionally move the <style> contents into your Site settings → Custom Code → Head for reuse.
  4) Keep one <section id="participate"> on the page so the in-page link works.
-->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Trends Saj Parbon — Contest Registration</title>
  <style>
    :root{
      --bg: #091825;
      --card: #ffffff;
      --text: #0d3b5a;
      --text-2:#00355a;
      --muted:#5a7c94;
      --brand:#ff4fa3; /* pink-500-ish */
      --brand-300:#ffb9e3;
      --border:#dbe7f3;
      --shadow: 0 20px 60px rgba(0,0,0,.12);
      --shadow-md: 0 12px 28px rgba(0,0,0,.25);
      --radius-xl: 28px;
      --radius-lg: 20px;
      --radius-md: 16px;
      --container: 1200px;
    }
    html,body{margin:0;padding:0;background:var(--bg);font-family:ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji";color:#fbfcfc}
    img{max-width:100%;display:block}
    .container{max-width:var(--container);margin:0 auto;padding:0 16px}
    .bg-hero{background: radial-gradient(1200px 600px at 50% -200px, rgba(255,79,163,.25), transparent 70%), linear-gradient(180deg, #0c2133 0%, #06121d 60%, #06121d 100%)}
    .shadow-elevated{box-shadow: var(--shadow-md)}
    .rounded-xl{border-radius: var(--radius-lg)}
    .rounded-2xl{border-radius: var(--radius-xl)}
    .rounded-3xl{border-radius: 32px}
    .shadow-brand{box-shadow: 0 24px 60px rgba(255,79,163,.35)}
    .text-center{text-align:center}
    .hidden{display:none}
    .mt-0{margin-top:0}
    .mt-4{margin-top:1rem}
    .mt-6{margin-top:1.5rem}
    .mt-8{margin-top:2rem}
    .mt-12{margin-top:3rem}
    .mt-16{margin-top:4rem}
    .mb-6{margin-bottom:1.5rem}
    .mb-8{margin-bottom:2rem}
    .mx-auto{margin-left:auto;margin-right:auto}
    .py-12{padding-top:3rem;padding-bottom:3rem}
    .py-20{padding-top:5rem;padding-bottom:5rem}
    .px-4{padding-left:1rem;padding-right:1rem}
    .h-40{height:10rem}

    /* Responsive grid used in the hero gallery */
    .hero-grid{display:grid;grid-template-columns:1fr;gap:24px;align-items:flex-start}
    @media (min-width: 768px){
      .hidden-md{display:none}
      .hero-grid{grid-template-columns:repeat(3,1fr);gap:40px;max-width:960px}
      .md-block{display:block}
      .md-flex{display:flex}
      .md-grid{display:grid}
      .md-mt-20{margin-top:5rem}
    }

    /* Headline row (Puja x New Arrivals graphics) */
    .headline-row{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:16px}
    @media (min-width:640px){.headline-row{gap:24px}}
    @media (min-width:768px){.headline-row{gap:48px}}

    /* Participate card */
    #participate{scroll-margin-top:88px}
    .participate-wrap{position:relative;top:-144px}
    @media (min-width:768px){.participate-wrap{top:-64px}}
    .card{background:var(--card);color:var(--text);border-radius:var(--radius-xl);box-shadow:var(--shadow)}
    .card-inner{padding:24px}
    @media (min-width:768px){.card-inner{padding:40px}}
    .divider{height:1px;background:#e2e8f0;margin:24px auto;max-width:640px;position:relative;display:flex;align-items:center;gap:16px;color:#94a3b8}
    .pill-btn{display:inline-flex;align-items:center;justify-content:center;height:48px;padding:0 24px;border-radius:999px;background:var(--brand);color:#fff;font-weight:600;text-decoration:none;box-shadow:0 6px 16px rgba(255,79,163,.35);transition:transform .12s ease, opacity .2s}
    .pill-btn:hover{transform:translateY(-1px);opacity:.95}

    /* FAQ */
    .faq{border:1px solid var(--brand-300);background:#0b1b2a;box-shadow:var(--shadow);color:#dce7f3}
    .faq .rule{height:3px;background:var(--brand-300);margin:20px 0}
    details.faq-item{border-bottom:1px solid #e2e8f0}
    details.faq-item[open]{background:rgba(255,79,163,.06)}
    .faq-summary{list-style:none;cursor:pointer;display:flex;gap:16px;align-items:flex-start;padding:16px 0}
    .faq-summary::-webkit-details-marker{display:none}
    .faq-q{color:#d1e4f3;font-weight:600}
    .faq-a{color:#9fb5c6;margin-top:6px}
    .faq-toggle{margin-left:auto;display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:999px;border:1px solid var(--brand-300);color:var(--brand)}

    /* Terms */
    .terms{border:1px solid var(--border);background:#fff;color:var(--text);box-shadow:0 12px 40px rgba(0,0,0,.08);border-radius:var(--radius-xl)}
    .terms .rule{height:3px;background:var(--brand-300);margin:20px 16px;border-radius:999px}
    .terms ol{counter-reset:item; padding-left:24px}
    .terms li{counter-increment:item;display:flex;gap:10px;margin:16px 0;color:var(--text-2)}
    .terms li::before{content: counter(item) ".";font-weight:600;color:var(--text-2)}

    /* Helpers */
    .center{display:flex;align-items:center;justify-content:center}
    .grid-2{display:grid;grid-template-columns:1fr;gap:24px}
    @media (min-width:768px){.grid-2{grid-template-columns:repeat(2,1fr);gap:40px}}
    .muted{color:#64748b}
    .caption{font-size:14px}
    .lead{font-size:18px;line-height:1.6}
    .h2{font-size:28px;color:var(--text-2);letter-spacing:.2px}
    @media (min-width:768px){.h2{font-size:40px}}

    /* Utility for the mid banner (f5) */
    .banner{border-radius:var(--radius-xl);box-shadow:var(--shadow-md);object-fit:cover;width:100%;height:160px}
    @media (min-width:768px){.banner{height:260px;width:640px}}
  </style>
</head>
<body>
  <!-- HERO -->
  <section class="bg-hero">
    <div class="container px-4 py-12 md:py-20">
      <!-- Desktop layout: left/right image stacks with centered badge -->
      <div class="hero-grid mx-auto">
        <!-- Left column -->
        <div style="display:flex;flex-direction:column;gap:24px">
          <img src="https://placehold.co/800x600/jpg" alt="Festive fashion 1" class="rounded-2xl shadow-elevated" style="object-fit:cover;width:100%;height:220px"/>
          <img src="https://placehold.co/800x600/jpg" alt="Festive fashion 2" class="rounded-2xl shadow-elevated" style="object-fit:cover;width:100%;height:220px"/>
        </div>

        <!-- Center column: badge and video preview -->
        <div style="display:flex;flex-direction:column;align-items:center">
          <div class="shadow-elevated shadow-brand" style="position:relative;top:-176px;background:#fff;border-bottom-left-radius:var(--radius-xl);border-bottom-right-radius:var(--radius-xl);padding:16px;display:flex;justify-content:center">
            <img src="https://placehold.co/640x640/png?text=Festival+Badge" alt="Trends Saj Parbon festival badge" style="width:320px;border-radius:24px"/>
          </div>
          <div class="hidden-md center" style="margin-top:-128px">
            <img src="https://placehold.co/1280x520/jpg?text=Gallery+Preview" alt="Video gallery preview" class="banner"/>
          </div>
        </div>

        <!-- Right column -->
        <div style="display:flex;flex-direction:column;gap:24px">
          <img src="https://placehold.co/800x600/jpg" alt="Festive fashion 4" class="rounded-2xl shadow-elevated" style="object-fit:cover;width:100%;height:220px"/>
          <img src="https://placehold.co/800x600/jpg" alt="Festive fashion 5" class="rounded-2xl shadow-elevated" style="object-fit:cover;width:100%;height:220px"/>
        </div>
      </div>

      <!-- Mobile: badge + simple 2-col gallery -->
      <div class="md-block" style="display:none"></div>
      <div class="md-hidden" style="margin-top:-112px">
        <div class="center">
          <img src="https://placehold.co/480x480/png?text=Festival+Badge" alt="Trends Saj Parbon festival badge" class="shadow-brand" style="width:224px;border-bottom-left-radius:var(--radius-xl);border-bottom-right-radius:var(--radius-xl);position:relative;z-index:5"/>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:32px">
          <img src="https://placehold.co/800x600/jpg" alt="Festive fashion 1" class="rounded-xl shadow-elevated" style="object-fit:cover;width:100%;height:144px"/>
          <img src="https://placehold.co/800x600/jpg" alt="Festive fashion 2" class="rounded-xl shadow-elevated" style="object-fit:cover;width:100%;height:144px"/>
          <img src="https://placehold.co/800x600/jpg" alt="Festive fashion 3" class="rounded-xl shadow-elevated" style="object-fit:cover;width:100%;height:144px"/>
          <img src="https://placehold.co/800x600/jpg" alt="Festive fashion 4" class="rounded-xl shadow-elevated" style="object-fit:cover;width:100%;height:144px"/>
        </div>
        <div class="center">
          <img src="https://placehold.co/1280x520/jpg?text=Gallery+Preview" alt="Video gallery preview" class="banner" style="margin-top:20px"/>
        </div>
      </div>

      <!-- Headline + stickers row -->
      <div class="mt-16 md-mt-20" style="margin-top:64px">
        <div class="headline-row">
          <img src="https://placehold.co/600x160/png?text=Puja" alt="Puja" style="width:min(400px, 80vw);height:auto"/>
          <div class="hidden-md" style="width:1px;height:40px;background:rgba(255,255,255,.5)"></div>
          <img src="https://placehold.co/600x160/png?text=New+Arrivals" alt="New Arrival" style="width:min(400px, 80vw);height:auto"/>
        </div>
      </div>

      <p id="participate" class="lead" style="margin:24px auto 0;max-width:720px;text-align:center;color:#fbfcfc">
        Celebrate the vibrant spirit of Durga Puja and dive into the festive fervor of Bengal's most awaited festival. Participate in the “Trends Saj Parbon” contest as a Para/RWA or as an individual and stand a chance to win exciting prizes. Let's make this Puja memorable with Trends.
      </p>
    </div>
    <div class="h-40"></div>
  </section>

  <!-- PARTICIPATE -->
  <section class="container participate-wrap" aria-labelledby="participate-heading">
    <div class="card">
      <div class="card-inner">
        <h2 id="participate-heading" class="h2 center" style="gap:8px;color:var(--text-2);margin:0 0 16px">
          <span aria-hidden style="font-size:24px">🖐</span>
          <span>Participate in the Contest!</span>
        </h2>
        <div class="center" style="height:1px;background:var(--brand-300);max-width:800px;margin:0 auto 32px"></div>

        <div class="grid-2">
          <!-- Individual -->
          <div class="text-center">
            <div class="center" style="gap:8px;margin-bottom:8px">
              <svg aria-hidden width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="color:var(--text)">
                <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" stroke-width="1.7"/>
                <path d="M4 20a8 8 0 0 1 16 0" stroke="currentColor" stroke-width="1.7"/>
              </svg>
              <span style="color:#d9467a;font-weight:600">Individual</span>
            </div>
            <p class="muted" style="max-width:520px;margin:0 auto">
              Be the trendsetter this Durga Puja with Trends! Register yourself now for the Trends Saj Parbon Contest and stand a chance to win exciting prizes.
            </p>
            <div class="mt-4">
              <a href="/register/individual" class="pill-btn">Register Now</a>
            </div>
          </div>

          <!-- Para/RWA -->
          <div class="text-center">
            <div class="center" style="gap:8px;margin-bottom:8px">
              <svg aria-hidden width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="color:var(--text)">
                <path d="M7 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" stroke-width="1.7"/>
                <path d="M17 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" stroke="currentColor" stroke-width="1.7"/>
                <path d="M1.5 19a6.5 6.5 0 0 1 11-4.2M22.5 19a6.5 6.5 0 0 0-11-4.2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>
              </svg>
              <span style="color:#d9467a;font-weight:600">Para/RWA</span>
            </div>
            <p class="muted" style="max-width:520px;margin:0 auto">
              Bring your Para/ RWA into the spotlight with Trends! Register your Para/ RWA for the Trends Saj Parbon Contest and stand a chance to win exciting prizes.
            </p>
            <div class="mt-4">
              <a href="/register/para-rwa" class="pill-btn">Register Now</a>
            </div>
          </div>
        </div>

        <div class="divider">
          <div style="flex:1;height:1px;background:#e2e8f0"></div>
          <span>OR</span>
          <div style="flex:1;height:1px;background:#e2e8f0"></div>
        </div>

        <div class="center caption" style="gap:12px;color:var(--text)">
          <span class="center" style="width:36px;height:36px;border-radius:8px;overflow:hidden">
            <img src="https://assets-global.website-files.com/5d3f1a9b5b7e79a94c0f93c9/6463e7b2f6e5e6f3afb7a3b3_whatsapp.png" alt="WhatsApp"/>
          </span>
          <span class="lead" style="color:var(--text)">Participate as an Individual through WhatsApp <a href="https://wa.me/919830098300" target="_blank" rel="noopener" style="font-weight:600;color:var(--text-2);text-decoration:underline">+91 9830098300</a></span>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ -->
  <section id="faq" class="container" style="margin-top:-80px">
    <div class="faq rounded-3xl">
      <div class="card-inner">
        <div class="center" style="gap:8px">
          <img src="https://placehold.co/64x64/png?text=?" alt="FAQ" style="width:32px;height:32px"/>
          <span class="h2" style="margin-bottom:8px;color:var(--text-2)">Frequently Asked Questions</span>
        </div>
        <div class="rule"></div>

        <ol style="list-style:decimal; padding-left:24px">
          <!-- FAQ Item template: Use <details> for native disclosure + small JS to allow only one open at a time -->
          <li>
            <details class="faq-item" open>
              <summary class="faq-summary">
                <div style="flex:1">
                  <p class="faq-q">How do I participate?</p>
                  <p class="faq-a">Register via the Individual or Para/RWA buttons above, or use the WhatsApp number provided to submit your entry.</p>
                </div>
                <span class="faq-toggle">+</span>
              </summary>
            </details>
          </li>
          <li>
            <details class="faq-item">
              <summary class="faq-summary">
                <div style="flex:1">
                  <p class="faq-q">Is there any participation fee?</p>
                  <p class="faq-a">No, participation is free. Terms &amp; Conditions apply.</p>
                </div>
                <span class="faq-toggle">+</span>
              </summary>
            </details>
          </li>
          <li>
            <details class="faq-item">
              <summary class="faq-summary">
                <div style="flex:1">
                  <p class="faq-q">Can I submit multiple looks?</p>
                  <p class="faq-a">Yes, submit looks as per the daily theme during the contest period.</p>
                </div>
                <span class="faq-toggle">+</span>
              </summary>
            </details>
          </li>
          <li>
            <details class="faq-item">
              <summary class="faq-summary">
                <div style="flex:1">
                  <p class="faq-q">How will winners be notified?</p>
                  <p class="faq-a">Winners will be contacted on their registered details and announced on official channels.</p>
                </div>
                <span class="faq-toggle">+</span>
              </summary>
            </details>
          </li>
          <li>
            <details class="faq-item">
              <summary class="faq-summary">
                <div style="flex:1">
                  <p class="faq-q">Who can participate?</p>
                  <p class="faq-a">Residents of West Bengal are eligible for the 5 days, 5 looks contest. See Terms for specifics.</p>
                </div>
                <span class="faq-toggle">+</span>
              </summary>
            </details>
          </li>
        </ol>
      </div>
    </div>
  </section>

  <!-- TERMS -->
  <section id="terms" class="container" style="margin:64px auto 80px">
    <div class="terms">
      <div class="card-inner">
        <div class="center" style="gap:8px">
          <img src="https://placehold.co/64x64/png?text=T" alt="Terms icon" style="width:32px;height:32px"/>
          <span class="h2" style="margin-bottom:8px">Terms &amp; Conditions</span>
        </div>
        <div class="rule"></div>
        <ol>
          <li>Individuals residing in West Bengal can also participate in the 5 days, 5 looks contest till 2nd October 2025 midnight.</li>
          <li>To participate, WhatsApp photos showcasing the theme of the day's look, along with your name and location, at <strong>+91 9831403334</strong>. (Eg. Image1, Sasthi Look, Shreya Mukherjee, Asansol).</li>
          <li>Entries shall, in the sole opinion of Trends and ABP or their representatives, be creative and unique. Judges' decisions are final and binding.</li>
          <li>After submission, the content and photograph(s) become the sole and exclusive property of Trends and ABP and may be used in promotions across any media without notice or consideration.</li>
          <li>Trends and ABP reserve the right to cancel/terminate/suspend the contest at any time without prior notice.</li>
          <li>No cash payment will be made in lieu of gift vouchers/prizes.</li>
          <li>Trends and ABP reserve the right to disqualify/cancel participation at their sole discretion without citing any reason.</li>
          <li>Participation does not assure receipt of a gift voucher.</li>
          <li>These terms are subject to change without prior notice. By participating, you consent to the terms and are responsible for any violations.</li>
          <li>All disputes are subject to jurisdiction of Court of Kolkata.</li>
        </ol>
      </div>
    </div>
  </section>

  <script>
    // Optional: ensure only one FAQ detail is open at a time & update the plus/minus icon
    document.querySelectorAll('details.faq-item').forEach(function(d){
      d.addEventListener('toggle', function(){
        if (d.open) {
          document.querySelectorAll('details.faq-item').forEach(function(other){
            if (other!==d) other.removeAttribute('open');
          });
        }
        document.querySelectorAll('details.faq-item').forEach(function(item){
          var icon = item.querySelector('.faq-toggle');
          if(icon) icon.textContent = item.open ? '−' : '+';
        });
      });
    });

    // If this is embedded inside Webflow (single page app not required), the title tag is enough.
    // Smooth scroll (if needed) for internal links to #participate
    document.querySelectorAll('a[href^="#"]').forEach(function(a){
      a.addEventListener('click', function(e){
        var target = document.querySelector(a.getAttribute('href'));
        if(target){
          e.preventDefault();
          target.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });
  </script>
</body>
</html>
