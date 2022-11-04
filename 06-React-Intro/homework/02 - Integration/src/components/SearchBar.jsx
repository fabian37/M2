export default function SearchBar(props) {
	return (
		<div>
			<input id="search" type="search" />
			<button onClick={() => props.onSearch('ID de un personaje')}>
				Agregar
			</button>
		</div>
	);
}
