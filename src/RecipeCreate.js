import React, { useState } from 'react';

function RecipeCreate({ recipes, setRecipes }) {
	// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
	// TODO: Add the required input and textarea form elements.
	// TODO: Add the required submit and change handlers

	const initialState = {
		name: '',
		cuisine: '',
		photo: '',
		ingredients: '',
		preparation: '',
	};

	const [formData, setFormData] = useState(initialState);

	const handleChange = e => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		setRecipes([
			...recipes,
			{
				name: formData.name,
				cuisine: formData.cuisine,
				photo: formData.photo,
				ingredients: formData.ingredients,
				preparation: formData.preparation,
			},
		]);
		setFormData(initialState);
	};

	return (
		<form
			name='create'
			onSubmit={handleSubmit}
		>
			<table>
				<tbody>
					<tr>
						<td>
							<input
								type='text'
								name='name'
								id='name'
								placeholder='Name'
								value={formData.name}
								onChange={handleChange}
							/>
						</td>
						<td>
							<input
								type='text'
								name='cuisine'
								id='cuisine'
								placeholder='Cuisine'
								value={formData.cuisine}
								onChange={handleChange}
							/>
						</td>
						<td>
							<input
								type='url'
								name='photo'
								id='photo'
								placeholder='URL'
								value={formData.photo}
								onChange={handleChange}
							/>
						</td>
						<td>
							<textarea
								name='ingredients'
								id='ingredients'
								placeholder='Ingredients'
								value={formData.ingredients}
								onChange={handleChange}
							></textarea>
						</td>
						<td>
							<textarea
								name='preparation'
								id='preparation'
								placeholder='Preparation'
								value={formData.preparation}
								onChange={handleChange}
							></textarea>
						</td>
						<td>
							<button type='submit'>Create</button>
						</td>
					</tr>
				</tbody>
			</table>
		</form>
	);
}

export default RecipeCreate;
