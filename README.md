# 🧮 Number Guesser Game

A fun and interactive number guessing game built with **Next.js**, **React**, and **TailwindCSS** as part of the **Web3Bridge Cohort XIV Pre-Qualification Exercise**. The player tries to guess a randomly generated secret number between 1 and 100 within a limited number of attempts.

---

## 🚀 Live Demo
👉 [View Deployed App](https://...)

---

## 🧠 Game Overview
The Number Guesser Game challenges players to test their intuition and logic by guessing the correct number within a fixed number of tries. Feedback is provided after each guess to guide the player until they either win or lose.

---

## 🎮 How to Play
1. Select a difficulty level: **Easy (15 tries)**, **Medium (10 tries)**, or **Hard (5 tries)**.
2. Enter a number between **1 and 100**.
3. Click **Guess** to submit your answer.
4. The game will tell you if your guess is *Too High*, *Too Low*, or *Correct*.
5. You have a limited number of attempts — choose wisely!
6. Once you win or lose, click **Play Again** to restart the game without reloading the page.

---

## ⚙️ Features
- ✅ Random secret number generation between 1 and 100
- ✅ Real-time feedback (*Too High*, *Too Low*, *Correct!*)
- ✅ Attempt counter with remaining guesses
- ✅ Win/Loss message display
- ✅ Restart button (without reloading the page)
- ✅ Input validation (1–100 only)
- ✅ Clean, responsive, modern UI
- ✅ Styled with **TailwindCSS** and primary color `#276100ce`
- ✅ Difficulty levels: **Easy**, **Medium**, **Hard**
- ✅ Animated feedback transitions using Tailwind utilities
- ✅ Modular React component structure for clarity and scalability

---

## 🧱 Folder Structure
```
number_guesser_game/
├── app/
│   ├── components/
│   │   ├── difficulty-select.tsx
│   │   ├── game-board.tsx
│   │   ├── guess-feedback.tsx
│   │   ├── guess-history.tsx
│   │   ├── header.tsx
│   │   └── result-modal.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
├── tsconfig.json
├── next.config.ts
├── eslint.config.mjs
├── README.md
```

---

## 🧩 Tech Stack
- **Next.js** – React framework for production
- **React.js** – Frontend library
- **TailwindCSS** – Styling and layout
- **TypeScript** – For type safety
- **Vercel** – Deployment

---

## 🧪 Running Locally

### 1. Clone this repository
```bash
git clone https://github.com/your-username/number-guesser-game.git
cd number-guesser-game
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

The app will run locally at [http://localhost:3000](http://localhost:3000) (or another port if 3000 is busy).

---

## 🛠️ Additional Setup

If you encounter errors related to missing CSS modules (e.g., `tw-animate-css`), install them:
```bash
npm install tw-animate-css
```

---

## 🧑‍💻 Contributing
Contributions are welcome! Please fork the repository, make your changes, and submit a pull request.

---

## 📄 License
This project is licensed under the MIT License.

---

## 🙏 Credits
- Built by EDOHWAREZ for Web3Bridge Cohort XIV
- Inspired by classic number guessing games

---
