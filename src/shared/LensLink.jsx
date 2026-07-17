
import { Link, useLocation } from 'react-router-dom';

export default function LensLink({to, children, ...rest}) {
	const { search } = useLocation();
	return <Link to={to + search} {...rest}>{children}</Link>;
}