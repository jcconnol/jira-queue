const Page404 = ({ location }) => (
    <div>
       <h2>No match found for <code>{location.pathname}</code></h2>
       <h3>Please click <a href="/">here</a> to go back home</h3>
    </div>
 );

 export default Page404;
