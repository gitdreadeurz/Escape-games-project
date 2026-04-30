import Navbar from "../components/Navbar";

function DashboardPage() {
    return (
        <div className="page">
            <Navbar />
            <main className="dashboard-page">
                <h1>Tableau de bord</h1>
                <p>Bienvenue sur votre espace personnel !</p>
            </main>
        </div>
    );
}

export default DashboardPage;