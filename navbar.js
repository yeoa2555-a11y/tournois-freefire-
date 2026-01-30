class FFNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        :host {
          display: block;
        }
        
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(15, 15, 15, 0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 107, 53, 0.2);
          transition: all 0.3s ease;
        }
        
        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }
        
        .logo-icon {
          width: 45px;
          height: 45px;
          background: linear-gradient(135deg, #FF6B35 0%, #FFD700 100%);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
        }
        
        .logo-text {
          font-size: 1.25rem;
          font-weight: 900;
          background: linear-gradient(to right, #FF6B35, #FFD700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          list-style: none;
        }
        
        .nav-links a {
          color: #e5e5e5;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .nav-links a:hover {
          color: #FF6B35;
          background: rgba(255, 107, 53, 0.1);
        }
        
        .nav-links a.active {
          color: #FF6B35;
          background: rgba(255, 107, 53, 0.15);
        }
        
        .nav-cta {
          background: linear-gradient(135deg, #FF6B35 0%, #ff8555 100%);
          color: white !important;
          padding: 0.5rem 1.25rem !important;
          border-radius: 8px;
          font-weight: 700 !important;
        }
        
        .nav-cta:hover {
          background: linear-gradient(135deg, #ff8555 0%, #FF6B35 100%) !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
        
        /* Mobile Menu Overlay */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 999;
        }
        
        .mobile-overlay.active {
          opacity: 1;
          visibility: visible;
        }
        
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 300px;
          background: #1A1A1A;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          z-index: 1001;
          padding: 2rem;
        }
        
        .mobile-menu.active {
          transform: translateX(0);
        }
        
        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 107, 53, 0.2);
        }
        
        .mobile-menu-close {
          background: none;
          border: none;
          color: white;
          cursor: pointer;
          padding: 0.5rem;
        }
        
        .mobile-links {
          list-style: none;
        }
        
        .mobile-links li {
          margin-bottom: 0.5rem;
        }
        
        .mobile-links a {
          color: #e5e5e5;
          text-decoration: none;
          font-weight: 600;
          font-size: 1.1rem;
          padding: 1rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
        }
        
        .mobile-links a:hover {
          color: #FF6B35;
          background: rgba(255, 107, 53, 0.1);
        }
        
        .mobile-cta {
          background: linear-gradient(135deg, #FF6B35 0%, #ff8555 100%);
          color: white !important;
          margin-top: 1rem;
        }
      </style>
      
      <nav>
        <div class="nav-container">
          <a href="index.html" class="logo">
            <div class="logo-icon">🔥</div>
            <span class="logo-text">SATURO ARENA</span>
          </a>
          
          <ul class="nav-links">
            <li><a href="index.html" class="nav-link">Accueil</a></li>
            <li><a href="tournois.html" class="nav-link">Tournois</a></li>
            <li><a href="reglement.html" class="nav-link">Règlement</a></li>
            <li><a href="resultats.html" class="nav-link">Résultats</a></li>
            <li><a href="contact.html" class="nav-link">Contact</a></li>
            <li><a href="https://forms.gle/1Pdhvaz8s2GEuTiq7" class="nav-cta">S'inscrire</a></li>
          </ul>
          
          <button class="mobile-menu-btn" id="mobile-toggle">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </nav>
      
      <div class="mobile-overlay" id="mobile-overlay"></div>
      
      <div class="mobile-menu" id="mobile-menu">
        <div class="mobile-menu-header">
          <span class="logo-text" style="font-size: 1.1rem;">BOOYAH ARENA</span>
          <button class="mobile-menu-close" id="mobile-close">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <ul class="mobile-links">
          <li><a href="index.html">🏠 Accueil</a></li>
          <li><a href="tournois.html">🏆 Tournois</a></li>
          <li><a href="reglement.html">📋 Règlement</a></li>
          <li><a href="resultats.html">🎯 Résultats</a></li>
          <li><a href="contact.html">💬 Contact</a></li>
          <li><a href="https://forms.gle/1Pdhvaz8s2GEuTiq7" class="mobile-cta">🔥 S'inscrire</a></li>
        </ul>
      </div>
    `;
    
    // Mobile menu functionality
    const mobileToggle = this.shadowRoot.getElementById('mobile-toggle');
    const mobileClose = this.shadowRoot.getElementById('mobile-close');
    const mobileMenu = this.shadowRoot.getElementById('mobile-menu');
    const mobileOverlay = this.shadowRoot.getElementById('mobile-overlay');
    
    const openMenu = () => {
      mobileMenu.classList.add('active');
      mobileOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    };
    
    const closeMenu = () => {
      mobileMenu.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    };
    
    mobileToggle?.addEventListener('click', openMenu);
    mobileClose?.addEventListener('click', closeMenu);
    mobileOverlay?.addEventListener('click', closeMenu);
    
    // Close menu on link click
    this.shadowRoot.querySelectorAll('.mobile-links a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });
    
    // Highlight current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    this.shadowRoot.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }
}


customElements.define('ff-navbar', FFNavbar);
