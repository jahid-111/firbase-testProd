// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
// =================================================== IB
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Auth and Provider
const auth = getAuth();
const provider = new FacebookAuthProvider();
const googleAuthProvider = new GoogleAuthProvider();
// Function to handle Facebook login
const handleFacebookLogin = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    // This gives you a Facebook Access Token. You can use it to access Facebook APIs.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;

    // The signed-in user info
    const user = result.user;

    console.log("User Info:", user);
    console.log("Access Token:", accessToken);

    // Add additional user-related functionality here
  } catch (error) {
    console.error("Error during Facebook login:", error.message);
    console.error("Error Code:", error.code);
    console.error("Email of the user:", error.customData?.email);
    console.error(
      "Credential used:",
      FacebookAuthProvider.credentialFromError(error)
    );
  }
};

const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);

    const user = res.user;
    console.log(user); // re
    return user;
  } catch (error) {
    throw error;
  }
};

export { auth, signInWithGoogle };

// Call the function to trigger login when needed
// For example, attach it to a button click:
