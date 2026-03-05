import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header';
import Body from './Body';
import '../../index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Help from './Help';
import About from './About';
import Error from './Error';
import { Outlet } from "react-router-dom";
import Footer from './Footer';
import RestaurantMenuDetails from './RestaurantMenuDetails';


//how we will create this code via js in react
/* <div class="parent">
        <div class="child">
            <h1 class="headin">i am heading1</h1>
        </div>
    </div>
    */


// const heading = document.createElement('h1');
//         heading.innerText = "Hello World!";
//         document.getElementById('root').appendChild(heading);
 
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



    // React.createElement ==> ReactElement (js-object ) ==> HTMLelement (browser understand)(render)
    // const head = React.createElement("h1",{className:"parent"},React.createElement("div",{className:"child"},[React.createElement("h1",{className:"headin1"},"i am heading1"),React.createElement("h2",{className:"headin2"},"i am heading2")]));
    const root1 = ReactDOM.createRoot(document.getElementById('root1'));

//jsx is not a html syntax but it is a syntax extension to js and it is used in react to create react element
//jsx =>React.createElement ==> ReactElement (js-object ) ==> HTMLelement (browser understand)(render)
    // const h1 = <h1>Hello World from JSX</h1>






    //functional component


    const TitleComponent = () => {
        return <h1>title from Functional Component</h1>
    }
    const App= () => {
        // return <div>Hello World from Functional Component
        //    {// <TitleComponent/>
        //    }
        //    {TitleComponent()//this is also correct but we will use it in this way
        //    }
        //    <TitleComponent></TitleComponent>

        // </div>
       
         
            

        return (
            <div>
                <Header/>
                <div className='headerBox'></div>
              <Outlet/>
              <Footer/>

            </div>
        )
    }


     const appRoute = createBrowserRouter([
            {   
                path: "/",
                element: <App/>,
                errorElement :<Error/>,
                children :[
                    {
                        path: "/",
                        element: <Body/>,
                    },
                    {
                        path: "/help",
                        element: <Help/>,
                    },
                    {
                        path :"/about",
                        element: <About customerName="Riya Verma"/>,
                    },
                    {
                        path: "/restaurant/:resId",
                        element: <RestaurantMenuDetails/>
                    }

                ]
            },
            {
                path: "/help",
                element: <Help/>,
            }
        ])
    
    // root1.render(h1);

    const elem = <div className="parent"> react element</div>
    // root1.render(elem);
    //react component rendering
    root1.render(<RouterProvider  router = {appRoute}/>);
    