(function () {
  var navHtml = [
    "<center>",
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
