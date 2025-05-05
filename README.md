````markdown
deployed project link: https://slack-clone-daa2d.web.app/
# React Firebase Google Login

A simple React app demonstrating how to implement Google Sign-In using Firebase Authentication (modular SDK).

## Screenshots
![image](https://github.com/user-attachments/assets/7adbfc68-e5b4-4027-9844-dce499a35fe8)
![image](https://github.com/user-attachments/assets/faa553ad-4ef2-4b5a-a7ed-83959127dddf)


## Features

- Google Sign-In using Firebase Auth
- Responsive, styled login screen using MUI and Styled Components
- Firebase modular SDK (v9+)

## Technologies Used

- React
- Firebase Authentication
- Material UI (MUI)
- Styled Components

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Firebase project created at [https://console.firebase.google.com](https://console.firebase.google.com)

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/react-firebase-login.git
cd react-firebase-login
````

2. **Install dependencies:**

```bash
npm install
```

3. **Configure Firebase:**

Create a `firebase.js` file in the `src` directory and add your Firebase config:

```js
// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  appId: "YOUR_APP_ID",
  // Add other keys as needed
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
```

4. **Start the development server:**

```bash
npm start
```

The app should open in your browser at `http://localhost:3000`.

## Testing

* Click the "Sign in with Google" button on the login screen.
* Sign in using your Google account.

## Project Structure

```
src/
│
├── firebase.js           # Firebase config and initialization
├── Login.js              # Main login component
├── App.js                # App entry point
└── index.js              # ReactDOM render setup
```

## License

MIT License. See `LICENSE` file for details.

```
