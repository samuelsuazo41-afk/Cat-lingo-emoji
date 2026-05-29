function generarTipGramatica(lang) {
  const tips = TIPS_CONTENT[lang] || TIPS_CONTENT['ca'];
  return tips[Math.floor(Math.random() * tips.length)];
}
