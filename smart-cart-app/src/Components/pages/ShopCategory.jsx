import React from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from '../Footer/Footer';

const App = ({category}) => {
    return ( 
        <>
            <Navbar />
            <main>
                <h1>this is Shop section of {category}</h1>
            </main>
            <Footer />
        </>
     );
}
 
export default App;