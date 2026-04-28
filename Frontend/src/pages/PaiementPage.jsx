import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

function PaiementPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Paiement effectué avec succès !');
    };

    return (
        <div className="page">
            <Navbar />
            <div className="page-content">
                <h1>Paiement</h1>
                <p>Finalisez votre réservation en toute sécurité.</p>
                
                <div style={{ maxWidth: '600px', marginTop: '2rem' }}>
                    <div style={{ 
                        background: 'white', 
                        padding: '2rem', 
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}>
                        <h2>Récapitulatif</h2>
                        <p><strong>Mission:</strong> La Prison</p>
                        <p><strong>Date:</strong> 24 avril 2026</p>
                        <p><strong>Heure:</strong> 14:00</p>
                        <p><strong>Joueurs:</strong> 4</p>
                        <p><strong>Total:</strong> 120€</p>
                    </div>
                    
                    <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
                        <div className="form-group">
                            <label htmlFor="cardNumber">Numéro de carte</label>
                            <input type="text" id="cardNumber" placeholder="1234 5678 9012 3456" required />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="expiry">Date d'expiration</label>
                            <input type="text" id="expiry" placeholder="MM/AA" required />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" id="cvv" placeholder="123" required />
                        </div>
                        
                        <Button text="Payer" variant="primary" type="submit" />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default PaiementPage;