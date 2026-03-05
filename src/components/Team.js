import {Component} from "react";
class Team extends Component{
   

    async componentDidMount(){
       
        
        console.log("component did mount");
        //api call
        const data = await fetch("https://api.github.com/users/riyaverma04");
        const json = await data.json();
        this.setState({teamMemberInfo: json});
    }
     state = {
        teamMemberInfo :{
            name : "dummy",
            location: "dummyLocation"
        }
    }
     componentDidUpdate(){
        console.log("component did update");
        
    }
    componentWillUnmount(){
        //unmount went leave the page or component
        console.log("component will unmount");
    }
   

    render(){
         //destructuring th state 
    
         const {name,location,avatar_url} = this.state.teamMemberInfo;
        return(
            <>
            <img src={avatar_url} alt="profile pic"/>
            <div> our team members {name} </div>
            </>
        )
        
    }
}
export default Team;