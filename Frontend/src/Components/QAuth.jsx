
import { Button } from 'reactstrap'
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../../Firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../Redux/User/Userslice';
import { useNavigate } from 'react-router-dom';
export default function QAuth() {

    const auth = getAuth(app)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handlegoogleclick = async () => {
        const provider = new GoogleAuthProvider()
        provider.setCustomParameters({ prompt: "select_account" })
        try {
            const resultfromgoogle = await signInWithPopup(auth, provider)
            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: resultfromgoogle.user.displayName,
                    email: resultfromgoogle.user.email,
                    googlePhoto: resultfromgoogle.user.photoURL,
                }),
            })
            const data = await res.json()
            if (res.ok) {
                dispatch(signInSuccess(data))
                navigate('/')
            }

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Button style={{ width: '100%', marginTop: '20px', color: 'white' }} type='button' onClick={handlegoogleclick} >
                <AiFillGoogleCircle className='looginwithgooglebtn' />
                Login with google</Button>
        </>
    )
}
