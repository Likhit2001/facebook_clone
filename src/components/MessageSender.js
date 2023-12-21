import { Avatar } from '@material-ui/core'
import React , {useState} from 'react'
import "../Css/MessageSender.css"
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { useStateValue } from './StateProvider';
import db from "../firebase";
import firebase from 'firebase/compat/app';

function MessageSender() {
    const [{user},dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        
        // some db stuff
        db.collection("posts").add({
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username : user.displayName,
            image: imageUrl,
        });

        setInput("");
        setImageUrl("");
    };

  return (

    <div className='MessageSender'>
        <div className="MessageSender__top">
            <Avatar src={user.photoURL}/>
            <form >
                <input value={input}
                onChange = {(e) => setInput(e.target.value)}
                className='MessageSender__input'  placeholder={`Whats's on your mind. ${user.displayName} ? `}/>


                <input 
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className='MessageSender__image' placeholder='image URL(Optional)'/>

                <button onClick={handleSubmit} type="submit">
                    Hidden Submit 
                </button>
            </form>
        </div>
        <div className="MessageSender__bottom">
            <div className="MessageSender__option">
                <VideocamIcon style={{color:"red"}}/>
                <h4>Live Video</h4>
            </div>
            <div className="MessageSender__option">
                <PhotoLibraryIcon style={{color:"green"}}/>
                <h4>Photo/Video</h4>
            </div>
            <div className="MessageSender__option">
                <InsertEmoticonIcon style={{color:"yellow"}}/>
                <h4>Feeling/Activity</h4>
            </div>

        </div>
    </div>
  )
}

export default MessageSender