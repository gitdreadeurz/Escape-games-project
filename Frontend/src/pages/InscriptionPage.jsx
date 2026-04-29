import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import '../styles/InscriptionPage.css';
import { registerUser } from '../../service';
import {loginUser} from '../../service';
import { useState, useEffect } from 'react';

function login() {

useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, []);

    // Constantes pour l'inscription
    const [formData, setFormData] = useState({
        nom: "",
        prenom: "",
        mail: "",
        mot_de_passe: "",
        date_anniv: "",
        telephone: ""
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

    // Constantes pour la connexion
    const [loginData, setLoginData] = useState({
        mail: "",
        password: ""
    });

    const handleLoginChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.id]: e.target.value
        });
    }

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await loginUser(loginData);
            console.log(response.data.token);
            localStorage.setItem('token', response.data.token);

            

            alert('Connexion réussie !');
        } catch (error) {
            console.error(error);
            alert('Erreur lors de la connexion. Veuillez vérifier vos identifiants.');
        }
    }

    return (
        <div className="page">
            <Navbar />
            <div className="page-content">
                < form onSubmit={handleLoginSubmit}>
                    <div className='connexion'>
                        <h1>Connexion</h1>
                        <p>Connectez-vous pour accéder à vos réservations et avis.</p>
                        <label htmlFor="email">Email</label>
                        <input type="text" id="mail" placeholder="Adresse email" required onChange={handleLoginChange} />
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" id="password" placeholder="Mot de passe" required onChange={handleLoginChange} />
                        <Button type='submit' text="Se connecter" />
                    </div>
                </form>
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