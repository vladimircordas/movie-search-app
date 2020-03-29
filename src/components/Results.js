import React from 'react'

import Result from './Result'

function Results ({ results, openPopup }) {
	if(results){
		return (
			<section className="results">
				{results.map(result => (
					<Result key={result.imdbID} result={result} openPopup={openPopup} />
				))}
			</section>
		)
	} else {
		return(
		<section className="results">
			<h3>Start typing...</h3>
		</section>
		)
	}
}

export default Results