import './NewsLetter.css'

const App = () => {
    return ( 
        <div className="newsletter">
            <h2>Get Exclusive Offers In Your Inbox</h2>
            <p>Subscribe to our newsletter and stay on top of fashion</p>
            <div className="subscrive">
                <input type="email" placeholder="Enter your email"/>
                <button>Subscribe</button>
            </div>
        </div>
     );
}
 
export default App;
