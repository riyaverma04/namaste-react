import { act ,render,screen} from "@testing-library/react"
import RestaurantMenuDetails from "../RestaurantMenuDetails"
import MOCK_DATA from '../../../__mocks__/restaurantMenu.json'
import '@testing-library/jest-dom'
import RestaurantMenuDetailsAccordian from "../RestaurantMenuDetailsAccordian"
import RestaurantMenuDetailsAccordianItemList from "../RestaurantMenuDetailsAccordianItemList"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"


global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})
test("should find the items in cart",async()=>{
    await act(()=>render(
        <>
        <Provider  store={appStore}>
        <RestaurantMenuDetailsAccordianItemList accordianItemListArray={MOCK_DATA} />
         <RestaurantMenuDetailsAccordian restaurantMenu = {MOCK_DATA}/>
        <RestaurantMenuDetails/>
        </Provider>
        </>
    ))

    const recommendText = screen.getByText("Recommended")
    expect(recommendText).toBeInTheDocument();
    const accordianExpand = screen.getByTestId("accordianExpand");
    console.log(accordianExpand)



})