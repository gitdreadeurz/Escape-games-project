import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';

function ReservationPage() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Réservation envoyée !');
    };

    return (
        <div className="page">
            <Navbar />
            <div className="page-content">
                <h1>Réserver une Mission</h1>
                
                <form onSubmit={handleSubmit} style={{ maxWidth: '600px' }}>
                    <div className="form-group">
                        <label htmlFor="mission">Mission</label>
                        <select id="mission" required>
                            <option value="">Sélectionnez une mission</option>
                            <option value="1">La Prison</option>
                            <option value="2">Le Manoir Hanté</option>
                            <option value="3">La Mission Spatiale</option>
                            <option value="4">Le Vol du Diamant</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input type="date" id="date" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="time">Heure</label>
                        <input type="time" id="time" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="players">Nombre de joueurs</label>
                        <input type="number" id="players" min="2" max="8" required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" required />
                    </div>
                    
                    <Button text="Réserver" variant="primary" type="submit" />
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default ReservationPage;