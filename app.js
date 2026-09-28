function renderBrandInfo() {
    if(document.getElementById('display-brand-title')) document.getElementById('display-brand-title').innerText = brandInfo.title || 'KUTLUBAY';
    if(document.getElementById('display-brand-subtitle')) document.getElementById('display-brand-subtitle').innerText = brandInfo.subtitle || 'HOTEL & RESORT';
    if(document.getElementById('display-hero-title')) document.getElementById('display-hero-title').innerText = "Otel " + (brandInfo.title || 'Kutlubay');
    
    const logoImg = document.getElementById('site-logo-img');
    const logoUrl = brandInfo.logoUrl || '';

    if(logoImg) {
        if(logoUrl) {
            logoImg.src = logoUrl;
            logoImg.style.display = 'block';
        } else { logoImg.style.display = 'none'; }
    }

    // --- ANA EKRANA EKLE (PWA) VE FAVICON GÜNCELLEME ---
    if(logoUrl) {
        // Apple cihazlar için uygulama ikonu
        const appleIcon = document.getElementById('apple-touch-icon');
        if(appleIcon) appleIcon.href = logoUrl;

        // Tarayıcı sekme ikonu (Favicon)
        const favicon = document.getElementById('favicon-icon');
        if(favicon) favicon.href = logoUrl;

        // Android cihazlar için dinamik manifest oluşturma
        const manifestObj = {
            "name": brandInfo.title ? `${brandInfo.title} Otel` : "Kutlubay Otel",
            "short_name": brandInfo.title || "Kutlubay",
            "start_url": "/",
            "display": "standalone",
            "background_color": "#ffffff",
            "theme_color": "#c59b27",
            "icons": [
                {
                    "src": logoUrl,
                    "sizes": "192x192",
                    "type": "image/png",
                    "purpose": "any maskable"
                },
                {
                    "src": logoUrl,
                    "sizes": "512x512",
                    "type": "image/png",
                    "purpose": "any maskable"
                }
            ]
        };

        const stringManifest = JSON.stringify(manifestObj);
        const blob = new Blob([stringManifest], {type: 'application/json'});
        const manifestURL = URL.createObjectURL(blob);
        const manifestTag = document.getElementById('manifest-placeholder');
        if(manifestTag) manifestTag.setAttribute('href', manifestURL);
    }
}
