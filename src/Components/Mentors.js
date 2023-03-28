import axios from "axios";
import React from "react";
import Navbar from './Navbar'
import Profile from "./Profile";
import './Mentors.css'
import SearchBar from "./SearchBar";
import Errorfile from "./Errorfile";
import { ReactSession } from "react-client-session";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import FooterComponent1 from "./FooterComponent1.js";
import { Link } from "react-router-dom";

class Mentors extends React.Component {

	state = {
		data: [],
		error: null
	}

	handleGetRequest = async (e) => {
		e.preventDefault();
		const searchterm = e.target.elements.searchvalue.value.charAt(0).toUpperCase() + e.target.elements.searchvalue.value.slice(1);
		const result = axios.post('http://localhost:3001/getProfile',{sendvalue:searchterm,regdno:ReactSession.get("Registernum")}).then(response =>{return response;});
		const res = (await result)
		if(res.data.length === 0) {
			this.setState({error: "No Mentors found"})
		}
		else if(!searchterm){
			this.setState({error:"No Mentors found"})
		}
		else{
			this.setState({data:res.data,error:null})
		}
		
	  }

	render(){
		return (
			<div>
				<Navbar />
				<div className = "container">
					<div className="row mt-5">
						<Breadcrumb>
							<BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
							<BreadcrumbItem active>Mentors</BreadcrumbItem>
						</Breadcrumb>
						<div className="col-12">
							<hr />
						</div>                
					</div>
					<div className = "row row-content align-center">
						<div className="col-12">
							<SearchBar handleGetRequest={this.handleGetRequest} />
							<hr></hr>
						</div>
						<div className="col-12">
							{(this.state.error == null && this.state.data.length === 0) ? 
							<div><img style={{height:"150px",width:"175px"}} alt="Searching logo" src="./search.png"/><h4 style={{fontFamily:"Vollkorn"}}>Type to search</h4></div> : <div>{this.state.error !== null ? <div><Errorfile data={this.state.error} /></div> : <div className="contacts">
								{this.state.data.length > 0 && this.state.data.map((da)=> <div key={da.RegistrationNumber}><Profile rating={da.Rating} regdno={da.RegistrationNumber} name={da.Name} description={da.Description} tags={da.Tags}/></div>)}
							</div>}</div> }
							<hr></hr>
						</div>
					</div>
				</div>
				<FooterComponent1 />
			</div>
		);
	}
}

export default Mentors;