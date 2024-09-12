import React, { useState } from 'react';
import { LuSearch } from 'react-icons/lu';


const SearchInput = () => {
	const [isFocused, setIsFocused] = useState(false);
	const [inputValue, setInputValue] = useState('');


	const handleInputChange = (e: any) => {
		setInputValue(e.target.value);
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	return (
		<div className={`header_Search_container ${isFocused ? 'focused' : ''}`}>
			<LuSearch color='#475367' size={20} />
			<input
				placeholder='Search here...'
				className='header_Search'
				value={inputValue}
				onChange={handleInputChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>

		</div>
	);
};

export default SearchInput;
