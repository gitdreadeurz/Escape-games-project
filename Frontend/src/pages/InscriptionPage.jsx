import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import '../styles/InscriptionPage.css';

function InscriptionPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Inscription réussie !');
    };

    return (
        <div className="page">
            <Navbar />
            <div className="page-content">
                <div className='connexion'>
                    <h1>Connexion</h1>
                    <p>Connectez-vous pour accéder à vos réservations et avis.</p>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="Adresse email" />
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" id="password" placeholder="Mot de passe" />
                    <Button text="Se connecter" />
                </div>
                <div>
                    <h1>Créer un compte</h1>
                    <p>Rejoignez-nous pour accéder à vos réservations et avis.</p>

                    <form onSubmit={handleSubmit} >
                        <div className="form-group">
                            <label htmlFor="lastname">Nom</label>
                            <input type="text" id="lastname" placeholder="Votre nom" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="firstname">Prénom</label>
                            <input type="text" id="firstname" placeholder="Votre prénom" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="exemple@email.com" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Mot de passe</label>
                            <input type="password" id="password" placeholder="Minimum 6 caractères" required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
                            <input type="password" id="confirmPassword" placeholder="Confirmez le mot de passe" required />
                        </div>

                        <Button text="S'inscrire" variant="primary" type="submit" />
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default InscriptionPage;