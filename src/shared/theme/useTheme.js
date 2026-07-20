import { useState, useEffect } from 'react';

export function useTheme() {
    const [theme, setTheme] = useState('night');

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
    }, [theme]);

    const toggle = () => setTheme(t => (t === 'day' ? 'night' : 'day'));

    return { theme, toggle };
}