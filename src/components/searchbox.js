import React from 'react';
import 'tachyons';

const SearchBox =({searchField, searchChange})=>{
	return (
		<div className='pa2'>
			<input 
				type='search'
				placeholder='search robots'
				className='pa3 b3 b--green bg-lightest-blue'
				onChange={searchChange}
				/>
		</div>
		);
}
export default SearchBox;