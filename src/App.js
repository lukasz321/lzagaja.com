import React from "react";
import Table from "./Table";

const initState = [
    {
        id: Date.now(),
        name: "",
        object: "",
    },
    {
        id: Date.now() - 10,
        name: "",
        object: "",
    }
];

const bedroomState = [
    {
        id: Date.now(),
        name: "Gus",
        object: "Bedroom 1",
    },
    {
        id: Date.now() - 10,
        name: "Walid",
        object: "Bedroom 2",
    },
    {
        id: Date.now() - 20,
        name: "John",
        object: "Bedroom 3 Shared",
    },
    {
        id: Date.now() - 30,
        name: "Alex",
        object: "Bedroom 3 Shared",
    },
    {
        id: Date.now() - 40,
        name: "Lukasz",
        object: "Couch",
    }
];

const foodState = [
    {
        id: Date.now(),
        name: "Salt City Market",
        object: "",
    },
    {
        id: Date.now() - 10,
        name: "Dinosaur BBQ",
        object: "",
    },
    {
        id: Date.now() - 20,
        name: "Apizza Regionale",
        object: "← This Restaurant",
    },
    {
        id: Date.now() - 30,
        name: "The Evergreen",
        object: "",
    },
    {
        id: Date.now() - 40,
        name: "Shaughnessy's",
        object: "",
    },
    {
        id: Date.now() - 50,
        name: "Chinese Takeout",
        object: "",
    }
];

function App() {
    return (
        <div>
            <p>Build your choice matrix by filling in the table below. All information will be lost on page refresh.</p>
            <Table initState={initState} />
            <h1></h1>
            <article>
                <p>You can find some example use cases below.</p>
            </article>
            <h3>Never able to decide to where to eat?</h3>
            <Table initState={foodState} example="Pick Ristorante" />
            <h3>Choosing an Airbnb bedroom is now fair and effortless!</h3>
            <Table initState={bedroomState} example="Assign Bedrooms" />
        </div>
    );
}

export default App;