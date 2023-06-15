window.onload = function() {
    // HTML, CSS, and JavaScript editors
    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');
    const result = document.getElementById('result');
  
    // Update the preview
    function updatePreview() {
      const html = htmlCode.value;
      const css = `<style>${cssCode.value}</style>`;
      const js = `<script>${jsCode.value}</script>`;
      result.contentDocument.body.innerHTML = html + css + js;
    }
  
    // Add event listeners
    htmlCode.addEventListener('input', updatePreview);
    cssCode.addEventListener('input', updatePreview);
    jsCode.addEventListener('input', updatePreview);
  
    // Initial preview update
    updatePreview();
  };
  