import RestaurantsCard, { withPromotedLabel } from '../RestaurantsCard'
import MOCK_DATA from '../../../__mocks__/resCardMock.json'
import { render,screen } from '@testing-library/react';
import "@testing-library/jest-dom"

it("should render RestaurantVard component with props data",()=>{
    render(<RestaurantsCard restaurant={MOCK_DATA}/>);
    const resName = screen.getByText("The Bake Brothers")
   expect(resName).toBeInTheDocument();

});
it("should render higher order withlabelPromoted component ",()=>{
   const PromotedRestaurantCard = withPromotedLabel(RestaurantsCard);
   render(<PromotedRestaurantCard restaurant={MOCK_DATA}/>);

    const label = screen.getByText(/promoted/i);
    expect(label).toBeInTheDocument()
    
    
})
