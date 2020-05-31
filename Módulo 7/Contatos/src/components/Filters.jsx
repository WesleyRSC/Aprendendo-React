import React from 'react';

class Filters extends React.Component {
	render() {
		return (
			<div className="container" data-testid="filters">
			<section className="filters">
			  <div className="filters__search">
				<input type="text" 
				className="filters__search__input" 
				placeholder="Pesquisar" 
				onChange = {event=>{this.props.handleChange(event)}}/>
			
				<button className="filters__search__icon"  >
				  <i className="fa fa-search"/>
				</button>
			  </div>
			
			  <button className="filters__item is-selected" onClick={(e)=>{this.props.handleClick("name",e)}} >
				Nome <i className="fas fa-sort-down" />
			  </button>
			
			  <button className="filters__item" onClick={(e)=>{this.props.handleClick("country",e)}}>
				País <i className="fas fa-sort-down" />
			  </button>
			
			  <button className="filters__item" onClick={(e)=>{this.props.handleClick("company",e)}}>
				Empresa <i className="fas fa-sort-down" />
			  </button>
  
			  <button className="filters__item" onClick={(e)=>{this.props.handleClick("department",e)}}>
				Departamento <i className="fas fa-sort-down" />
			  </button>
  
			  <button className="filters__item" onClick={(e)=>{this.props.handleClick("admissionDate",e)}}>
				Data de admissão <i className="fas fa-sort-down" />
			  </button>
			</section>
		  </div>
		);
	}
}

export default Filters;
