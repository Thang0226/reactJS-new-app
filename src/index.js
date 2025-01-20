import React from 'react';
import ReactDOM from 'react-dom/client';

const name = "Nguyen Thang";
// React.createElement("h1", { style: { textAlign: "center" } }, name);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//     // React.createElement("h1", { style: { textAlign: "center" } }, name)
//     <h1 style={{textAlign: "center"}}>
//         {name}
//     </h1>
// );

const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Apricot",
    "Black rowan",
    "Cranberry"
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div>
        <h1>List of fruits</h1>
        <ul>
            {fruits.map(item => (
                <li>{item}</li>
            ))}
        </ul>
    </div>
);
