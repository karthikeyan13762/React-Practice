import React from 'react';
import './Header.css'
import styles from './Header.module.css'
function Header (){


    const inlieStyle={
        color:'red',
        backgroundColor:'yellow',
        padding:'10px'
    }

    return(
        <>

        <h1 style={inlieStyle}>INline style</h1>

        <h1 className={styles.bigblue}>Particular modul css</h1>


        <h1 className={styles.bigblue}>Particular NO 2 modul css</h1>
        </>
    )
}

export default Header   
