/* 
    Steps to use firebase:

    1. Create a project on console.firebase.google.com

    2. Install firebase through commad npm install firebase

    3. Register Web app in firebase

    4. Copy firebase init config from firebase project settings and paste to a new file in src folder named firebase.init.js

    5. export default the app variable from the firebase.init.js file 

    6. import getAuth from the path 'firebase/auth' and create in App.js and import app from firebase.init.js to App.js and set imported app as a perameter of getAuth(app)
        {
            import app from "./firebase.init";
            import { getAuth } from 'firebase/auth';

            "const auth = getAuth(app)" 
        }

    7. turn on google authentication (firebase > authentication > enable google sign in)

    8. create google provider into the App() "functional component" in App.js file
        {
            const provider = new GoogleAuthProvider();
        }

    10.call signInWithPopup() and pass auth and provider as it's perameter[signInWithPopup() could be called under an event called funtion if don't want to show authenticate popup as well as the site load]. After calling it must be handled .then(if successfull) and .catch(if error)
        {
            signInWithPopup(auth,provider)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error('error',error);
            })
        }

    11. console.log(result.user) in the .then method shows authenticated user's information in the console

    12. console.error('error',error) in the .catch method shows  fail authentication error in the console

    **text under the second brackets are indicated as lines of code
*/