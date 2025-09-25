# Word Guessing Game 🎯

[![Play Live Demo](https://img.shields.io/website?down_color=red&down_message=offline&style=for-the-badge&up_color=brightgreen&up_message=live&url=https%3A//shubhiroy.github.io/word-guessing-game/)](https://shubhiroy.github.io/word-guessing-game/)

A fun and interactive word guessing game inspired by Wordle! Test your vocabulary and deduction skills by guessing the secret word with visual feedback on each attempt.

## 🎮 How to Play

1. **Objective**: Guess the secret word within unlimited attempts
2. **Enter your guess**: Type a word with the same number of letters as the secret word
3. **Get feedback**: After each guess, the letters will be color-coded:
   - 🟢 **Green**: Letter is correct and in the right position
   - 🟡 **Yellow**: Letter is in the word but in the wrong position  
   - 🔴 **Red**: Letter is not in the word at all
4. **Keep guessing**: Use the feedback to narrow down your next guess
5. **Win**: Correctly guess the word to see a celebration animation!

## 🌟 Features

- **Dynamic word length**: Games adapt to words of different lengths (4-6 letters)
- **Real-time feedback**: Instant color coding after each guess
- **Input validation**: Ensures only valid letter combinations are accepted
- **Reset functionality**: Start a new game anytime with the reset button
- **Responsive design**: Works on desktop and mobile devices
- **Smooth animations**: Visual feedback and celebration effects

## 🚀 Getting Started

### Play Online
Simply click the **Live Demo** button above to play instantly in your browser!

### Run Locally

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/word_guessing_game.git
   cd word_guessing_game
   ```

2. **Open the game**:
   - **Option 1**: Double-click `index.html` to open in your browser
   - **Option 2**: Use a local server (recommended):
     ```bash
     # With Python
     python -m http.server 8000
     
     # With Node.js
     npx serve .
     
     # With Live Server extension in VS Code
     Right-click index.html → "Open with Live Server"
     ```

3. **Start playing**: Navigate to `http://localhost:8000` if using a local server

## 🛠️ Technical Details

### Built With
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with animations and responsive design
- **Vanilla JavaScript**: Game logic and DOM manipulation

### Project Structure
```
word_guessing_game/
├── index.html          # Main HTML structure
├── script.js           # Game logic and user interactions
├── style.css           # Styling and animations
├── word.js            # Word database and selection logic
└── README.md          # Project documentation
```

### Key Components
- **Word Database**: 25+ carefully selected words of varying difficulty
- **Game Engine**: Handles guess validation, feedback generation, and win conditions
- **UI Controller**: Manages dynamic board creation and user interactions
- **Animation System**: Provides visual feedback and celebration effects

## 🎨 Game Screenshots

*Game Start*
```
Word Guessing Game
Guess the 5-letter word!
┌─┬─┬─┬─┬─┐
│ │ │ │ │ │
└─┴─┴─┴─┴─┘
```

*After Guesses*
```
┌─┬─┬─┬─┬─┐
│A│P│P│L│E│  ← Previous guesses with color feedback
└─┴─┴─┴─┴─┘
┌─┬─┬─┬─┬─┐
│H│O│U│S│E│
└─┴─┴─┴─┴─┘
┌─┬─┬─┬─┬─┐
│ │ │ │ │ │  ← Current guess row
└─┴─┴─┴─┴─┘
```

## 🤝 Contributing

Contributions are welcome! Here are some ways you can help:

- 🐛 **Report bugs**: Found an issue? Open a GitHub issue
- 💡 **Suggest features**: Have ideas for improvements? Let's discuss them
- 🔤 **Add words**: Expand the word database with interesting words
- 🎨 **Improve UI**: Enhance the visual design or animations
- 📱 **Mobile optimization**: Improve the mobile gaming experience

### Development Setup
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Game Tips

- **Start with common letters**: Try words with frequently used letters like E, A, R, I, O
- **Use vowel-heavy words**: Words with multiple vowels can help identify letter positions quickly
- **Pay attention to letter frequency**: English has common letter patterns you can exploit
- **Think about word structure**: Consider common prefixes, suffixes, and letter combinations

## 🏆 Challenge Yourself

- Try to guess words in the fewest attempts possible
- Time yourself to add pressure
- Play with friends and compare strategies
- Keep track of your success rate

---

**Enjoy the game! 🎉** 

*Made with ❤️ by [Your Name]. Star ⭐ this repo if you enjoyed playing!*