class FFFooter extends HTMLElement {
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
        
        footer {
          background: #0a0a0a;
          border-top: 1px solid rgba(255, 107, 53, 0.2);
          padding: 3rem 0 1.5rem;
        }
        
        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }
        
        .footer-brand h3 {
          font-size: 1.5rem;
          font-weight: 900;
          background: linear-gradient(to right, #FF6B35, #FFD700);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
        }
        
        .footer-brand p {
          color: #9ca3af;
          font-size: 0.9rem;
          line-height: 1.6;
        }
        
        .footer-section h4 {
          color: white;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .footer-links {
          list-style: none;
        }
        
        .footer-links li {
          margin-bottom: 0.5rem;
        }
        
        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .footer-links a:hover {
          color: #FF6B35;
        }
        
        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
          text-align: center;
        }
        
        .footer-bottom p {
          color: #6b7280;
          font-size: 0.85rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-links a {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255, 107, 53, 0.1);
          border: 1px solid rgba(255, 107, 53, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FF6B35;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .social-links a:hover {
          background: #FF6B35;
          color: white;
          transform: translateY(-3px);
        }
        
        @media (min-width: 640px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
          }
        }
      </style>
      
      <footer>
        <div class="footer-container">
          <div class="footer-grid">
            <div class="footer-brand">
              <h3>🔥 BOOYAH ARENA</h3>
              <p>La plateforme de tournois Free Fire ultime en Côte d'Ivoire. Rejoins l'élite des survivants et remporte des récompenses exclusives.</p>
            </div>
            
            <div class="footer-section">
              <h4>Navigation</h4>
              <ul class="footer-links">
                <li><a href="index.html">Accueil</a></li>
                <li><a href="tournois.html">Tournois</a></li>
                <li><a href="reglement.html">Règlement</a></li>
                <li><a href="resultats.html">Résultats</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h4>Support</h4>
              <ul class="footer-links">
                <li><a href="contact.html">Contact</a></li>
                <li><a href="faq.html">FAQ</a></li>
                <li><a href="reglement.html">Règles</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h4>Légal</h4>
              <ul class="footer-links">
                <li><a href="#">Conditions d'utilisation</a></li>
                <li><a href="#">Politique de confidentialité</a></li>
              </ul>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p>&copy; 2024 Booyah Battle Arena. Tous droits réservés.</p>
            <div class="social-links">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Discord">💬</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }
}

customElements.define('ff-footer', FFFooter);