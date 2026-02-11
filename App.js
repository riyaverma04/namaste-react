import React from 'react';
import ReactDOM from 'react-dom/client';

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



    //React.createElement ==> ReactElement (js-object ) ==> HTMLelement (browser understand)(render)
    const head = React.createElement("h1",{className:"parent"},React.createElement("div",{className:"child"},[React.createElement("h1",{className:"headin1"},"i am heading1"),React.createElement("h2",{className:"headin2"},"i am heading2")]));
    const root1 = ReactDOM.createRoot(document.getElementById('root1'));

//jsx is not a html syntax but it is a syntax extension to js and it is used in react to create react element
//jsx =>React.createElement ==> ReactElement (js-object ) ==> HTMLelement (browser understand)(render)
    const h1 = <h1>Hello World from JSX</h1>






    //functional component


    const TitleComponent = () => {
        return <h1>title from Functional Component</h1>
    }
    const HeadingComponent = () => {
        return <div>Hello World from Functional Component
           {// <TitleComponent/>
           }
           {TitleComponent()//this is also correct but we will use it in this way
           }
           <TitleComponent></TitleComponent>

        </div>
    }
    // root1.render(h1);

    const elem = <div className="parent"> react element</div>
    // root1.render(elem);
    //react component rendering
    root1.render(<HeadingComponent/>);
    