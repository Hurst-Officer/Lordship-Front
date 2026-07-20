import './AppBar.css'
import LensLink from '../shared/LensLink'
import { useTheme } from '../shared/theme/useTheme'

export default function AppBar() {
    const { theme, toggle } = useTheme();

    return (
        <div className="appbar">
            <div className="wordmark">
                <LensLink to="/" className="title">Lordship</LensLink>
            </div>
            <div className="appbar-right">
                <button className="theme-toggle" onClick={toggle}>
                    {theme === 'day' ? 'Night' : 'Day'}
                </button>
            </div>
        </div>
    );
}