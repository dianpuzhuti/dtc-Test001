// PeptiDerm DTC Clinical Theme Full Interaction Engine
window.peptidermState = {
  selectedSize: '50ml',
  selectedPrice: 49,
  selectedComparePrice: 79,
  selectedDescription: '50ml Core Treatment (Full 28-Day Cycle • FREE Cryo Spatula)'
};

function selectThemeVariant(size, price, comparePrice, desc) {
  window.peptidermState.selectedSize = size;
  window.peptidermState.selectedPrice = price;
  window.peptidermState.selectedComparePrice = comparePrice;
  window.peptidermState.selectedDescription = desc;

  // Update UI displays
  const labelElem = document.getElementById('selected-variant-label');
  const priceElem = document.getElementById('selected-price-display');
  const compareElem = document.getElementById('selected-compare-display');
  const cartTitle = document.getElementById('modal-cart-title');
  const cartPrice = document.getElementById('modal-cart-price');
  const cartTotal = document.getElementById('modal-cart-total');

  if (labelElem) labelElem.textContent = desc;
  if (priceElem) priceElem.textContent = `$${price.toFixed(2)}`;
  if (compareElem) compareElem.textContent = `$${comparePrice.toFixed(2)}`;
  if (cartTitle) cartTitle.textContent = desc;
  if (cartPrice) cartPrice.textContent = `$${price.toFixed(2)}`;
  if (cartTotal) cartTotal.textContent = `$${(price * 0.9).toFixed(2)}`;

  // Update Active Button Styling
  document.querySelectorAll('.variant-btn').forEach(btn => {
    btn.classList.remove('border-sky-600', 'bg-sky-50/80', 'ring-2', 'ring-sky-600/20');
    btn.classList.add('bg-white', 'border-slate-200');
  });

  const activeBtn = document.getElementById(`var-btn-${size}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-white', 'border-slate-200');
    activeBtn.classList.add('border-sky-600', 'bg-sky-50/80', 'ring-2', 'ring-sky-600/20');
  }
}

function setHeroGalleryImage(src, btn) {
  const mainImg = document.getElementById('hero-active-img');
  if (mainImg) mainImg.src = src;

  document.querySelectorAll('.gallery-thumb').forEach(b => {
    b.classList.remove('border-sky-600', 'ring-2', 'ring-sky-600/20', 'opacity-100');
    b.classList.add('border-slate-200', 'opacity-70');
  });

  if (btn) {
    btn.classList.remove('border-slate-200', 'opacity-70');
    btn.classList.add('border-sky-600', 'ring-2', 'ring-sky-600/20', 'opacity-100');
  }
}

function toggleThemeFaq(faqId) {
  const content = document.getElementById(`content-${faqId}`);
  const icon = document.getElementById(`icon-${faqId}`);
  if (content) {
    const isHidden = content.classList.contains('hidden');
    if (isHidden) {
      content.classList.remove('hidden');
      if (icon) icon.textContent = '▲';
    } else {
      content.classList.add('hidden');
      if (icon) icon.textContent = '▼';
    }
  }
}

function openShopifyCartDrawer() {
  const modal = document.getElementById('shopify-cart-modal');
  if (modal) {
    modal.classList.remove('hidden');
  } else {
    window.location.href = '/cart';
  }
}

function closeShopifyCartDrawer() {
  const modal = document.getElementById('shopify-cart-modal');
  if (modal) modal.classList.add('hidden');
}

function submitToShopifyCheckout() {
  if (window.Shopify && window.Shopify.routes) {
    window.location.href = '/checkout';
  } else {
    alert(`Thank you! Proceeding to checkout for ${window.peptidermState.selectedDescription}...`);
    closeShopifyCartDrawer();
  }
}
