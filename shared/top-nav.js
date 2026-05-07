(function () {
  var LOGO_URL = "https://storage.pindah.org/IMAGES/pindah_logo_webp.webp";
  var navHtml = [
    "<center>",
    '  <a href="/index.html">',
    '    <img src="' + LOGO_URL + '" alt="Pindah Private Limited" style="height:80px;width:auto;display:inline-block;margin:8px 0;" />',
    "  </a>",
    "  <h2>Pindah Private Limited</h2>",
    "  <p>",
    "    Harare, Zimbabwe<br />",
    "    +263 774 454 447<br />",
    '    <a href="mailto:admin@pindah.org">admin@pindah.org</a>',
    "  </p>",
    "  <p>",
    "    <a href=\"/index.html\">Home</a> |",
    "    <a href=\"/about.html\">About Pindah</a> |",
    "    <a href=\"/products/pindah-erp.html\">Products</a> |",
    "    <a href=\"/industries/education.html\">Industries</a> |",
    "    <a href=\"/insights.html\">Insights</a> |",
    "    <a href=\"/resources.html\">Resources</a> |",
    "    <a href=\"/contact.html\">Contact</a>",
    "  </p>",
    "  <hr />",
    "</center>"
  ].join("");

  var mount = document.getElementById("top-nav");
  if (mount) {
    mount.innerHTML = navHtml;
  }
})();
