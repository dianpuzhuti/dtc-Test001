// PeptiDerm DTC Clinical Theme Interaction Engine
window.peptidermState = {
  selectedSize: '50ml',
  selectedPrice: 49,
  selectedComparePrice: 79,
  selectedDescription: '经典装 (45天量 • 赠冷感微导勺)'
};

function selectThemeVariant(size, price, comparePrice, desc) {
  window.peptidermState.selectedSize = size;
  window.peptidermState.selectedPrice = price;
  window.peptidermState.selectedComparePrice = comparePrice;
  window.peptidermState.selectedDescription = desc;

  // Update UI Displays
  const labelElem = document.getElementById('selected-variant-label');
  const priceElem = document.getElementById('selected-price-display');
  const compareElem = document.getElementById('selected-compare-display');

  if (labelElem) labelElem.textContent = `${size} ${desc}`;
  if (priceElem) priceElem.textContent = `$${price.toFixed(2)}`;
  if (compareElem) compareElem.textContent = `$${comparePrice.toFixed(2)}`;

  // Update Active Button Styling
  document.querySelectorAll('.variant-btn').forEach(btn => {
    btn.classList.remove('border-sky-600', 'bg-sky-50/80', 'ring-2', 'ring-sky-500/20');
    btn.classList.add('bg-white', 'border-slate-200');
  });

  const activeBtn = document.getElementById(`var-btn-${size}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-white', 'border-slate-200');
    activeBtn.classList.add('border-sky-600', 'bg-sky-50/80', 'ring-2', 'ring-sky-500/20');
  }
}

function handleShopifyCheckout() {
  // If in Shopify environment, trigger Shopify Cart API or redirect to cart/checkout
  if (window.Shopify && window.Shopify.routes) {
    window.location.href = `/cart`;
  } else {
    // Fallback direct modal alert/drawer in standalone preview
    alert(`已为您选中 ${window.peptidermState.selectedSize} ($${window.peptidermState.selectedPrice})，正在跳转至结账中心...`);
  }
}
