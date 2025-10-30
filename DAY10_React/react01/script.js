{/* <div id="outer">
    <div id="inner1">
        <div id="span-container">
            <span>HELLO LEARNERS!</span>
            <span>WELCOME TO REACTJS</span>
        </div>
    </div>
    </div> */}
// const ReactElement = React.createElement("div",{id:"outer"},
//     React.createElement("div",{id:"inner1"},
//         React.createElement("div",{id:"span-container"},
//             [React.createElement("span",{},"HELLO LEARNERS!"),
//                React.createElement("span",{},"WELCOME TO REACTJS")
//             ]
//         )
//         ),
//         React.createElement("div",{id:"inner2"},
//             React.createElement("div",{id:"span-container"},
//                 [React.createElement("span",{},"HELLO LEARNERS!"),
//                    React.createElement("span",{},"WELCOME TO REACTJS")
//                 ]
//             )
//         )
//     );
    
        

// const root = ReactDOM.createRoot(document.getElementById('root'));
// const divElement =  React.createElement("div",{},"HELLO LEARNERS!");
// root.render(divElement);
//Babel JSX
const ReactElement= 
    <div id="outer">
        <div id="inner1">
            <div id="span-container">
                <span>HELLO LEARNERS!</span>
                <span>WELCOME TO REACTJS</span>
            </div>
        </div>
        <div id="inner2">
            <div id="span-container">
                <span>HELLO LEARNERS!</span>
                <span>WELCOME TO REACTJS</span>
            </div>
        </div>
    </div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(ReactElement);
