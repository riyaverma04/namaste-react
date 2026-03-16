
import { BrowserRouter } from "react-router-dom";
import Resturants from "../Resturants";
import { act, fireEvent, render,screen } from "@testing-library/react";
import MOCK_RES  from '../../../__mocks__/restaurant.json'
import "@testing-library/jest-dom"

 global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MOCK_RES);
        }
    })
 })
test("should render the body component with search ",async()=>{
    //when the component contains state then we need to wrap the render function with act
    await act(async()=>render(
        <BrowserRouter>
        
        <Resturants/>
        </BrowserRouter>
    ));
    const inputBox = screen.getByRole("textbox");
    const searchButton = screen.getByText(/search/i);
    fireEvent.change(inputBox,{
        target:{value:"coffee"}
    });

    fireEvent.click(searchButton);
    const cardAfterSearch = screen.getAllByTestId("resCard")
    expect(cardAfterSearch.length).toBe(3);


    
})