import React from 'react';

function Recipe({
	name,
	cuisine,
	photo,
	ingredients,
	preparation,
	deleteBtnHandler,
}) {
	return (
		<tr>
			<td>
				<p>{name}</p>
			</td>
			<td>
				<p>{cuisine}</p>
			</td>
			<td>
				<img
					src={photo}
					alt=''
				/>
			</td>
			<td className='content_td'>
				<p>{ingredients}</p>
			</td>
			<td className='content_td'>
				<p>{preparation}</p>
			</td>
			<td>
				<button
					name='delete'
					onClick={deleteBtnHandler}
				>
					Delete
				</button>
			</td>
		</tr>
	);
}

export default Recipe;
