import React from 'react'
import { Button } from 'reactstrap'
import { AiFillGoogleCircle } from 'react-icons/ai';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { app } from '../Firebase'
export default function QAuth() {

    const auth = getAuth(app)


    const googlehandleclick = async () => {
        const Provider = new GoogleAuthProvider()
        Provider.setCustomParameters({ prompt: "select_account" })
        try {
            const resultfromgoogle = await signInWithPopup(auth, Provider)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Button style={{ width: '100%', marginTop: '20px', color: 'white' }} type='button' onClick={googlehandleclick} >
                <AiFillGoogleCircle className='looginwithgooglebtn' />
                Login with google</Button>
        </>
    )
}
