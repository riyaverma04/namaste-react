import Header from '../Header';
import { render,screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore'
import { BrowserRouter } from 'react-router-dom';
import userEvent from "@testing-library/user-event";

describe("rendering of header component",()=>{

    it("should find the heading in the header component", async ()=>{
        render(
        <BrowserRouter>
        <Provider store={appStore}>

            <Header/>
        </Provider>
        </BrowserRouter>
    )
        const heading = await screen.findByText("Sign up");
        expect(heading).toBeInTheDocument();
    })
    it("should contain cart element", async ()=>{
        render(
        <BrowserRouter>
        <Provider store={appStore}>

            <Header/>
        </Provider>
        </BrowserRouter>
    )
        const cart = screen.getByText("cart");
         expect(cart).toBeInTheDocument();
        
    })
     it("should navigate when cart is clicked", async()=>{
        render(
        <BrowserRouter>
        <Provider store={appStore}>

            <Header/>
        </Provider>
        </BrowserRouter>
    )
        const cartLink = await screen.getByRole("link", { name: /cart/i });
        await userEvent.click(cartLink);
        
        
    })
})