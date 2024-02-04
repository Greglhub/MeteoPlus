const getWeatherIcon = (weatherId) => {
    // Ajoutez ici vos conditions pour déterminer l'icône en fonction de l'ID de la météo
    if (weatherId >= 200 && weatherId < 300) {
      return require('./images/thunderstorm.png'); // Exemple d'icône pour les orages
    } else if (weatherId >= 300 && weatherId < 500) {
      return require('./images/drizzle.png'); // Exemple d'icône pour la bruine
    } else if (weatherId >= 500 && weatherId < 600) {
      return require('./images/rain.png'); // Exemple d'icône pour la pluie
    } else if (weatherId >= 600 && weatherId < 700) {
      return require('./images/snow.png'); // Exemple d'icône pour la neige
    } else if (weatherId >= 700 && weatherId < 800) {
      return require('./images/atmosphere.png'); // Exemple d'icône pour les conditions atmosphériques
    } else if (weatherId === 800) {
      return require('./images/clear.png'); // Exemple d'icône pour le ciel dégagé
    } else if (weatherId > 800 && weatherId < 900) {
      return require('./images/clouds.png'); // Exemple d'icône pour les nuages
    } else {
      return require('./images/default.png'); // Icône par défaut pour les autres cas
    }
  };