function switchTab(tabId) {
    // 1. Masquer tous les contenus
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // 2. Désactiver tous les onglets du menu
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // 3. Afficher le contenu ciblé
    document.getElementById(tabId).classList.add('active');

    // 4. Activer l'onglet correspondant dans le menu (Desktop)
    // On cherche le bouton qui a l'onclick correspondant
    const activeBtn = Array.from(navItems).find(btn => btn.getAttribute('onclick').includes(tabId));
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // 5. Fermer le menu mobile si ouvert
    document.getElementById('mobile-menu').classList.add('hidden');
}