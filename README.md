const yearNode = document.querySelector(".site-footer .footer-row div:last-child");

if (yearNode) {
  const now = new Date();
  yearNode.textContent = `Built for practical agent workflows • ${now.getFullYear()}`;
}
