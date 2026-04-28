
import mission1 from "../assets/mission1.webp";
import mission2 from "../assets/mission2.webp";
import mission3 from "../assets/mission3.webp";
import mission4 from "../assets/mission4.webp";
import mission5 from "../assets/mission5.webp";
import mission6 from "../assets/mission6.webp";
import mission7 from "../assets/mission7.webp";
import mission8 from "../assets/mission8.webp";
import mission9 from "../assets/mission9.webp";
import mission10 from "../assets/mission10.webp";

export const missions = [
    {
        id: 1,
        title: "Le Trésor des Pirates",
        description: "Partez à la recherche du trésor perdu du capitaine Morgan",
        difficulty: "Intermédiaire",
        duration: 60,
        minPlayers: 2,
        maxPlayers: 6,
        image: mission1,
        type: "sur site"
    },
    {
        id: 2,
        title: "Virus Zombie",
        description: "Échappez au laboratoire avant que le virus ne se propage",
        difficulty: "Difficile",
        duration: 75,
        minPlayers: 3,
        maxPlayers: 6,
        image: mission2,
        type: "sur site"
    },
    {
        id: 3,
        title: "Avengers",
        description: "Aidez les Avengers à sauver le monde de Thanos",
        difficulty: "Expert",
        duration: 90,
        minPlayers: 4,
        maxPlayers: 8,
        image: mission3,
        type: "sur site"
    },
    {
        id: 4,
        title: "Jurassic",
        description: "Échappez au parc avant que les dinosaures ne vous attrapent",
        difficulty: "Difficile",
        duration: 60,
        minPlayers: 2,
        maxPlayers: 6,
        image: mission4,
        type: "sur site"
    },
    {
        id: 5,
        title: "Évasion Azkaban",
        description: "Aidez Harry Potter à s'échapper de la prison des sorciers",
        difficulty: "Intermédiaire",
        duration: 75,
        minPlayers: 3,
        maxPlayers: 6,
        image: mission5,
        type: "sur site"
    },
    {
        id: 6,
        title: "Prison Intergalactique",
        description: "Fuyez de la prison spatiale la plus sécurisée de la galaxie",
        difficulty: "Expert",
        duration: 90,
        minPlayers: 2,
        maxPlayers: 5,
        image: mission6,
        type: "sur site"
    },
    {
        id: 7,
        title: "Chambre des Secrets",
        description: "Découvrez le mystère de la chambre des secrets à Poudlard",
        difficulty: "Intermédiaire",
        duration: 60,
        minPlayers: 2,
        maxPlayers: 6,
        image: mission7,
        type: "à domicile"
    },
    {
        id: 8,
        title: "Braquage",
        description: "Dérobez le diamant le plus précieux au monde",
        difficulty: "Difficile",
        duration: 75,
        minPlayers: 2,
        maxPlayers: 4,
        image: mission8,
        type: "à domicile"
    },
    {
        id: 9,
        title: "Le Louvre",
        description: "Récupérez la Joconde avant que les voleurs ne s'enfuient",
        difficulty: "Expert",
        duration: 90,
        minPlayers: 3,
        maxPlayers: 6,
        image: mission9,
        type: "à domicile"
    },
    {
        id: 10,
        title: "Faucon Millenium",
        description: "Aidez Han Solo à échapper à l'Empire",
        difficulty: "Intermédiaire",
        duration: 60,
        minPlayers: 2,
        maxPlayers: 5,
        image: mission10,
        type: "à domicile"
    }
];