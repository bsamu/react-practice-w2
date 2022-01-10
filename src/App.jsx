import { useState } from "react"

let myName = "Bálint"
let myNumber = 5
let myBoolean = true
// boolean-t nem jelenít meg, de hibát se dob... .toString() --> kiírja
let myArray = [1, 2, 3, "Béla", "Kázmér"]
// kiírja, de egybe az egészet

let myUd = undefined
let myNull = null
// ezeket se rendereli, de hibát se dob

let person = { name: "Béla", age: 20 }
// beszédes hibát ír... objectet nem tud renderelni

let people = [
  "Béla",
  "Lajos",
  "Kázmér",
  "Ottó",
  "Bodri",
  "Cirmi"
]

// let peolpeCards = []
// for (const p of people) {
//   peolpeCards.push(
//     <div className="card">
//       <p className="card-content">{p}</p>
//     </div>
//   )
// }

// let peopleCards = people.map(p => {
//   <div className="card">
//     <p className="card-content">{p}</p>
//   </div>
// })

let myElemArr = people.map(p => (
  <div className="card" key={ p }>
    <p className="card-content">{ p }</p>
    <p>Some other content</p>
  </div>
)
)

// loops in js
let peopleObj = [
  { name: "Béla", age: 20 },
  { name: "Lajos", age: 2 },
  { name: "Kázmér", age: 120 },
  { name: "Ottó", age: 25 },
]
// and conditional rendering
// operators

/*
let counter = 1
const update = () => counter++
*/

const App = () => {
  
  let [ shouldShow, setShouldShow ] = useState(false)

  const myToggleFunction = () => {
    setShouldShow(!shouldShow)
  }

  const [ counter, setCounter ] = useState(1)

  const myIncrementFunction = () => {
    console.log(counter)
    setCounter(counter + 1)
    console.log(counter)
    console.log("-------")
  }

  const [ myArr, setArr ] = useState([])

  let wcounter = 1
  const update = () => {
    console.log(wcounter)
    wcounter++
    console.log(wcounter)
  }
  // wcounter az wrongcounter | különbség wcounter és counter között a setState hiánya, wcounter nem működik... figyeld meg console.log-t

  return (
    <div>

      { shouldShow ? <p>Hidden content is shown!!!!</p> : <p>Secret content is hidden!</p> }
      <button onClick={ myToggleFunction }>Toggle</button>

      <p>Counter value: { counter }</p>
      <button onClick={ myIncrementFunction }>Increment</button>

      <p>Counter value: { wcounter }</p>
      <button onClick={ update }>Wrong Increment</button>

      <button onClick={ () => setArr([ ...myArr, "Béla" ]) }>Add Béla</button>
      { myArr.map(elem => <p>{ elem }</p>) }

      <h1>
        Hello world
      </h1>
      <p>{ myName }</p>
      <p>{ myNumber * 3 }</p>
      <p>{ myBoolean }</p>
      <p>{ myBoolean.toString() }</p>
      <p>{ myArray }</p>
      <p>{ myUd }</p>
      <p>{ myNull }</p>
      <p>{ JSON.stringify(person) }</p>
      <p>Név: { person.name }, ({ person.age })</p>
      <p id="first">First paragraph</p>
      <p className="myp">Second paragraph</p>
      <p className="myp">Third paragraph</p>
      <input placeholder="akarmi" type="password" />

      {
        people.map(p => (
          <div className="card" key={p}>
            <p className="card-content">{p}</p>
          </div>
        )
        )
      }

      { myElemArr }

      {
        peopleObj.map(p => (
          <div className="card" key={ p.name }>
            <p className="card-content">{ p.age < 18 ? "*****" : p.name }</p>
          </div>
        )
        )
      }
    </div >
  );
}

export default App;
