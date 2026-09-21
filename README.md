# 🏏 Cricket Player Selection

A responsive **Cricket Player Selection** web application built with **React, TypeScript, and Tailwind CSS**. Users can browse available cricket players, check their information and price, select players for their squad, manage their virtual coin balance, and remove selected players when needed.

The project focuses on practicing React state management, component-based architecture, TypeScript interfaces, conditional rendering, and responsive UI design.

## 🚀 Live Demo

🔗 **Live Website:** https://rahman-cricxi.netlify.app/

## 📸 Preview

```md
./src/assets/preview.png
```

## ✨ Features

- 🏏 Browse available cricket players
- 👤 View player details
  - Name
  - Country
  - Role
  - Rating
  - Batting style
  - Price
  - Player image

- 💰 Start with a virtual coin balance
- ➕ Select players for the squad
- 🚫 Maximum of 6 players can be selected
- 💵 Automatically deduct player price from the available balance
- 🔄 Refund player price when a selected player is removed
- ❌ Remove selected players
- 🔍 Detect already selected players
- ⚠️ Prevent selection when balance is insufficient
- ⚠️ Prevent selecting more than 6 players
- 🔔 Toast notifications for selection, removal, and validation
- 📱 Fully responsive design
- 📋 Separate Available Players and Selected Players views
- 🔙 Add More Player button to return to the available players section
- ⏳ Loading state using React Suspense
- 📦 Player data loaded from a JSON file

## 🛠️ Technologies Used

| Technology     | Purpose                                       |
| -------------- | --------------------------------------------- |
| React          | Building the user interface                   |
| TypeScript     | Type safety and better development experience |
| Tailwind CSS   | Responsive styling and UI design              |
| Lucide React   | Icons                                         |
| React Toastify | Toast notifications                           |
| React Suspense | Handling asynchronous player data             |
| Vite           | Development and build tool                    |

## 📂 Project Structure

```text
src/
├── assets/
│   └── logo.png
│
├── components/
│   ├── Banner.tsx
│   ├── Footer.tsx
│   ├── NavBar.tsx
│   │
│   └── players/
│       ├── Players.tsx
│       ├── AvailablePlayers.tsx
│       ├── PlayerCard.tsx
│       ├── SelectedPlayers.tsx
│       └── SelectedPlayersCard.tsx
│
├── types.ts
│
├── App.tsx
├── main.tsx
└── index.css

public/
└── players.json
```

## 🎯 Main Functionalities

### Player Data

Player information is stored in `players.json` and follows the `IPlayer` TypeScript interface.

```ts
export interface IPlayer {
  id: number;
  name: string;
  country: string;
  role: string;
  rating: number;
  battingStyle: string;
  price: number;
  image: string;
}
```

### Player Selection

Users can select a player by clicking the **Choose Player** button.

When a player is selected:

1. The player's price is deducted from the available coins.
2. The player is added to the selected players list.
3. The button changes to **Selected**.
4. A success notification is displayed.

### Maximum Players

The squad can contain a maximum of **6 players**.

```ts
if (selectedPlayers.length >= 6) {
  // Prevent selecting another player
}
```

Once six players have been selected, other players cannot be added.

### Balance Management

The application starts with:

```ts
const [coin, setCoin] = useState(10000);
```

When purchasing a player:

```ts
setCoin((prev) => prev - player.price);
```

When removing a player:

```ts
setCoin((prev) => prev + player.price);
```

This creates a simple virtual budget system.

### Selected Players

Selected players are stored in:

```ts
const [selectedPlayers, setSelectedPlayers] = useState<IPlayer[]>([]);
```

The selected-player section displays:

- Player image
- Player name
- Batting style
- Remove button

Users can remove a player and receive that player's price back.

## 🔄 Application Flow

```text
                    App
                     │
        ┌────────────┴────────────┐
        │                         │
     NavBar                     Banner
        │
        ▼
   Players Component
        │
        ├───────────────┐
        │               │
        ▼               ▼
 Available Players   Selected Players
        │               │
        ▼               ▼
   Player Cards    Selected Player Cards
        │               │
        │               │
        └───────┬───────┘
                ▼
        Selection State
                │
                ▼
          Coin Balance
```

## ⚛️ React Concepts Practiced

This project was built to practice several important React concepts:

### State Management

```ts
const [coin, setCoin] = useState(10000);

const [selectedPlayers, setSelectedPlayers] = useState<IPlayer[]>([]);
```

### Props

Data and state-management functions are passed between components using props.

### Conditional Rendering

The application switches between Available Players and Selected Players:

```tsx
{
  buttonType === "available" ? <AvailablePlayers /> : <SelectedPlayers />;
}
```

### Derived State

Instead of keeping a separate `isSelected` state inside every player card, selection can be determined from the selected players array:

```ts
const isSelected = selectedPlayers.some(
  (player) => player.id === currentPlayer.id,
);
```

### React `use()`

The application uses React's `use()` API to resolve the player data Promise:

```tsx
const players = use(playersPromise);
```

### Suspense

Player loading is handled with:

```tsx
<Suspense fallback={<div>Loading players...</div>}>
  <Players playersPromise={playersPromise} />
</Suspense>
```

## 📱 Responsive Design

The interface is designed to work across:

- 📱 Mobile
- 📱 Tablet
- 💻 Laptop
- 🖥️ Desktop

Tailwind CSS responsive utilities are used throughout the project.

For example:

```tsx
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
```

This changes the number of player cards according to the screen size.

## 🔔 User Feedback

The project uses **React Toastify** to provide feedback when users interact with the application.

Examples:

```text
✅ Player purchased successfully.
⚠️ Insufficient balance.
⚠️ You can select only 6 players.
```

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/your-repository-name.git
```

Go to the project directory:

```bash
cd your-repository-name
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available at the local development URL shown by Vite.

## 📦 Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 🧑‍💻 Author

**Mostafizur Rahman**

Frontend Developer | React | TypeScript | Tailwind CSS

- GitHub: [Your GitHub Profile](https://github.com/)
- LinkedIn: [Your LinkedIn Profile](https://linkedin.com/)

## 📄 License

This project was created for learning and development purposes.
