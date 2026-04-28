import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { useEffect, useState } from "react";
import { getAllAvis } from '../../service';

function AvisPage() {
//     const avis = [
//         { id: 1, name: "Marie D.", note: 5, text: "Expérience incroyable ! Le manoir hanté nous a fait peur." },
//         { id: 2, name: "Jean P.", note: 4, text: "Très bon moment en équipe. Énigmes bien pensées." },
//         { id: 3, name: "Sophie L.", note: 5, text: "Parfait pour un anniversaire. Je recommande !" }
//     ];

const [avis, setAvis] = useState([]);

const fetchAvis = async () => {

        try {
            const response = await getAllAvis();
            console.log(response);
            setAvis(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(()=>{
        fetchAvis();
    },[]);


    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Avis envoyé !');
    };

    return (
        <div className="page">
            <Navbar />
            <div className="page-content">
                <h1>Avis de nos Clients</h1>
                
                 <div style={{ marginTop: '2rem' }}>
                    {avis.map(avis => (
                        <div key={avis.id} style={{ 
                            background: 'white',
                            color: '#333', 
                            padding: '1.5rem', 
                            marginBottom: '1rem',
                            borderRadius: '8px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <strong>{avis.name}</strong>
                                <span>{"⭐".repeat(avis.note)}</span>
                            </div>
                            <p style={{ marginTop: '0.5rem' }}>{avis.commentaire}</p>
                        </div>
                    ))}
                </div>                 
                <h2 style={{ marginTop: '3rem' }}>Laisser un avis</h2>
                <form onSubmit={handleSubmit} style={{ maxWidth: '600px', marginTop: '1rem' }}>
                    <div className="form-group">
                        <label htmlFor="name">Nom</label>
                        <input type="text" id="name" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="note">Note</label>
                        <select id="note" required>
                            <option value="5">5 étoiles</option>
                            <option value="4">4 étoiles</option>
                            <option value="3">3 étoiles</option>
                            <option value="2">2 étoiles</option>
                            <option value="1">1 étoile</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="comment">Commentaire</label>
                        <textarea id="comment" rows="4" required></textarea>
                    </div>
                    
                    <Button text="Envoyer" variant="primary" type="submit" />
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default AvisPage;