
//how we will create this code via js in react
/* <div class="parent">
        <div class="child">
            <h1 class="headin">i am heading1</h1>
        </div>
    </div>
    */


const heading = document.createElement('h1');
        heading.innerText = "Hello World!";
        document.getElementById('root').appendChild(heading);
 
//  const head = React.createElement("h1",{id:"attributesWillComehere"},"Hello World from React");
//     const root1 = ReactDOM.createRoot(document.getElementById('root1'));
//     root1.render(head);


/*const head = React.createElement("h1",{class:"parent"},React.createElement("div",{class:"child"},React.createElement("h1",{class:"headin"},"i am heading1")));
    const root1 = ReactDOM.createRoot(document.getElementById('root1'));
    root1.render(head);
    */






    //how we will create this code via js in react
/* <div class="parent">
        <div class="child">
            <h1 class="headin">i am heading1</h1>
            <h2>i am heading2</h2>
        </div>
    </div>
    */




    const head = React.createElement("h1",{class:"parent"},React.createElement("div",{class:"child"},[React.createElement("h1",{class:"headin1"},"i am heading1"),React.createElement("h2",{class:"headin2"},"i am heading2")]));
    const root1 = ReactDOM.createRoot(document.getElementById('root1'));
    root1.render(head);
    8076966551