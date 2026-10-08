(function () {
  var S = window.SITE || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var esc = function (t) {
    return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  };

  /* ---------- mobile menu ---------- */
  var bar = $(".bar");
  var btn = $(".menu-btn");
  if (bar && btn) {
    btn.addEventListener("click", function () {
      var open = bar.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    $$(".bar nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        bar.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- accreditation button: live link, or disabled "coming soon" ---------- */
  $$("[data-accred]").forEach(function (a) {
    if (S.accreditationUrl) {
      a.href = S.accreditationUrl;
    } else {
      a.href = "#";
      a.setAttribute("aria-disabled", "true");
      a.textContent = "Accreditation: link coming soon";
    }
  });
  if (S.whatsappUrl) { $$("[data-whatsapp]").forEach(function (a) { a.href = S.whatsappUrl; }); }

  /* ---------- her photo ---------- */
  if (S.photo) {
    $$("[data-photo]").forEach(function (el) {
      var img = new Image();
      img.onload = function () {
        img.alt = el.getAttribute("data-alt") || "";
        el.classList.add("filled");
        el.innerHTML = "";
        el.appendChild(img);
      };
      img.src = S.photo;
    });
  }

  /* ---------- share on WhatsApp ---------- */
  var site = S.siteUrl || (location.protocol.indexOf("http") === 0 ? location.origin + "/" : location.href);
  var msg = "*THE SURGE is here.*\n\nOshobi Oluwajomiloju Anuoluwakitan (Jommie) for FASSA Vice President.\n\nSee the plan: " + site + "\n\nJoin the campaign group: " + (S.whatsappUrl || "") + "\n\n#Jommie4VP\n#002Agenda\n#TheVeryPassionateLeader";
  $$("[data-share]").forEach(function (a) { a.href = "https://wa.me/?text=" + encodeURIComponent(msg); });

  /* ---------- testimonials ---------- */
  var userSvg = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c1-4.5 4-6.5 8-6.5s7 2 8 6.5"/></svg>';
  function avatar(src) {
    return '<span class="av">' + userSvg + (src ? '<img src="' + esc(src) + '" alt="" onerror="this.remove()">' : "") + "</span>";
  }
  var quotes = $("#quotes");
  if (quotes) {
    var t = S.testimonials || [];
    if (t.length) {
      quotes.innerHTML = t.map(function (x) {
        return '<figure class="quote"><blockquote>' + esc(x.quote) + '</blockquote><figcaption class="who">' + avatar(x.photo) + '<div><b>' + esc(x.name) + '</b><span class="t">' + esc(x.title || "") + "</span></div></figcaption></figure>";
      }).join("");
    } else {
      quotes.innerHTML = '<div class="empty-state"><b>Testimonials coming soon.</b>They\u2019ll show up here as they come in.</div>';
    }
  }
})();
