
import { useSearchParams } from 'react-router-dom';

export function useLens() {
	const [params, setParams] = useSearchParams();
	
	const concern = params.get('concern') ?? 'invoicing';
	const month = params.get('month') ?? '2026-07';

	function setLens(changes) {
	  setParams(prev => {
		const next = new URLSearchParams(prev);
		for (const [key, value] of Object.entries(changes)) next.set(key, value);
		return next;
	  });
	}
	
	return {concern, month, setLens};
}
