/**
 * 3 Menti - PWA Guessing Game
 * Complete game logic, accurate timer, word management, LocalStorage persistence.
 * 
 * Target: Mobile-first PWA, iOS Safari compatible, zero external dependencies.
 */

'use strict';

// ============================================================================
// CONSTANTS & DEFAULT DATA
// ============================================================================

const STORAGE_KEYS = {
  WORDS: '3menti_words',
  STATS: '3menti_stats',
  SETTINGS: '3menti_settings',
};

const GAME_CONFIG = {
  ROUND_DURATION_SEC: 60,
  MIN_DURATION_SEC: 10,
  MAX_DURATION_SEC: 600,
  INTERMISSION_SEC: 2, // Timer freeze between words
  DEBOUNCE_DELAY_MS: 180, // Prevent accidental double taps
};

/**
 * 300+ curated Italian words covering animals, foods, sports, everyday objects,
 * places, emotions, actions, professions, pop culture and nature.
 */
const DEFAULT_WORDS_LIST = [
  // Originali
  'Farfalla', 'Leone', 'Elefante', 'Aquila', 'Tartaruga',
  'Squalo', 'Delfino', 'Pipistrello', 'Cavallo', 'Giraffa',
  'Coccodrillo', 'Pinguino', 'Cane', 'Gatto', 'Lupo', 'Balena',
  'Spaghetti', 'Pizza', 'Gelato', 'Cappuccino', 'Cioccolato',
  'Tiramisù', 'Lasagna', 'Pomodoro', 'Mela', 'Formaggio',
  'Pane', 'Limone', 'Anguria', 'Fragola', 'Risotto', 'Panino',
  'Calcio', 'Tennis', 'Nuoto', 'Pallavolo', 'Sci',
  'Ciclismo', 'Scacchi', 'Pugilato', 'Basket', 'Surf',
  'Pattinaggio', 'Ombrello', 'Orologio', 'Chitarra', 'Telefono', 'Specchio',
  'Libro', 'Cuscino', 'Valigia', 'Lampada', 'Zaino',
  'Occhiali', 'Bicicletta', 'Forchetta', 'Pettine', 'Bottiglia',
  'Finestra', 'Candela', 'Montagna', 'Spiaggia', 'Bosco', 'Castello', 'Ospedale',
  'Aeroporto', 'Biblioteca', 'Vulcano', 'Isola', 'Cinema',
  'Stazione', 'Museo', 'Deserto', 'Fontana', 'Ponte',
  'Felicità', 'Paura', 'Sorpresa', 'Coraggio', 'Amore',
  'Rabbia', 'Nostalgia', 'Speranza', 'Silenzio', 'Libertà',
  'Allegria', 'Tristezza', 'Ballare', 'Dormire', 'Viaggiare', 'Cantare', 'Ridere',
  'Nuotare', 'Disegnare', 'Cucinare', 'Correre', 'Volare',
  'Leggere', 'Giocare', 'Scrivere', 'Guidare',
  'Pirata', 'Dottore', 'Cuoco', 'Astronauta', 'Mago',
  'Detective', 'Pompiere', 'Pilota', 'Pittore', 'Re',
  'Regina', 'Scienziato', 'Musicista', 'Fotografo',
  'Sole', 'Arcobaleno', 'Temporale', 'Luna', 'Cascata',
  'Fulmine', 'Nuvola', 'Neve', 'Stella', 'Terremoto',

  // Nuove Aggiunte (Pop Culture, Italia, Concetti Moderni)
  'Jannik Sinner', 'Carbonara', 'Seghina', 'Shrek', 'Caciocavallo', 'Maranza',
  'Darth Vader', 'Aperol Spritz', 'Micheal Merlo', 'Ornitorinco', 'Mamma mia',
  'Ciuchino', 'Pirla', 'Panettone', 'GigaChad', 'Harry Potter', 'Pummarola',
  'Sbrodolone', 'Cinghiale', 'Francesco Totti', 'Supercazzola', 'Kung Fu Panda',
  'Bombolone', 'Che sbatti', 'Voldemort', 'Mandolino', 'Puzzetta', 'Capibara',
  'Ferrari', 'Minchia', 'SpongeBob', 'Ciucciabrodo', 'Rocky Balboa',
  'Bidet', 'Tamarrissimo', 'Panzerotto', 'Gollum', 'Trallallero', 'Valentino Rossi',
  'Mozzarella', 'Sgamato', 'Jack Sparrow', 'Caccola', 'Vespa', 'Bro', 'Padrino',
  'Parmigiano', 'Zuzzurellone', 'Balengo', 'Mario Kart', 'Cotechino', 'Homer Simpson',
  'Salsicciotto', 'Bella zio', 'Batman', 'Ferragosto', 'Sgommata', 'Ciambellone',
  'Rocky', 'Sticazzi', 'Truzzo', 'Cannolo', 'Super Mario', 'Brontolone', 'Colosseo',
  'Pirlone', 'Shrek verde', 'Gnocchi', 'Flexare', 'Fantozzi', 'Sgnappero',
  'Buzz Lightyear', 'Caciara', 'Cocco bello', 'Checco Zalone', 'Polenta',
  'Cringe', 'Ratatouille', 'Coglione cosmico', 'Leonardo DiCaprio',
  'Pasticcione', 'Spritz', 'Anakin Skywalker', 'Babbalù', 'Gabbiano', 'Boia dé',
  'Donkey Kong', 'Zarro', 'Pinocchio', 'Baccalà', 'Sbrocco', 'Kung Fu',
  'Polpetta', 'Ciuccio', 'Il Signore degli Anelli', 'Checco', 'Caciarone',
  'Capitan Uncino', 'Maremma maiala', 'Scamorza', 'Tarzan', 'Babbione',
  'Tartaruga ninja', 'Fregna', 'Cannelloni', 'Poldo', 'Cenerentola',
  'Sturalavandini', 'Salamandra', 'Ci sta', 'Don Vito Corleone', 'Bombetta',
  'Cinghialone', 'Tricheco', 'Bohemian Rhapsody', 'Salsiccia', 'Piripicchio',
  'Matrix', 'Cacasenno', 'Paninaro', 'Piadina', 'Gandalf', 'Mappazzone',
  'Zio pera', 'Totò', 'Bud Spencer', 'Patatone', 'Pasticciotto', 'Bidet d\'oro',
  'Frittatona', 'Sottone', 'Ciuccia', 'Il Gladiatore',
  'Bisteccone', 'Pappagorgio', 'Checco il bomber', 'Pingu', 'Bresaola',
  'Zerbino', 'Fleximan', 'Porca miseria', 'Berlusconi', 'Gerry Scotti', 'Amadeus',
  'Barbara D\'Urso', 'Fedez', 'Chiara Ferragni', 'Kebab', 'Porchetta', 'Arrosticini',
  'Chinotto', 'Tavernello', 'Red Bull', 'Sofficino', 'Doge', 'Skibidi', 'Khaby Lame',
  'Povero Gabbiano', 'Saluta Andonio', 'Bugo', 'Spider-Man', 'Elsa', 'Peppa Pig',
  'Pikachu', 'Charizard', 'Goku', 'Luffy', 'Scappellamento', 'Blinda', 'Inciucio',
  'Paccotto', 'Cazzeggio', 'Fuffa', 'Telecomandi', 'Zoccolo', 'Pantofola', 'Mocio',
  'Folletto', 'Bimby', 'Autogrill', 'Telepass', 'Tangenziale', 'Area C', 'ZTL',
  'Multa', 'Ceres', 'Ichnusa', 'Negroni', 'Mojito', 'Pina Colada', 'Limoncello',
  'Sanremo', 'Eurovision', 'X Factor', 'Grande Fratello', 'Uomini e Donne',
  'Vasco Rossi', 'Ligabue', 'Maneskin', 'Sfera Ebbasta', 'Geolier', 'Piazza Duomo',
  'Torre di Pisa', 'Venezia', 'Vesuvio', 'Etna', 'Panda', 'Nutella', 'Kinder Bueno',
  'Estathé', 'Fonzies', 'Golia', 'Smemoranda', 'Invicta', 'Eastpak', 'Nokia 3310',
  'Game Boy', 'Pippo Baudo', 'Mike Bongiorno', 'Raffaella Carrà', 'Enrico Papi',
  'Moana Pozzi', 'Rocco Siffredi', 'Cicciolina', 'Valentina Nappi', 'Ugo Fantozzi',
  'Fracchia', 'Filini', 'La Pina', 'Contessa Serbelloni', 'Pino dei Palazzi',
  'Cirilli', 'Zelig', 'Colorado', 'Made in Sud', 'CapaRezza', 'Fabri Fibra',
  'Guè', 'Marracash', 'Salmo', 'TikTok', 'Instagram', 'BeReal', 'Snapchat',
  'WhatsApp', 'Telegram', 'ChatGPT', 'Elon Musk', 'Mark Zuckerberg', 'Jeff Bezos',
  'Bill Gates', 'Bitcoin', 'NFT', 'Metaverso', 'Intelligenza Artificiale', 'Robot',
  'Sushi', 'Poké', 'Avocado Toast', 'Starbucks', 'McDonald\'s', 'Burger King',
  'Pizzetta', 'Suppli', 'Arancino', 'Focaccia', 'Taralli', 'Grissini', 'Burrata',
  'Stracciatella', 'Gorgonzola', 'Pecorino', 'Taleggio', 'Vespa 50 Special',
  'Fiat 500', 'Lancia Delta', 'Alfa Romeo', 'Lamborghini', 'Max Biaggi',
  'Charles Leclerc', 'Lewis Hamilton', 'Maradona', 'Pelé', 'Cristiano Ronaldo',
  'Messi', 'Mbappé', 'Neymar', 'Juve', 'Inter', 'Milan', 'Roma', 'Lazio', 'Napoli',
  'Cinepanettone', 'Christian De Sica', 'Massimo Boldi', 'Biagio Izzo',
  'Aldo Giovanni e Giacomo', 'Ficarra e Picone', 'Pio e Amedeo', 'Maccio Capatonda',
  'Herbert Ballerina', 'Ivo Avido', 'Rupert Sciamenna', 'Elettra Lamborghini',
  'Malgioglio', 'Orietta Berti', 'Gianni Morandi', 'Sabrina Salerno', 'Jo Squillo',
  'Cristina D\'Avena', 'Giorgio Vanni', 'Vegeta', 'Piccolo', 'Gohan', 'Trunks',
  'Bulma', 'Maestro Muten', 'Zoro', 'Nami', 'Sanji', 'Chopper', 'Robin', 'Franky',
  'Brook', 'Naruto', 'Sasuke', 'Sakura', 'Kakashi', 'Itachi', 'Madara', 'Gaara',
  'Hermione', 'Ron', 'Silente', 'Pitona', 'Hagrid', 'Dobby', 'Frodo', 'Sam',
  'Aragorn', 'Legolas', 'Gimli', 'Sauron', 'Joker', 'Harley Quinn', 'Iron Man',
  'Thor', 'Hulk', 'Captain America', 'Thanos', 'Deadpool', 'Wolverine',
  'Barbossa', 'Davy Jones', 'Indiana Jones', 'James Bond', 'Ethan Hunt',
  'John Wick', 'Neo', 'Terminator', 'Robocop', 'Alien', 'Predator', 'Godzilla',
  'King Kong', 'Patrick', 'Squidward', 'Mr Krabs', 'Sandy', 'Plankton',
  'Simpsons', 'Marge', 'Bart', 'Lisa', 'Maggie', 'Ned Flanders', 'Peter Griffin',
  'Stewie', 'Brian', 'Quagmire', 'Joe', 'Cleveland', 'South Park', 'Cartman',
  'Stan', 'Kyle', 'Kenny', 'Butters'
];

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Generate a unique ID for a word entity
 * @returns {string} Unique identifier
 */
function generateId() {
  return 'w_' + Date.now().toString(36) + '_' + Math.random().toString(36).substring(2, 7);
}

/**
 * In-place Fisher-Yates array shuffle
 * @param {Array} array 
 * @returns {Array} Shuffled array
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Trigger subtle haptic vibration on mobile devices if supported
 * @param {number|number[]} pattern 
 */
function triggerHaptic(pattern = 30) {
  if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
    try {
      navigator.vibrate(pattern);
    } catch (_) {
      // Ignore silence/permissions error on unsupported web contexts
    }
  }
}

/**
 * Sanitize plain text to prevent HTML injection in dynamic lists
 * @param {string} text 
 * @returns {string} Sanitized string
 */
function escapeHTML(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ============================================================================
// WORD MANAGER CLASS (Data & LocalStorage)
// ============================================================================

class WordManager {
  constructor() {
    this.words = [];
    this.loadWords();
  }

  /**
   * Load words from LocalStorage or initialize with default list
   */
  loadWords() {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.WORDS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Validate structure
          this.words = parsed.map(item => ({
            id: item.id || generateId(),
            text: String(item.text).trim(),
            active: item.active !== false,
          })).filter(item => item.text.length > 0);
          return;
        }
      }
    } catch (err) {
      console.warn('Errore nel caricamento parole da LocalStorage:', err);
    }

    // Default initialization
    this.words = DEFAULT_WORDS_LIST.map(text => ({
      id: generateId(),
      text: text.trim(),
      active: true,
    }));
    this.saveWords();
  }

  /**
   * Save current word list to LocalStorage
   */
  saveWords() {
    try {
      localStorage.setItem(STORAGE_KEYS.WORDS, JSON.stringify(this.words));
    } catch (err) {
      console.error('Impossibile salvare le parole in LocalStorage:', err);
    }
  }

  /**
   * Get all active words for gameplay
   * @returns {Array<{id: string, text: string, active: boolean}>}
   */
  getActiveWords() {
    return this.words.filter(w => w.active);
  }

  /**
   * Get counts
   * @returns {{active: number, total: number}}
   */
  getCounts() {
    const active = this.words.filter(w => w.active).length;
    return {
      active,
      total: this.words.length,
    };
  }

  /**
   * Check if a word already exists (case-insensitive check)
   * @param {string} text 
   * @param {string|null} excludeId 
   * @returns {boolean}
   */
  isDuplicate(text, excludeId = null) {
    const normalized = text.trim().toLowerCase();
    return this.words.some(w => w.id !== excludeId && w.text.trim().toLowerCase() === normalized);
  }

  /**
   * Add a new word
   * @param {string} text 
   * @returns {{success: boolean, message?: string, word?: object}}
   */
  addWord(text) {
    const trimmed = (text || '').trim();
    if (!trimmed) {
      return { success: false, message: 'La parola non può essere vuota.' };
    }
    if (this.isDuplicate(trimmed)) {
      return { success: false, message: `La parola "${trimmed}" esiste già nella lista.` };
    }

    const newWord = {
      id: generateId(),
      text: trimmed,
      active: true,
    };
    this.words.unshift(newWord);
    this.saveWords();
    return { success: true, word: newWord };
  }

  /**
   * Update an existing word's text
   * @param {string} id 
   * @param {string} newText 
   * @returns {{success: boolean, message?: string}}
   */
  updateWordText(id, newText) {
    const trimmed = (newText || '').trim();
    if (!trimmed) {
      return { success: false, message: 'Il testo della parola non può essere vuoto.' };
    }
    if (this.isDuplicate(trimmed, id)) {
      return { success: false, message: `Una parola chiamata "${trimmed}" è già presente.` };
    }

    const word = this.words.find(w => w.id === id);
    if (!word) {
      return { success: false, message: 'Parola non trovata.' };
    }

    word.text = trimmed;
    this.saveWords();
    return { success: true };
  }

  /**
   * Toggle active state of a word
   * @param {string} id 
   * @returns {boolean} New active state
   */
  toggleWordActive(id) {
    const word = this.words.find(w => w.id === id);
    if (word) {
      word.active = !word.active;
      this.saveWords();
      return word.active;
    }
    return false;
  }

  /**
   * Delete a word by ID
   * @param {string} id 
   * @returns {boolean}
   */
  deleteWord(id) {
    const index = this.words.findIndex(w => w.id === id);
    if (index !== -1) {
      this.words.splice(index, 1);
      this.saveWords();
      return true;
    }
    return false;
  }

  /**
   * Filter words by query
   * @param {string} query 
   * @returns {Array} Filtered list
   */
  search(query) {
    const q = (query || '').trim().toLowerCase();
    if (!q) return this.words;
    return this.words.filter(w => w.text.toLowerCase().includes(q));
  }
}

// ============================================================================
// GAME STATS MANAGER
// ============================================================================

class StatsManager {
  static load() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STATS);
      return data ? JSON.parse(data) : { gamesPlayed: 0, highScore: 0, totalGuessed: 0 };
    } catch (_) {
      return { gamesPlayed: 0, highScore: 0, totalGuessed: 0 };
    }
  }

  static recordGame(correctCount) {
    try {
      const stats = StatsManager.load();
      stats.gamesPlayed = (stats.gamesPlayed || 0) + 1;
      stats.highScore = Math.max(stats.highScore || 0, correctCount);
      stats.totalGuessed = (stats.totalGuessed || 0) + correctCount;
      stats.lastPlayed = new Date().toISOString();
      localStorage.setItem(STORAGE_KEYS.STATS, JSON.stringify(stats));
      return stats;
    } catch (err) {
      console.warn('Impossibile salvare le statistiche:', err);
      return null;
    }
  }
}

// ============================================================================
// SETTINGS MANAGER
// Persists user preferences (e.g. round duration) in LocalStorage
// ============================================================================

class SettingsManager {
  static load() {
    const defaults = { roundDuration: GAME_CONFIG.ROUND_DURATION_SEC };
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      if (!data) return defaults;
      const parsed = JSON.parse(data);
      return { ...defaults, ...parsed };
    } catch (_) {
      return defaults;
    }
  }

  static save(settings) {
    try {
      const merged = { ...SettingsManager.load(), ...settings };
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(merged));
      return merged;
    } catch (err) {
      console.warn('Impossibile salvare le impostazioni:', err);
      return SettingsManager.load();
    }
  }

  static clampDuration(seconds) {
    const n = parseInt(seconds, 10);
    if (Number.isNaN(n)) return GAME_CONFIG.ROUND_DURATION_SEC;
    return Math.min(GAME_CONFIG.MAX_DURATION_SEC, Math.max(GAME_CONFIG.MIN_DURATION_SEC, n));
  }
}

// ============================================================================
// HIGH-PRECISION GAME TIMER
// Uses Date.now() for drift-free timing & requestAnimationFrame for smooth display
// ============================================================================

class AccurateTimer {
  /**
   * @param {number} durationSeconds 
   * @param {Function} onTick Callback(secondsRemaining, fractionRemaining)
   * @param {Function} onComplete Callback()
   */
  constructor(durationSeconds, onTick, onComplete) {
    this.durationMs = durationSeconds * 1000;
    this.onTick = onTick;
    this.onComplete = onComplete;
    this.endTime = null;
    this.rafId = null;
    this.isRunning = false;
    this.isPaused = false;
    this.pauseRemainingMs = null;
    this.lastSecond = null;

    // Handle background tab switching gracefully
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  }

  /**
   * Update the round duration (used when the user changes the time setting)
   * @param {number} durationSeconds 
   */
  setDuration(durationSeconds) {
    this.durationMs = durationSeconds * 1000;
  }

  start() {
    this.stop();
    this.isRunning = true;
    this.isPaused = false;
    this.pauseRemainingMs = null;
    this.endTime = Date.now() + this.durationMs;
    this.lastSecond = Math.ceil(this.durationMs / 1000);

    // Initial immediate tick
    this.onTick(this.lastSecond, 1.0);
    this.scheduleFrame();
  }

  /**
   * Freeze the countdown without resetting it
   */
  pause() {
    if (!this.isRunning || this.isPaused) return;
    this.isPaused = true;
    this.pauseRemainingMs = Math.max(0, this.endTime - Date.now());
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  /**
   * Resume the countdown after a pause
   */
  resume() {
    if (!this.isRunning || !this.isPaused) return;
    this.isPaused = false;
    this.endTime = Date.now() + this.pauseRemainingMs;
    this.pauseRemainingMs = null;
    this.scheduleFrame();
  }

  /**
   * Schedule the next animation frame tick
   */
  scheduleFrame() {
    const step = () => {
      if (!this.isRunning || this.isPaused) return;

      const now = Date.now();
      const remainingMs = Math.max(0, this.endTime - now);
      const remainingSec = Math.ceil(remainingMs / 1000);

      if (remainingSec !== this.lastSecond || remainingMs === 0) {
        this.lastSecond = remainingSec;
        this.onTick(remainingSec, remainingMs / this.durationMs);
      }

      if (remainingMs <= 0) {
        this.stop();
        if (typeof this.onComplete === 'function') {
          this.onComplete();
        }
      } else {
        this.rafId = requestAnimationFrame(step);
      }
    };

    this.rafId = requestAnimationFrame(step);
  }

  stop() {
    this.isRunning = false;
    this.isPaused = false;
    this.pauseRemainingMs = null;
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }

  handleVisibilityChange() {
    if (!this.isRunning || !this.endTime || this.isPaused) return;

    const now = Date.now();
    const remainingMs = Math.max(0, this.endTime - now);

    if (remainingMs <= 0) {
      this.stop();
      if (typeof this.onComplete === 'function') {
        this.onComplete();
      }
    } else {
      // Refresh current display instantly on resume
      const sec = Math.ceil(remainingMs / 1000);
      this.lastSecond = sec;
      this.onTick(sec, remainingMs / this.durationMs);
    }
  }

  destroy() {
    this.stop();
    document.removeEventListener('visibilitychange', this.handleVisibilityChange);
  }
}

// ============================================================================
// GAME ENGINE CLASS
// ============================================================================

class GameEngine {
  constructor(wordManager, uiManager) {
    this.wordManager = wordManager;
    this.ui = uiManager;

    this.deck = [];
    this.currentIndex = 0;
    this.score = {
      correct: 0,
      wrong: 0,
      skipped: 0,
    };
    this.history = []; // Array of { text: string, status: 'correct'|'wrong'|'skipped' }

    this.isGameActive = false;
    this.isActionLocked = false;
    this.isIntermission = false;
    this.intermissionTimer = null;

    this.settings = SettingsManager.load();

    this.timer = new AccurateTimer(
      this.settings.roundDuration,
      (sec, fraction) => this.ui.updateTimer(sec, fraction),
      () => this.endGame()
    );
  }

  /**
   * Start a new 60-second game round
   * @returns {boolean} Success
   */
  start() {
    const activeWords = this.wordManager.getActiveWords();

    if (activeWords.length === 0) {
      this.ui.showNotification('Attiva o aggiungi almeno una parola prima di giocare!', 'warning');
      return false;
    }

    // Reset game state
    this.deck = shuffleArray(activeWords);
    this.currentIndex = 0;
    this.score = { correct: 0, wrong: 0, skipped: 0 };
    this.history = [];
    this.isGameActive = true;
    this.isActionLocked = false;
    this.isIntermission = false;

    // Apply the configured round duration
    this.settings = SettingsManager.load();
    this.timer.setDuration(this.settings.roundDuration);

    // Switch screen & prepare UI
    this.ui.showScreen('game-screen');
    this.ui.setGameButtonsEnabled(true);
    this.ui.updateGameScore(0);
    this.ui.hideIntermission();
    this.displayCurrentWord();

    // Start timer
    this.timer.start();
    triggerHaptic(50);
    return true;
  }

  /**
   * Freeze the timer for a few seconds so players can prepare the next round
   */
  startIntermission() {
    if (!this.isGameActive) return;

    this.isIntermission = true;
    this.isActionLocked = true;
    this.timer.pause();
    this.ui.setGameButtonsEnabled(false);

    let remaining = GAME_CONFIG.INTERMISSION_SEC;
    this.ui.showIntermission(remaining);

    this.intermissionTimer = setInterval(() => {
      remaining -= 1;
      if (remaining > 0) {
        this.ui.showIntermission(remaining);
      } else {
        this.endIntermission();
      }
    }, 1000);
  }

  /**
   * Resume the game after the intermission freeze
   */
  endIntermission() {
    clearInterval(this.intermissionTimer);
    this.intermissionTimer = null;
    this.isIntermission = false;
    this.isActionLocked = false;
    this.ui.hideIntermission();

    if (this.isGameActive) {
      this.ui.setGameButtonsEnabled(true);
      this.timer.resume();
    }
  }

  /**
   * Display the word at current index or finish deck early if needed
   */
  displayCurrentWord() {
    if (this.currentIndex < this.deck.length) {
      const current = this.deck[this.currentIndex];
      this.ui.updateCurrentWord(current.text);
    } else {
      // Out of words in active deck
      this.endGame();
    }
  }

  /**
   * Process user action with debounce safety
   * @param {'correct' | 'wrong' | 'skip'} action 
   */
  handleAction(action) {
    if (!this.isGameActive || this.isActionLocked || this.isIntermission) return;

    // Lock interactions briefly to prevent double taps
    this.isActionLocked = true;

    if (this.currentIndex >= this.deck.length) {
      this.endGame();
      return;
    }

    const currentWord = this.deck[this.currentIndex];

    switch (action) {
      case 'correct':
        this.score.correct += 1;
        this.history.push({ text: currentWord.text, status: 'correct' });
        triggerHaptic(40);
        this.ui.animateCard('correct');
        break;

      case 'wrong':
        this.score.wrong += 1;
        this.history.push({ text: currentWord.text, status: 'wrong' });
        triggerHaptic([30, 40, 30]);
        this.ui.animateCard('wrong');
        break;

      case 'skip':
        this.score.skipped += 1;
        this.history.push({ text: currentWord.text, status: 'skipped' });
        triggerHaptic(20);
        this.ui.animateCard('skip');
        break;
    }

    this.ui.updateGameScore(this.score.correct);
    this.currentIndex++;
    this.displayCurrentWord();

    // Freeze the timer so players can prepare the next turn
    this.startIntermission();
  }

  /**
   * End game round, lock controls, record stats, and show results
   */
  endGame() {
    if (!this.isGameActive) return;

    this.isGameActive = false;
    clearInterval(this.intermissionTimer);
    this.intermissionTimer = null;
    this.isIntermission = false;
    this.timer.stop();
    this.ui.hideIntermission();
    this.ui.setGameButtonsEnabled(false);
    triggerHaptic([60, 60, 100]);

    // Record stats
    StatsManager.recordGame(this.score.correct);

    // Render results
    this.ui.renderResults({
      total: this.score.correct,
      correct: this.score.correct,
      wrong: this.score.wrong,
      skipped: this.score.skipped,
      history: this.history,
    });

    this.ui.showScreen('results-screen');
  }

  /**
   * Clean cancellation if user returns home during an active match
   */
  abort() {
    this.isGameActive = false;
    clearInterval(this.intermissionTimer);
    this.intermissionTimer = null;
    this.isIntermission = false;
    this.timer.stop();
    this.ui.hideIntermission();
    this.ui.setGameButtonsEnabled(false);
  }
}

// ============================================================================
// UI MANAGER CLASS
// Handles DOM queries, event bindings, and reactive screen updates
// ============================================================================

class UIManager {
  constructor(wordManager) {
    this.wordManager = wordManager;
    this.gameEngine = null; // Injected after initialization
    this.editingWordId = null; // Legacy inline edit
    this.editingModalWordId = null; // Add/edit modal targeted word
    this.deletePendingId = null; // Delete confirmation target

    this.cacheElements();
    this.bindEvents();
    this.updateWordCount();
  }

  setEngine(engine) {
    this.gameEngine = engine;
  }

  /**
   * Cache all relevant DOM elements safely
   */
  cacheElements() {
    this.elements = {
      // Screens
      screens: {
        home: document.getElementById('home-screen'),
        game: document.getElementById('game-screen'),
        results: document.getElementById('results-screen'),
        words: document.getElementById('words-screen'),
      },

      // Game Screen
      timerDisplay: document.getElementById('timer-display'),
      timerBox: document.getElementById('timer-box'),
      timerBar: document.getElementById('timer-bar'),
      currentWord: document.getElementById('current-word'),
      gameScore: document.getElementById('game-score'),
      feedbackOverlay: document.getElementById('game-feedback-overlay'),
      btnCorrect: document.getElementById('btn-correct'),
      btnWrong: document.getElementById('btn-wrong'),
      btnSkip: document.getElementById('btn-skip'),
      btnExitGame: document.getElementById('btn-exit-game'),

      // Navigation & Actions
      btnStartGame: document.getElementById('btn-start-game'),
      btnManageWords: document.getElementById('btn-manage-words'),
      btnBackHome: document.getElementById('btn-back-home'),
      btnHome: document.getElementById('btn-home'),
      btnReplay: document.getElementById('btn-replay'),

      // Word Management
      wordList: document.getElementById('word-list'),
      wordListEmpty: document.getElementById('word-list-empty'),
      wordCount: document.getElementById('word-count'),
      searchInput: document.getElementById('search-input'),
      btnClearSearch: document.getElementById('btn-clear-search'),
      btnEnableAll: document.getElementById('btn-enable-all'),
      btnDisableAll: document.getElementById('btn-disable-all'),
      btnAddWord: document.getElementById('btn-add-word'),

      // Results Screen
      finalScore: document.getElementById('final-score'),
      resultsRating: document.getElementById('results-rating'),
      statCorrect: document.getElementById('stat-correct-count'),
      statWrong: document.getElementById('stat-wrong-count'),
      statSkip: document.getElementById('stat-skip-count'),
      resultsWordList: document.getElementById('results-word-list'),

      // Home
      homeWordCount: document.getElementById('home-word-count'),

      // Modals & Toast
      wordModal: document.getElementById('word-modal'),
      modalTitle: document.getElementById('modal-title'),
      modalWordInput: document.getElementById('modal-word-input'),
      modalError: document.getElementById('modal-error'),
      modalCancel: document.getElementById('modal-cancel'),
      modalConfirm: document.getElementById('modal-confirm'),
      modalClose: document.getElementById('modal-close'),
      deleteModal: document.getElementById('delete-modal'),
      deleteModalMessage: document.getElementById('delete-modal-message'),
      deleteCancel: document.getElementById('delete-cancel'),
      deleteCancelTop: document.getElementById('delete-cancel-top'),
      deleteConfirm: document.getElementById('delete-confirm'),
      toast: document.getElementById('toast'),
      toastMessage: document.getElementById('toast-message'),

      // Intermission & Time settings
      intermissionOverlay: document.getElementById('intermission-overlay'),
      intermissionCount: document.getElementById('intermission-count'),
      btnSettings: document.getElementById('btn-settings'),
      timeModal: document.getElementById('time-modal'),
      timeInput: document.getElementById('time-input'),
      timeModalClose: document.getElementById('time-modal-close'),
      timeModalCancel: document.getElementById('time-modal-cancel'),
      timeModalSave: document.getElementById('time-modal-save'),
    };
  }

  /**
   * Switch between screens using the 'active' CSS class
   * @param {'home-screen' | 'game-screen' | 'results-screen' | 'words-screen'} screenId 
   */
  showScreen(screenId) {
    const screenMap = {
      'home-screen': this.elements.screens.home,
      'game-screen': this.elements.screens.game,
      'results-screen': this.elements.screens.results,
      'words-screen': this.elements.screens.words,
    };

    Object.entries(screenMap).forEach(([id, element]) => {
      if (element) {
        if (id === screenId) {
          element.classList.add('active');
        } else {
          element.classList.remove('active');
        }
      }
    });

    // Screen specific side-effects
    if (screenId === 'home-screen') {
      this.updateWordCount();
    } else if (screenId === 'words-screen') {
      this.renderWordsList();
      this.updateWordCount();
    }
  }

  /**
   * Update start button availability and word count indicators
   */
  updateWordCount() {
    const { active, total } = this.wordManager.getCounts();

    if (this.elements.wordCount) {
      this.elements.wordCount.textContent = `${active} / ${total}`;
    }

    if (this.elements.homeWordCount) {
      const duration = SettingsManager.load().roundDuration;
      this.elements.homeWordCount.innerHTML = `<strong>${active}</strong> parole attive su <strong>${total}</strong> · ⏱️ <strong>${duration}s</strong>`;
    }

    if (this.elements.btnStartGame) {
      const isDisabled = active === 0;
      this.elements.btnStartGame.disabled = isDisabled;
      this.elements.btnStartGame.classList.toggle('is-disabled', isDisabled);
      if (isDisabled) {
        this.elements.btnStartGame.setAttribute('title', 'Attiva o aggiungi almeno una parola per iniziare');
      } else {
        this.elements.btnStartGame.removeAttribute('title');
      }
    }
  }

  /**
   * Update timer display cleanly
   * @param {number} secondsRemaining 
   * @param {number} fractionRemaining 
   */
  updateTimer(secondsRemaining, fractionRemaining) {
    if (this.elements.timerDisplay) {
      this.elements.timerDisplay.textContent = secondsRemaining;
    }

    if (this.elements.timerBar) {
      this.elements.timerBar.style.width = `${Math.max(0, fractionRemaining * 100)}%`;
    }

    const box = this.elements.timerBox;
    if (!box) return;
    box.classList.remove('timer--warning', 'timer--danger');
    if (secondsRemaining <= 5) {
      box.classList.add('timer--danger');
    } else if (secondsRemaining <= 15) {
      box.classList.add('timer--warning');
    }
  }

  /**
   * Update the in-game score pill
   * @param {number} value 
   */
  updateGameScore(value) {
    if (this.elements.gameScore) {
      this.elements.gameScore.textContent = value;
    }
  }

  /**
   * Update the active word card
   * @param {string} text 
   */
  updateCurrentWord(text) {
    if (!this.elements.currentWord) return;
    this.elements.currentWord.textContent = text || '...';
  }

  /**
   * Visual feedback animation for action buttons
   * @param {'correct' | 'wrong' | 'skip'} type 
   */
  animateCard(type) {
    const target = this.elements.currentWord;
    const animClass = `word--anim-${type}`;

    if (target) {
      target.classList.remove('word--anim-correct', 'word--anim-wrong', 'word--anim-skip');
      void target.offsetWidth;
      target.classList.add(animClass);
      setTimeout(() => target.classList.remove(animClass), 440);
    }

    const overlay = this.elements.feedbackOverlay;
    if (overlay) {
      overlay.classList.remove('flash-correct', 'flash-wrong');
      void overlay.offsetWidth;
      if (type === 'correct') overlay.classList.add('flash-correct');
      else if (type === 'wrong') overlay.classList.add('flash-wrong');
      setTimeout(() => overlay.classList.remove('flash-correct', 'flash-wrong'), 180);
    }
  }

  /**
   * Enable or disable game action buttons
   * @param {boolean} enabled 
   */
  setGameButtonsEnabled(enabled) {
    const btns = [this.elements.btnCorrect, this.elements.btnWrong, this.elements.btnSkip];
    btns.forEach(btn => {
      if (btn) {
        btn.disabled = !enabled;
      }
    });
  }

  /**
   * Render word management list with search, active toggles, inline edit, and delete
   * @param {string} searchQuery 
   */
  renderWordsList(searchQuery = '') {
    if (!this.elements.wordList) return;

    const list = this.wordManager.search(searchQuery);
    this.elements.wordList.innerHTML = '';

    if (this.elements.wordListEmpty) {
      this.elements.wordListEmpty.style.display = list.length === 0 ? 'flex' : 'none';
    }

    if (list.length === 0) {
      return;
    }

    const fragment = document.createDocumentFragment();

    list.forEach(word => {
      const li = document.createElement('li');
      li.className = `word-item ${word.active ? 'is-active' : 'is-inactive'}`;
      li.dataset.id = word.id;

      if (this.editingWordId === word.id) {
        // INLINE EDIT MODE
        li.classList.add('is-editing');
        li.innerHTML = `
          <div class="word-edit-form">
            <input type="text" class="word-edit-input" value="${escapeHTML(word.text)}" maxlength="40" autofocus>
            <div class="word-edit-actions">
              <button type="button" class="btn-word-action btn-edit" data-action="save-edit" title="Salva">✓</button>
              <button type="button" class="btn-word-action btn-delete" data-action="cancel-edit" title="Annulla">✕</button>
            </div>
          </div>
        `;
      } else {
        // NORMAL VIEW MODE
        li.innerHTML = `
          <div class="word-item-info">
            <span class="word-item-title word-item-text">${escapeHTML(word.text)}</span>
          </div>
          <div class="word-item-actions">
            <label class="toggle-switch" title="${word.active ? 'Disattiva parola' : 'Attiva parola'}">
              <input type="checkbox" class="word-checkbox" ${word.active ? 'checked' : ''} data-action="toggle">
              <span class="toggle-slider"></span>
            </label>
            <button type="button" class="btn-word-action btn-edit" data-action="start-edit" aria-label="Modifica parola" title="Modifica">✎</button>
            <button type="button" class="btn-word-action btn-delete" data-action="delete" aria-label="Elimina parola" title="Elimina">🗑</button>
          </div>
        `;
      }

      fragment.appendChild(li);
    });

    this.elements.wordList.appendChild(fragment);
  }

  /**
   * Compute a fun rating label based on the final score
   * @param {number} correct 
   * @returns {string}
   */
  getRatingLabel(correct) {
    if (correct >= 20) return '🏆 Da record!'; 
    if (correct >= 15) return '🔥 Strepitoso!';
    if (correct >= 10) return '👏 Ottimo lavoro!';
    if (correct >= 5) return '💪 Buon inizio!';
    return '🌱 Continua ad allenarti!';
  }

  /**
   * Render game results summary and word outcome history
   * @param {object} results 
   */
  renderResults(results) {
    if (this.elements.finalScore) this.elements.finalScore.textContent = results.total;
    if (this.elements.statCorrect) this.elements.statCorrect.textContent = results.correct;
    if (this.elements.statWrong) this.elements.statWrong.textContent = results.wrong;
    if (this.elements.statSkip) this.elements.statSkip.textContent = results.skipped;

    if (this.elements.resultsRating) {
      this.elements.resultsRating.textContent = this.getRatingLabel(results.correct);
    }

    if (!this.elements.resultsWordList) return;

    this.elements.resultsWordList.innerHTML = '';

    if (!results.history || results.history.length === 0) {
      const emptyLi = document.createElement('li');
      emptyLi.className = 'results-empty';
      emptyLi.textContent = 'Nessuna parola giocata in questo turno.';
      this.elements.resultsWordList.appendChild(emptyLi);
      return;
    }

    const fragment = document.createDocumentFragment();

    results.history.forEach(item => {
      const li = document.createElement('li');
      li.className = `result-item result-status-${item.status}`;

      const statusLabels = {
        correct: 'Corretto',
        wrong: 'Sbagliato',
        skipped: 'Saltato',
      };

      li.innerHTML = `
        <span class="result-word-text">${escapeHTML(item.text)}</span>
        <span class="result-badge badge-${item.status}">${statusLabels[item.status] || item.status}</span>
      `;
      fragment.appendChild(li);
    });

    this.elements.resultsWordList.appendChild(fragment);
  }

  /**
   * Open the add/edit word modal
   * @param {object|null} word Existing word for edit mode
   */
  openWordModal(word = null) {
    if (!this.elements.wordModal) return;
    this.editingModalWordId = word ? word.id : null;
    if (this.elements.modalTitle) {
      this.elements.modalTitle.textContent = word ? 'Modifica parola' : 'Aggiungi parola';
    }
    if (this.elements.modalWordInput) {
      this.elements.modalWordInput.value = word ? word.text : '';
    }
    if (this.elements.modalError) {
      this.elements.modalError.style.display = 'none';
      this.elements.modalError.textContent = '';
    }
    this.elements.wordModal.classList.add('active');
    setTimeout(() => this.elements.modalWordInput && this.elements.modalWordInput.focus(), 250);
  }

  /**
   * Close the add/edit word modal
   */
  closeWordModal() {
    if (this.elements.wordModal) {
      this.elements.wordModal.classList.remove('active');
    }
    this.editingModalWordId = null;
  }

  /**
   * Validate and commit the word from the modal input
   */
  confirmWordModal() {
    const input = this.elements.modalWordInput;
    if (!input) return;
    const value = input.value;

    const res = this.editingModalWordId
      ? this.wordManager.updateWordText(this.editingModalWordId, value)
      : this.wordManager.addWord(value);

    if (!res.success) {
      if (this.elements.modalError) {
        this.elements.modalError.textContent = res.message;
        this.elements.modalError.style.display = 'block';
      }
      triggerHaptic([30, 20, 30]);
      return;
    }

    this.closeWordModal();
    const currentSearch = this.elements.searchInput ? this.elements.searchInput.value : '';
    this.renderWordsList(currentSearch);
    this.updateWordCount();
    triggerHaptic(20);
  }

  /**
   * Show a floating toast notification
   * @param {string} msg 
   * @param {'info' | 'warning' | 'error' | 'success'} type 
   */
  showNotification(msg, type = 'info') {
    if (!this.elements.toast || !this.elements.toastMessage) {
      return;
    }
    this.elements.toastMessage.textContent = msg;
    this.elements.toast.className = `toast toast--${type} show`;
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      this.elements.toast.classList.remove('show');
    }, 2600);
  }

  /**
   * Open the delete confirmation modal
   * @param {string} wordId 
   */
  openDeleteModal(wordId) {
    if (!this.elements.deleteModal) return;
    this.deletePendingId = wordId;
    const word = this.wordManager.words.find(w => w.id === wordId);
    if (this.elements.deleteModalMessage) {
      this.elements.deleteModalMessage.textContent = word
        ? `Vuoi eliminare "${word.text}"?`
        : 'Vuoi eliminare questa parola?';
    }
    this.elements.deleteModal.classList.add('active');
  }

  /**
   * Close the delete confirmation modal
   */
  closeDeleteModal() {
    if (this.elements.deleteModal) {
      this.elements.deleteModal.classList.remove('active');
    }
    this.deletePendingId = null;
  }

  /**
   * Commit the pending deletion
   */
  confirmDeleteModal() {
    if (this.deletePendingId) {
      this.wordManager.deleteWord(this.deletePendingId);
      this.updateWordCount();
      const currentSearch = this.elements.searchInput ? this.elements.searchInput.value : '';
      this.renderWordsList(currentSearch);
      triggerHaptic([30, 20]);
    }
    this.closeDeleteModal();
  }

  /**
   * Show the intermission countdown overlay
   * @param {number} seconds 
   */
  showIntermission(seconds) {
    if (!this.elements.intermissionOverlay) return;
    if (this.elements.intermissionCount) {
      this.elements.intermissionCount.textContent = seconds;
    }
    this.elements.intermissionOverlay.classList.add('active');
  }

  /**
   * Hide the intermission countdown overlay
   */
  hideIntermission() {
    if (this.elements.intermissionOverlay) {
      this.elements.intermissionOverlay.classList.remove('active');
    }
  }

  /**
   * Open the time settings modal
   */
  openTimeModal() {
    if (!this.elements.timeModal) return;
    const settings = SettingsManager.load();
    if (this.elements.timeInput) {
      this.elements.timeInput.value = settings.roundDuration;
    }
    this.elements.timeModal.classList.add('active');
  }

  /**
   * Close the time settings modal
   */
  closeTimeModal() {
    if (this.elements.timeModal) {
      this.elements.timeModal.classList.remove('active');
    }
  }

  /**
   * Persist the chosen round duration
   */
  confirmTimeModal() {
    if (!this.elements.timeInput) return;
    const seconds = SettingsManager.clampDuration(this.elements.timeInput.value);
    SettingsManager.save({ roundDuration: seconds });
    if (this.elements.timeInput) this.elements.timeInput.value = seconds;
    this.closeTimeModal();
    if (this.gameEngine) this.gameEngine.settings = { roundDuration: seconds };
    this.updateWordCount();
    this.showNotification(`Durata impostata a ${seconds} secondi`, 'success');
  }

  /**
   * Setup all event listeners (buttons, inputs, delegation)
   */
  bindEvents() {
    // 1. Navigation events
    if (this.elements.btnStartGame) {
      this.elements.btnStartGame.addEventListener('click', () => {
        if (this.gameEngine) this.gameEngine.start();
      });
    }

    if (this.elements.btnManageWords) {
      this.elements.btnManageWords.addEventListener('click', () => {
        this.showScreen('words-screen');
      });
    }

    if (this.elements.btnBackHome) {
      this.elements.btnBackHome.addEventListener('click', () => {
        if (this.gameEngine) this.gameEngine.abort();
        this.editingWordId = null;
        this.showScreen('home-screen');
      });
    }

    if (this.elements.btnHome) {
      this.elements.btnHome.addEventListener('click', () => {
        if (this.gameEngine) this.gameEngine.abort();
        this.showScreen('home-screen');
      });
    }

    if (this.elements.btnReplay) {
      this.elements.btnReplay.addEventListener('click', () => {
        if (this.gameEngine) this.gameEngine.start();
      });
    }

    // 2. Gameplay action buttons
    if (this.elements.btnCorrect) {
      this.elements.btnCorrect.addEventListener('click', () => {
        if (this.gameEngine) this.gameEngine.handleAction('correct');
      });
    }

    if (this.elements.btnWrong) {
      this.elements.btnWrong.addEventListener('click', () => {
        if (this.gameEngine) this.gameEngine.handleAction('wrong');
      });
    }

    if (this.elements.btnSkip) {
      this.elements.btnSkip.addEventListener('click', () => {
        if (this.gameEngine) this.gameEngine.handleAction('skip');
      });
    }

    // 3. Word creation via FAB + modal
    if (this.elements.btnAddWord) {
      this.elements.btnAddWord.addEventListener('click', () => this.openWordModal());
    }

    if (this.elements.modalConfirm) {
      this.elements.modalConfirm.addEventListener('click', () => this.confirmWordModal());
    }
    if (this.elements.modalCancel) {
      this.elements.modalCancel.addEventListener('click', () => this.closeWordModal());
    }
    if (this.elements.modalClose) {
      this.elements.modalClose.addEventListener('click', () => this.closeWordModal());
    }
    if (this.elements.modalWordInput) {
      this.elements.modalWordInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          this.confirmWordModal();
        }
      });
    }
    if (this.elements.wordModal) {
      this.elements.wordModal.addEventListener('click', (e) => {
        if (e.target === this.elements.wordModal) this.closeWordModal();
      });
    }

    // Delete confirmation modal
    if (this.elements.deleteConfirm) {
      this.elements.deleteConfirm.addEventListener('click', () => this.confirmDeleteModal());
    }
    if (this.elements.deleteCancel) {
      this.elements.deleteCancel.addEventListener('click', () => this.closeDeleteModal());
    }
    if (this.elements.deleteCancelTop) {
      this.elements.deleteCancelTop.addEventListener('click', () => this.closeDeleteModal());
    }
    if (this.elements.deleteModal) {
      this.elements.deleteModal.addEventListener('click', (e) => {
        if (e.target === this.elements.deleteModal) this.closeDeleteModal();
      });
    }

    // Exit game HUD button
    if (this.elements.btnExitGame) {
      this.elements.btnExitGame.addEventListener('click', () => {
        if (this.gameEngine) this.gameEngine.abort();
        this.showScreen('home-screen');
      });
    }

    // Bulk enable / disable
    if (this.elements.btnEnableAll) {
      this.elements.btnEnableAll.addEventListener('click', () => this.setAllWordsActive(true));
    }
    if (this.elements.btnDisableAll) {
      this.elements.btnDisableAll.addEventListener('click', () => this.setAllWordsActive(false));
    }

    // Clear search
    if (this.elements.btnClearSearch) {
      this.elements.btnClearSearch.addEventListener('click', () => {
        if (this.elements.searchInput) {
          this.elements.searchInput.value = '';
          this.elements.searchInput.focus();
        }
        this.renderWordsList('');
        this.elements.btnClearSearch.style.display = 'none';
      });
    }

    // Time settings modal
    if (this.elements.btnSettings) {
      this.elements.btnSettings.addEventListener('click', () => this.openTimeModal());
    }
    if (this.elements.timeModalSave) {
      this.elements.timeModalSave.addEventListener('click', () => this.confirmTimeModal());
    }
    if (this.elements.timeModalCancel) {
      this.elements.timeModalCancel.addEventListener('click', () => this.closeTimeModal());
    }
    if (this.elements.timeModalClose) {
      this.elements.timeModalClose.addEventListener('click', () => this.closeTimeModal());
    }
    if (this.elements.timeModal) {
      this.elements.timeModal.addEventListener('click', (e) => {
        if (e.target === this.elements.timeModal) this.closeTimeModal();
      });
      this.elements.timeModal.querySelectorAll('.time-preset').forEach(btn => {
        btn.addEventListener('click', () => {
          if (this.elements.timeInput) {
            this.elements.timeInput.value = btn.dataset.seconds;
          }
        });
      });
    }

    // 4. Word search & filtering
    if (this.elements.searchInput) {
      this.elements.searchInput.addEventListener('input', (e) => {
        this.renderWordsList(e.target.value);
        if (this.elements.btnClearSearch) {
          this.elements.btnClearSearch.style.display = e.target.value ? 'flex' : 'none';
        }
      });
    }

    // 5. Word list Event Delegation (Toggle, Edit, Delete, Save, Cancel)
    if (this.elements.wordList) {
      this.elements.wordList.addEventListener('click', (e) => {
        const target = e.target;
        const itemLi = target.closest('li.word-item');
        if (!itemLi) return;
        const wordId = itemLi.dataset.id;

        // Toggle active/inactive
        if (target.matches('[data-action="toggle"]') || target.classList.contains('word-checkbox')) {
          this.wordManager.toggleWordActive(wordId);
          this.updateWordCount();
          itemLi.classList.toggle('inactive');
          triggerHaptic(15);
          return;
        }

        // Start editing
        if (target.closest('[data-action="start-edit"]')) {
          this.editingWordId = wordId;
          const currentSearch = this.elements.searchInput ? this.elements.searchInput.value : '';
          this.renderWordsList(currentSearch);
          return;
        }

        // Save inline edit
        if (target.closest('[data-action="save-edit"]')) {
          const input = itemLi.querySelector('.word-edit-input');
          if (input) {
            const res = this.wordManager.updateWordText(wordId, input.value);
            if (!res.success) {
              this.showNotification(res.message, 'error');
              return;
            }
            this.editingWordId = null;
            const currentSearch = this.elements.searchInput ? this.elements.searchInput.value : '';
            this.renderWordsList(currentSearch);
            triggerHaptic(20);
          }
          return;
        }

        // Cancel inline edit
        if (target.closest('[data-action="cancel-edit"]')) {
          this.editingWordId = null;
          const currentSearch = this.elements.searchInput ? this.elements.searchInput.value : '';
          this.renderWordsList(currentSearch);
          return;
        }

        // Delete word
        if (target.closest('[data-action="delete"]')) {
          const word = this.wordManager.words.find(w => w.id === wordId);
          const wordName = word ? word.text : 'questa parola';
          const confirmDelete = window.confirm(`Sei sicuro di voler eliminare "${wordName}"?`);
          if (confirmDelete) {
            this.wordManager.deleteWord(wordId);
            this.updateWordCount();
            const currentSearch = this.elements.searchInput ? this.elements.searchInput.value : '';
            this.renderWordsList(currentSearch);
            triggerHaptic([30, 20]);
          }
        }
      });

      // Handle Enter key inside inline edit input
      this.elements.wordList.addEventListener('keydown', (e) => {
        if (e.target.classList.contains('word-edit-input')) {
          if (e.key === 'Enter') {
            e.preventDefault();
            const itemLi = e.target.closest('li.word-item');
            const wordId = itemLi ? itemLi.dataset.id : null;
            if (wordId) {
              const res = this.wordManager.updateWordText(wordId, e.target.value);
              if (!res.success) {
                this.showNotification(res.message, 'error');
                return;
              }
              this.editingWordId = null;
              const currentSearch = this.elements.searchInput ? this.elements.searchInput.value : '';
              this.renderWordsList(currentSearch);
            }
          } else if (e.key === 'Escape') {
            this.editingWordId = null;
            const currentSearch = this.elements.searchInput ? this.elements.searchInput.value : '';
            this.renderWordsList(currentSearch);
          }
        }
      });
    }

    // 6. Keyboard shortcuts for desktop testing & accessibility
    document.addEventListener('keydown', (e) => {
      // Ignore if user is typing in an input field
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        return;
      }

      if (this.gameEngine && this.gameEngine.isGameActive) {
        if (e.code === 'ArrowRight' || e.key === '1' || e.code === 'KeyC') {
          e.preventDefault();
          this.gameEngine.handleAction('correct');
        } else if (e.code === 'ArrowDown' || e.key === '2' || e.code === 'KeyS') {
          e.preventDefault();
          this.gameEngine.handleAction('wrong');
        } else if (e.code === 'ArrowLeft' || e.code === 'Space' || e.key === '3') {
          e.preventDefault();
          this.gameEngine.handleAction('skip');
        } else if (e.code === 'Escape') {
          this.gameEngine.abort();
          this.showScreen('home-screen');
        }
      }
    });
  }
}

// ============================================================================
// PWA INITIALIZATION & SERVICE WORKER SETUP
// ============================================================================

class App {
  static init() {
    // 1. Initialize models and views
    const wordManager = new WordManager();
    const uiManager = new UIManager(wordManager);
    const gameEngine = new GameEngine(wordManager, uiManager);
    uiManager.setEngine(gameEngine);

    // 2. Set default active screen (home)
    uiManager.showScreen('home-screen');

    // 3. Register service worker if supported for offline PWA functionality
    if ('serviceWorker' in navigator && window.location.protocol.startsWith('http')) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').catch(err => {
          // Normal during local development without sw.js
          console.debug('ServiceWorker non registrato:', err);
        });
      });
    }

    // Expose clean namespace for debugging or external extensions
    window.ThreeMentiApp = {
      wordManager,
      uiManager,
      gameEngine,
    };
  }
}

// Start application when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => App.init());
} else {
  App.init();
}
