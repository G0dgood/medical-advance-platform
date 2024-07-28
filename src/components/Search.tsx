import { useState } from 'react';
import { LuSearch } from 'react-icons/lu';


const Search = () => {
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
		<div className={`header_Search_container_one ${isFocused ? 'focused' : ''}`}>
			<LuSearch color='#475367' size={15} />
			<input
				placeholder='Search here...'
				className='header_Search_one'
				value={inputValue}
				onChange={handleInputChange}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>

		</div>

	);
};

export default Search;
