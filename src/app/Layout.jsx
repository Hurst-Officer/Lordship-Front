
import {Outlet, Link} from 'react-router-dom';
import LensLink from '../shared/LensLink';
import AppBar from './AppBar';

export default function Layout() {
	return (
		<div>
			<header>
				<AppBar />
			</header>
			<main>
				<Outlet />
			</main>
		</div>
	);
}