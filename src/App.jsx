import { useState } from "react";

const App = () => {

  let [shouldShowLanding, setShouldShowLanding] = useState(1)

  return (
    <div>
      <button onClick={shouldShowLandingFunction}>Toggle page</button>
      { shouldShowLanding ? <p>Landing</p> : <p>Home</p> }
    </div>
  );
  
}

export default App;
