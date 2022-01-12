import { useState } from "react";

// {pageName === "Landing" && <div>Landing component</div>} | ha true az 1. fele, akkor && utánit adja
// {pageName === "Landing" || <div>This is not the landing page</div>} | ha false az 1. fele, akkor || utánit adja (ugyanaz, mintha !== && lenne)

const App = () => {
  
  const [ shouldShowLanding, setShouldShowLanding ] = useState(true);
  const [ pageName, setPageName ] = useState("Home");
  const [ inputValue, setInputValue ] = useState("");

  const isValid = inputValue.length >= 3;

  const list = [
    {
      "name": "chair",
      "gotLegs": true,
      "color": "black",
    },
    {
      "name": "bed",
      "gotLegs": true,
      "color": "white",
    },
    {
      "name": "pillow",
      "gotLegs": false,
      "color": "green",
    },
    {
      "name": "wardrobe",
      "gotLegs": true,
      "color": "white",
    },
    {
      "name": "table",
      "gotLegs": true,
      "color": "white",
    },
  ]

  const listItems = list.map((d) => <li key={d.name}>The item is a {d.name}. It got legs: {d.gotLegs.toString()}. It's color is {d.color}.</li> )

  const cars = [
    {brand: "Toyota", model: "yaris", topSpeed: "190km/h"},
    {brand: "Mercedes", model: "C63", topSpeed: "260km/h"},
    {brand: "Mazda", model: "6", topSpeed: "210km/h"},
    {brand: "Honda", model: "Civic", topSpeed: "200km/h"},
    {brand: "Audi", model: "A4", topSpeed: "220km/h"},
  ];

  console.log("render");
  console.log(inputValue);

  return (
    <div>
      <div>{ shouldShowLanding ? <h1>Landing</h1> : <h1>Home</h1> }</div>
      <button onClick={ () => setShouldShowLanding(!shouldShowLanding) }>Toggle page</button>
      <button onClick={ () => setPageName("Landing") }>Toggle Landing</button>
      <button onClick={ () => setPageName("Home") }>Toggle Home</button>
      <button onClick={ () => setPageName("About") }>Toggle About</button>
      <div>
        { pageName === "Landing" && <div>Landing component</div> }
        { pageName === "Home" && <div>Homepage component</div> }
        { pageName === "About" && <div>About component</div> }
      </div>

      <hr/>
      <form>
        <input type="text" value={inputValue} onChange={ (event) => setInputValue(event.target.value) }/>
        { isValid ? <button type="submit">Submit</button> : <button type="submit"disabled>Submit</button> }
        { !isValid && <p>Min 3 character!</p> }
      </form>

      <form>
        <input type="text" value={inputValue} onChange={ (event) => setInputValue(event.target.value) }/>
        <button type="submit" disabled={!isValid}>Submit</button>
        { !isValid && <p>Min 3 character!</p> }
      </form>
      
      <hr/>

      {listItems}

      <ul>
        {cars.map((car) => <li>{car.brand} - {car.model}</li>)}
      </ul>
      
      <ul>
        {cars.map((car) => {
          if ( car.brand.startsWith(inputValue)) {
            return <li>{car.brand} - {car.model}</li>
          }
        })}
        {/* hf ugyanez filterrel */}
      </ul>

    </div>
  );
}

export default App;
