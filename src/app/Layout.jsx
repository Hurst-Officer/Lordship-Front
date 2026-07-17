
import {Outlet, Link} from 'react-router-dom';
import LensLink from '../shared/LensLink';

export default function Layout() {
	return (
		<div>
			<header>
				<LensLink to="/">Global</LensLink>{' '}
				<LensLink to="/properties/TA">Tazing Acres</LensLink>{' '}
				<span style={{float : 'right'}}>[profile] [theme]</span>
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
}