
var disqus_config = function () {
    this.page.url = window.location.href;  // Current page URL
    this.page.identifier = document.location.pathname.split('/').pop(); // Current page's identifier
};

(function() {  // Don't forget to replace YOUR_DISQUS_SHORTNAME
    var d = document, s = d.createElement('script');
    s.src = 'https://YOUR_DISQUS_SHORTNAME.disqus.com/embed.js';  // Replace with your Disqus shortname
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();
