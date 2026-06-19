// public/site-helper.js
// Lightweight helper for generating prompt cards, keyword badges, and usage tips

(function () {
  'use strict';

  const CONFIG = {
    siteUrl: 'https://official-i-game.com.cn',
    keyword: '爱游戏',
    defaultLang: 'zh-CN'
  };

  const STYLES = {
    cardClass: 'prompt-card',
    badgeClass: 'keyword-badge',
    tipClass: 'access-tip'
  };

  const COLORS = ['#ff6b6b', '#48dbfb', '#ff9f43', '#a29bfe', '#fd79a8', '#00cec9'];

  function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  function createCard(title, description) {
    const card = document.createElement('div');
    card.className = STYLES.cardClass;
    card.style.cssText = 'border:1px solid #e0e0e0;border-radius:8px;padding:12px;margin:8px 0;background:#f9f9f9;';
    const titleEl = document.createElement('h3');
    titleEl.textContent = title;
    titleEl.style.margin = '0 0 6px 0';
    const descEl = document.createElement('p');
    descEl.textContent = description;
    descEl.style.margin = '0';
    card.appendChild(titleEl);
    card.appendChild(descEl);
    return card;
  }

  function createBadge(text) {
    const badge = document.createElement('span');
    badge.className = STYLES.badgeClass;
    const bgColor = getRandomColor();
    badge.style.cssText = `display:inline-block;padding:4px 10px;margin:4px;border-radius:16px;background:${bgColor};color:#fff;font-size:12px;font-weight:bold;`;
    badge.textContent = text;
    return badge;
  }

  function createTip(message) {
    const tip = document.createElement('div');
    tip.className = STYLES.tipClass;
    tip.style.cssText = 'background:#fff3cd;border:1px solid #ffeeba;border-radius:6px;padding:8px 12px;margin:10px 0;color:#856404;font-size:14px;';
    tip.textContent = message;
    return tip;
  }

  function generateExampleCards() {
    const cardsData = [
      { title: '游戏推荐', desc: '探索热门新作与经典老游，找到属于你的乐趣。' },
      { title: '攻略指南', desc: '提供详细关卡解析与隐藏要素，助你轻松通关。' },
      { title: '社区讨论', desc: '与玩家分享心得，交流战术与游戏文化。' }
    ];
    const container = document.createElement('div');
    container.style.margin = '16px 0';
    cardsData.forEach(item => {
      container.appendChild(createCard(item.title, item.desc));
    });
    return container;
  }

  function generateBadgeRow() {
    const keywords = [CONFIG.keyword, '热门', '攻略', '测评', '新游', '推荐'];
    const container = document.createElement('div');
    container.style.margin = '12px 0';
    keywords.forEach(kw => {
      container.appendChild(createBadge(kw));
    });
    return container;
  }

  function generateAccessTips() {
    const tips = [
      `欢迎访问 ${CONFIG.siteUrl}，获取最新游戏资讯。`,
      '请确保网络连接稳定，以获得最佳浏览体验。',
      '本站所有内容仅供学习与参考，请遵守当地法律法规。'
    ];
    const container = document.createElement('div');
    tips.forEach(t => {
      container.appendChild(createTip(t));
    });
    return container;
  }

  function initHelper() {
    const root = document.getElementById('site-helper-root');
    if (!root) {
      console.warn('[site-helper] 未找到挂载点 #site-helper-root');
      return;
    }
    root.innerHTML = '';
    const heading = document.createElement('h2');
    heading.textContent = '站点助手';
    heading.style.marginBottom = '4px';
    root.appendChild(heading);
    root.appendChild(generateExampleCards());
    root.appendChild(generateBadgeRow());
    root.appendChild(generateAccessTips());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHelper);
  } else {
    initHelper();
  }

})();