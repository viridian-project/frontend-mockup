var preferences = {
  preferredLang: 'de',
  scoreWeighting: { // sum must be 1
    environment: 0.1666667,
    climate: 0.1666667,
    society: 0.1666667,
    health: 0.1666667,
    animalWelfare: 0.1666667,
    economy: 0.1666667
  }
}
var prefLanguages = [preferences['preferredLang'], 'en', 'fr', 'de'];