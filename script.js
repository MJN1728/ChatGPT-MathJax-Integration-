(function () {
  if (typeof MathJax === 'undefined') {
    var config = {
      extensions: ['tex2jax.js'],
      jax: ['input/TeX', 'output/HTML-CSS'],
      tex2jax: {
        inlineMath: [['$', '$'], ['\\\\(', '\\\\)']],
        displayMath: [['$$', '$$'], ['\\\\[', '\\\\]']],
        processEscapes: true
      },
      startup: {
        typeset: true
      }
    };

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js';

    script.onload = function () {
      MathJax.Hub.Config(config);
      MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
    };

    document.head.appendChild(script);
  } else {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
  }
})();
