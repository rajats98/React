import React, {Component} from 'react';
import './RecipeInput.css'

class RecipeInput extends Component {
	static defaultProps = {
		onClose(){ } 
	}
	constructor(props){
		super(props);
		this.state = {
			title: '',
			instructions: "",
			ingredients: [''],
			img : ''
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		this.setState({[e.target.name]:e.target.value});
	}

	render() {
		const {title,instructions,ingredients,img} = this.state;
		const {onClose} = this.props;
		let inputs = ingredients.map((ing, i)=>(
			<div
				className = "recipe-form-line"
				key = {`ingredients-${i}`}
			>
				<label>
					<input
						type='text'
						name={`ingredients-${i}`}
						value={ing}
						size={45}
						autoComplete="off"
						placeholder = " Ingredient"
						onChange = {()=>{}}

					/>
				</label>
			</div>
		));


		return (
			<div className="recipe-form-container">
				<form className="recipe-form" onSubmit ={()=>{}}>
					<button
						type="button"
						className="close-button"
						onClick={onClose}
					>
					X
					</button>
					
					<div className="recipe-form-line">
						<label htmlFor='recipe-title-input'>Title</label>
						<input
							id='recipe-title-input'
							key ='title'
							name = 'title'
							type = 'text'
							value = {title}
							size = {42}
							autoComplete="off"
							onChange = {this.handleChange}
						/>
					</div>

					<label htmlFor='recipe-instructions-input' style={{marginTop:'5px'}}>
						Instructions
					</label>
					<textarea
						key='instructions'
						id='recipe-instructions-input'
						name='instructions'
						rows='8'
						cols='50'
						autoComplete='off'
						value={instructions}
						onChange={this.handleChange}
					/>

					{inputs}
					<button
						type='button'
						onClick={this.handleNewIngredient}
						className='buttons'
					>
					+
					</button>

					<div className="recipe-form-line">
						<label htmlFor='recipe-img-input'>
							Image Url
						</label>
						<input
							id="recipe-img-input"
							type='text'
							placeholder=''
							name='img'
							value={img}
							size={36}
							autoComplete='off'
							onChange={this.handleChange}
						/>
					</div>
					<button
						type="submit"
						className="buttons"
						style={{alignSelf:'flex-end', marginRight: 0}}
					>
						SAVE
					</button>
				</form>				
			</div>
		);
	}    

}

export default RecipeInput;
