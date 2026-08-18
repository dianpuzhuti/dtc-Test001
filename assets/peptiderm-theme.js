// PeptiDerm DTC Clinical Theme Full Interaction & Checkout Engine
window.peptidermState = {
  selectedSize: '50ml',
  selectedPrice: 49,
  selectedComparePrice: 79,
  selectedDescription: '50ml Core Treatment (Full 28-Day Cycle • FREE Cryo Spatula)',
  selectedVariantId: null,
  availableVariants: {}
};

// Automatic Product & Variant Discovery Engine
document.addEventListener('DOMContentLoaded', function() {
  initShopifyProductVariants();
});

function initShopifyProductVariants() {
  // 1. First check if variants were injected by Liquid
  if (window.peptidermShopifyProducts && window.peptidermShopifyProducts.length > 0) {
    const firstProduct = window.peptidermShopifyProducts[0];
    mapProductVariants(firstProduct);
    return;
  }

  // 2. Fetch products asynchronously via Shopify Storefront JSON
  fetch('/products.json?limit=10')
    .then(response => {
      if (!response.ok) throw new Error('Network error');
      return response.json();
    })
    .then(data => {
      if (data && data.products && data.products.length > 0) {
        // Find peptiderm or first product
        const prod = data.products.find(p => p.title.toLowerCase().includes('peptiderm') || p.title.toLowerCase().includes('cream') || p.title.toLowerCase().includes('peptide')) || data.products[0];
        mapProductVariants(prod);
      }
    })
    .catch(err => {
      console.log('Product auto-discovery note:', err);
    });
}

function mapProductVariants(product) {
  if (!product || !product.variants || product.variants.length === 0) return;

  const vars = product.variants;
  window.peptidermState.availableVariants = {};

  // Try to match 30ml, 50ml, 100ml or map by index
  vars.forEach((v, index) => {
    const title = (v.title || '').toLowerCase();
    if (title.includes('30') || index === 0) {
      window.peptidermState.availableVariants['30ml'] = v.id;
    }
    if (title.includes('50') || index === 1) {
      window.peptidermState.availableVariants['50ml'] = v.id;
    }
    if (title.includes('100') || index === 2) {
      window.peptidermState.availableVariants['100ml'] = v.id;
    }
  });

  // Set initial selected variant ID (default 50ml)
  const defaultId = window.peptidermState.availableVariants['50ml'] || (vars[1] ? vars[1].id : vars[0].id);
  window.peptidermState.selectedVariantId = defaultId;

  const hiddenInput = document.getElementById('peptiderm-variant-id-input');
  if (hiddenInput && defaultId) {
    hiddenInput.value = defaultId;
  }
}

function selectThemeVariant(size, price, comparePrice, desc, explicitVariantId) {
  window.peptidermState.selectedSize = size;
  window.peptidermState.selectedPrice = price;
  window.peptidermState.selectedComparePrice = comparePrice;
  window.peptidermState.selectedDescription = desc;

  // Determine Variant ID
  let targetVariantId = explicitVariantId;
  if (!targetVariantId || isNaN(Number(targetVariantId))) {
    targetVariantId = window.peptidermState.availableVariants[size] || window.peptidermState.selectedVariantId;
  }

  if (targetVariantId && !isNaN(Number(targetVariantId))) {
    window.peptidermState.selectedVariantId = targetVariantId;
    const variantInput = document.getElementById('peptiderm-variant-id-input');
    if (variantInput) {
      variantInput.value = targetVariantId;
    }
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

function showNoProductGuidanceModal() {
  const existingModal = document.getElementById('peptiderm-no-product-modal');
  if (existingModal) {
    existingModal.classList.remove('hidden');
    return;
  }

  const modalHtml = `
    <div id="peptiderm-no-product-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div class="bg-white rounded-3xl max-w-md w-full overflow-hidden shadow-2xl border border-slate-200 p-6 space-y-4 text-left">
        <div class="flex items-center gap-3 text-amber-600">
          <div class="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-xl font-bold">
            ⚠️
          </div>
          <div>
            <h3 class="font-black text-slate-900 text-base">Shopify 商品变体绑定提示</h3>
            <span class="text-[11px] text-slate-500">Product Variant Setup Guide</span>
          </div>
        </div>

        <div class="text-xs text-slate-600 space-y-2 leading-relaxed bg-slate-50 p-4 rounded-2xl border border-slate-200">
          <p class="font-bold text-slate-900">为什么会出现 “Cannot find variant” 报错？</p>
          <p>Shopify 系统要求在结账前，必须在后台有一个<strong>真实的商品变体 ID (Variant ID)</strong>。</p>
          <p class="pt-1 font-semibold text-sky-800">解决只需 1 分钟：</p>
          <ol class="list-decimal pl-4 space-y-1 text-slate-700">
            <li>登录 Shopify 后台 -> 点击 <strong>Products (商品)</strong> -> <strong>Add product</strong>；</li>
            <li>标题输入 <code>PeptiDerm Multi-Peptide Cream</code>；</li>
            <li>在 Options 处添加 Size 变体：<code>30ml</code> ($29), <code>50ml</code> ($49), <code>100ml</code> ($79)；</li>
            <li>点击 <strong>Save (保存)</strong>，前台将自动绑定并直接跳转至官方结账页！</li>
          </ol>
        </div>

        <div class="flex gap-2.5">
          <button type="button" onclick="document.getElementById('peptiderm-no-product-modal').classList.add('hidden')" class="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-3 rounded-xl text-xs transition-all cursor-pointer">
            我知道了 (Close)
          </button>
          <a href="/admin/products" target="_blank" class="flex-1 bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 rounded-xl text-xs text-center transition-all">
            前往后台建品 →
          </a>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHtml);
}

function submitToShopifyCheckout() {
  const checkoutBtn = document.getElementById('checkout-action-btn');
  if (checkoutBtn) {
    checkoutBtn.innerText = 'Connecting to Secure Checkout...';
    checkoutBtn.disabled = true;
  }

  // 1. Get currently selected or discovered Variant ID
  let variantId = window.peptidermState.selectedVariantId;
  const currentSize = window.peptidermState.selectedSize || '50ml';

  if (!variantId && window.peptidermState.availableVariants[currentSize]) {
    variantId = window.peptidermState.availableVariants[currentSize];
  }

  // 2. If no valid variant ID found in Shopify store, prevent crashing to /cart/add and show helpful guide
  if (!variantId || isNaN(Number(variantId))) {
    if (checkoutBtn) {
      checkoutBtn.innerText = 'Proceed to Secure Checkout';
      checkoutBtn.disabled = false;
    }
    showNoProductGuidanceModal();
    return;
  }

  // 3. Clear existing cart item (to ensure direct single purchase) and add selected item
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
  .then(response => {
    if (!response.ok) {
      throw new Error('Add to cart failed');
    }
    return response.json();
  })
  .then(data => {
    // Jump directly to Shopify Checkout
    window.location.href = '/checkout';
  })
  .catch(error => {
    console.warn('AJAX cart add fallback to direct checkout:', error);
    // If add to cart had an issue, attempt direct checkout URL with variant
    window.location.href = `/cart/${variantId}:1`;
  });
}
