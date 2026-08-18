// PeptiDerm DTC Clinical Theme Full Interaction & Checkout Engine
window.peptidermState = {
  selectedSize: '50ml',
  selectedPrice: 49,
  selectedComparePrice: 79,
  selectedDescription: '50ml Core Treatment (Full 28-Day Cycle • FREE Cryo Spatula)',
  selectedVariantId: null
};

// Initialize variant ID if available from Liquid data
document.addEventListener('DOMContentLoaded', function() {
  const hiddenVariantInput = document.getElementById('peptiderm-variant-id-input');
  if (hiddenVariantInput && hiddenVariantInput.value) {
    window.peptidermState.selectedVariantId = hiddenVariantInput.value;
  }
});

function selectThemeVariant(size, price, comparePrice, desc, variantId) {
  window.peptidermState.selectedSize = size;
  window.peptidermState.selectedPrice = price;
  window.peptidermState.selectedComparePrice = comparePrice;
  window.peptidermState.selectedDescription = desc;
  if (variantId) {
    window.peptidermState.selectedVariantId = variantId;
  }

  // Update hidden form inputs for native Shopify form submission
  const variantInput = document.getElementById('peptiderm-variant-id-input');
  if (variantInput && variantId) {
    variantInput.value = variantId;
  }

  // Update UI displays
  const labelElem = document.getElementById('selected-variant-label');
  const priceElem = document.getElementById('selected-price-display');
  const compareElem = document.getElementById('selected-compare-display');
  const mobilePrice = document.getElementById('mobile-price-display');
  const mobileCompare = document.getElementById('mobile-compare-display');
  const cartTitle = document.getElementById('modal-cart-title');
  const cartPrice = document.getElementById('modal-cart-price');
  const cartTotal = document.getElementById('modal-cart-total');

  if (labelElem) labelElem.textContent = desc;
  if (priceElem) priceElem.textContent = `$${price.toFixed(2)}`;
  if (compareElem) compareElem.textContent = `$${comparePrice.toFixed(2)}`;
  if (mobilePrice) mobilePrice.textContent = `$${price}`;
  if (mobileCompare) mobileCompare.textContent = `$${comparePrice}`;
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
  }
}

function closeShopifyCartDrawer() {
  const modal = document.getElementById('shopify-cart-modal');
  if (modal) modal.classList.add('hidden');
}

function submitToShopifyCheckout() {
  const checkoutBtn = document.getElementById('checkout-action-btn');
  if (checkoutBtn) {
    checkoutBtn.innerText = 'Connecting to Secure Checkout...';
    checkoutBtn.disabled = true;
  }

  // 1. Check if running inside Shopify Theme Customizer / Admin Editor
  const isInsideShopifyEditor = (window.Shopify && window.Shopify.designMode) || window.location.href.includes('/editor') || window.location.href.includes('admin.shopify.com');

  if (isInsideShopifyEditor) {
    // Show friendly notification explaining Shopify's editor iframe sandboxing
    alert("【Shopify 后台编辑模式提示 / Theme Editor Notice】\n\nShopify 官方在后台主题自定义器 (Theme Editor) 中默认拦截结账外链跳转，以防止编辑数据丢失。\n\n请点击右上角的「...」->「预览 (Preview)」或直接访问店铺前台域名（如 xxx.myshopify.com），即可体验 100% 真实的直接结账 (Direct Checkout) 与加购跳转！");
    if (checkoutBtn) {
      checkoutBtn.innerText = 'Proceed to Secure Checkout';
      checkoutBtn.disabled = false;
    }
    return;
  }

  // 2. Real Storefront Execution
  const variantId = window.peptidermState.selectedVariantId;
  const form = document.getElementById('peptiderm-add-to-cart-form');

  if (variantId && !isNaN(Number(variantId))) {
    // Use Shopify Ajax Cart API to add item, then redirect to checkout
    fetch('/cart/add.js', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        items: [{
          id: Number(variantId),
          quantity: 1
        }]
      })
    })
    .then(response => response.json())
    .then(data => {
      window.location.href = '/checkout';
    })
    .catch(error => {
      console.warn('AJAX cart add fallback:', error);
      if (form) {
        form.submit();
      } else {
        window.location.href = '/checkout';
      }
    });
  } else if (form) {
    // Submit standard Shopify form
    form.submit();
  } else {
    // Fallback direct checkout redirect
    window.location.href = '/checkout';
  }
}
