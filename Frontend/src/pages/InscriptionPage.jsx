import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import '../styles/InscriptionPage.css';
import { registerUser } from '../../service';
import { useState } from 'react';

function login() {
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        mail: "",
        mot_de_passe: "",
        date_anniv: "",
        telephone : ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await registerUser(formData);
            console.log(response);
            alert('Inscription réussie !');
        } catch (error) {
            console.error(error);
        
        alert('Erreur lors de l\'inscription. Veuillez réessayer.');
    }
}


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
                        <input type="text" id="nom" placeholder="Votre nom" required onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="firstname">Prénom</label>
                        <input type="text" id="prenom" placeholder="Votre prénom" required onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="mail" placeholder="exemple@email.com" required onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" id="mot_de_passe" placeholder="Minimum 6 caractères" required onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Telephone</label>
                        <input type="text" id="telephone" placeholder="Telephone" required onChange={handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Date de naissance</label>
                        <input type="date" id="date_anniv" placeholder="Date de naissance" required onChange={handleChange} />
                    </div>

                    <Button text="S'inscrire" variant="primary" type="submit" />
                </form>
            </div>
        </div>
        <Footer />
    </div>
);
}

export default login;