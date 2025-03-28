export const webViewScript = `
  // Disable autoplay for videos
  const videos = document.querySelectorAll('video');
  videos.forEach(video => {
      video.autoplay = false;
      video.pause();
  });
  // Disable autoplay for audios
  const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.autoplay = false;
        audio.pause();
  });

  document.addEventListener('click', function(event) {
    const { tagName, id, className, innerHTML, outerHTML } = event.target;
    const x = event.clientX;
    const y = event.clientY;
    const clickInfo = {
      tagName,
      id,
      className,
      innerHTML: innerHTML.slice(0, 200), // Limiting the size of innerHTML for efficiency
      outerHTML: outerHTML.slice(0, 200), // Limiting the size of outerHTML for efficiency
      x,
      y
    };
    window.ReactNativeWebView.postMessage(JSON.stringify(clickInfo));
  });
  `;
