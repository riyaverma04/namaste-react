import Footer from '../Footer';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'

test("should load the heading in the component",()=>{
    render(<Footer/>)

    const heading = screen.getByRole('heading');

    expect(heading).toBeInTheDocument();
})