// js/birthday.js
document.addEventListener('DOMContentLoaded', () => {
  // 互动 1：点击爱心
  const loveBtn = document.getElementById('love-btn');
  const loveEffect = document.getElementById('love-effect');
  loveBtn.addEventListener('click', () => {
    loveEffect.classList.toggle('hidden');
    setTimeout(() => {
      loveEffect.classList.add('hidden');
    }, 2000); // 2 秒后隐藏
  });

  // 互动 2：吹蜡烛（样式需要配合 birthday.css 实现火焰熄灭动画）
  const blowBtn = document.getElementById('blow-btn');
  const candle = document.getElementById('candle');
  blowBtn.addEventListener('click', () => {
    candle.classList.add('blown'); // 触发 CSS 熄灭动画
    blowBtn.disabled = true; // 只能吹一次
    blowBtn.innerText = '蜡烛已吹～ 愿望会实现哒 ✨';
  });
});
