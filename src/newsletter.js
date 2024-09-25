import { app } from './firebase.js';
import { getFirestore, collection, addDoc, getDocs, where, query } from 'firebase/firestore';

const db = getFirestore(app);
const subscribers = collection(db, "subscribers");

async function subscribe(email){

    // Query to check if the email already exists
    const q = query(subscribers, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    // Check if any documents were returned
    if (!querySnapshot.empty) {
        console.log('Email already subscribed');
        return 'You are already subscribed'; // Handle as needed
    }

    // If the email doesn't exist, add a new document
    try {
        await addDoc(subscribers, { email });
        console.log('Subscription successful');
        // Edit UI
        form.querySelector('#email').value = "Subscibed Successfully, Thank You";
        form.querySelector('#email').setAttribute("disabled", "true");
        form.querySelector('#email').style.color = "#ffffff";
        form.querySelector('#email').style.backgroundColor = "rgb(0, 201, 0)";
        form.querySelector('#email').style.textAlign = "center";
        submit.style.display = "none";
        return 'Subscription successful';
    } catch (error) {
        console.error('Error subscribing user:', error);
        return 'Error subscribing, try again later';
    }
    
}

const form = document.querySelector("#newsletter form");
const submit = form.querySelector("#submit");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = form.querySelector('#email').value;
    subscribe(email).then(res => {
        alert(res);
    }).catch(err => {
        alert(err);
    });
})