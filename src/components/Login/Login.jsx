import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../firebase/firebase.init"
import { useState } from "react";

const Login = () => {
    const [user, setUser]=useState(null);
  
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn =()=>{
        //console.log('google sign in');
        signInWithPopup(auth, provider)
        .then((result)=>{
            console.log(result.user);
            setUser(result.user);
        })
        .catch(error =>{
            console.log(error);
            setUser(null);
        })
    }


    const handleSignOut =()=>{
      signOut(auth)
      .then(()=>{
        console.log('sign out done');
        setUser(null);
      })
      .catch(error => console.log(error))
    }

    return (
        <div>
           {/* <button onClick={handleGoogleSignIn}>Login with Google</button>            
           <button onClick={handleSignOut}>Sign Out</button> */}
          
            {
                user ?
                    <button onClick={handleSignOut}>Sign Out</button>
                    :
                    <button onClick={handleGoogleSignIn}>Login with Google</button>
            }


           {user && <div>
            <h4 style={{color: 'red', margin: '20px'}}>{user.displayName}</h4>
            <p style={{color: 'blue', margin: '20px'}}>Email: {user.email}</p>
            <img src={user.photoURL}  alt=" "/>
           </div>
           
           }
        </div>
    );
};

export default Login;