import React from 'react'
import Team from './Team'
class About extends React.Component{
    //to get props in class componet we have to use constructor and super keyword
    constructor(props){
        super(props);
         //states in class component
    this.state  = {
        count :0,
        count2: 1,
    }
    }


   


render(){
    return(
        <div>
            <div onClick={()=>this.setState({count: this.state.count+1})}> click me to change the count :{this.state.count}</div>
            <h1>About Us</h1>
            <p>We are a team of passionate food lovers who believe that good food should be accessible to everyone. Our mission is to connect people with the best restaurants in their area and make it easy for them to discover new culinary experiences.</p>
            <p>At TastyTrail, we understand that food is not just about sustenance; it's about culture, community, and connection. That's why we work hard to curate a diverse selection of restaurants that cater to all tastes and preferences.</p>
            <p>Whether you're looking for a quick bite or a fine dining experience, TastyTrail has got you covered. We are committed to providing our users with the best possible experience and helping them find their next favorite meal.</p>

            <ul>
                <h1>Our Values</h1>
                <li>Quality: We ensure that every restaurant we feature meets our high standards.</li>
                <li>Accessibility: We make it easy for everyone to find and enjoy great food.</li>
                <li>Community: We foster a sense of community among food lovers and restaurant owners.</li>
            </ul>
            <h2>our team</h2>
            <p>Our team is made up of food enthusiasts, tech experts, and customer service professionals who are dedicated to making TastyTrail the best it can be. We are passionate about food and committed to providing our users with an exceptional experience.</p>

            <h2>What others say about us</h2>
            <p>"TastyTrail has completely changed the way I discover new restaurants. It's so easy to use and has helped me find some amazing places to eat!" - {this.props.customerName}</p>
            <Team/>
        </div>
    )
}
}

export default About;