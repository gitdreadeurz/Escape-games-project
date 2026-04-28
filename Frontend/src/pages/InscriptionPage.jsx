import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

function InscriptionPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Inscription réussie !');
    };

    return (
        <div className="page">
            <Navbar />
            <div className="page-content">
                <h1>Créer un compte</h1>
                <p>Rejoignez-nous pour accéder à vos réservations et avis.</p>
                
                <form onSubmit={handleSubmit} style={{ maxWidth: '600px', marginTop: '2rem' }}>
                    <div className="form-group">
                        <label htmlFor="lastname">Nom</label>
                        <input type="text" id="lastname" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="firstname">Prénom</label>
                        <input type="text" id="firstname" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" id="password" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                        <input type="password" id="confirmPassword" required />
                    </div>
                    
                    <Button text="S'inscrire" variant="primary" type="submit" />
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default InscriptionPage;