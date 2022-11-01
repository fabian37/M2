import React from 'react';
import Botones from './Botones';

const studentName = 'Fabian';
const techSkills = ['Html', 'Css', 'JavaScript', 'React', 'Redux'];
const alerts = { m1: 'Aprobado', m2: 'En curso' };

export default function Bienvenido() {
	// el código de tu componente acá
	return (
		<div>
			<h1 className="titulo">Soy Henry!</h1>
			<h3>{studentName}</h3>
			<ul>
				{techSkills.map((item) => {
					return <li key={item}>{item}</li>;
				})}
			</ul>
			<Botones alerts={alerts} />
		</div>
	);
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };
