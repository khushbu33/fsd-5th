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
// const ReactElement= 
//     <div id="outer">
const span1Content ="span 1 content";
const span2Content ="span 2 content";
const reactElement2 = React.createElement("div",{id:"outer"});


const ReactElement= 
    <div id="outer">
        <div id="inner1">
            <div id="span-container">
                <span className="span1">HELLO LEARNERS!</span>
                <span className="span1">WELCOME TO REACTJS</span>
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

const divStyle={
    color:'blue',
    backgroundColor:'yellow',
    fontSize:'20px',
    padding:'10px',
    border:'2px solid red',
    background:'yellow'
};
const ReactElementWithStyle=<div style={divStyle}>Styled Div Element</div>;
root.render(ReactElementWithStyle);