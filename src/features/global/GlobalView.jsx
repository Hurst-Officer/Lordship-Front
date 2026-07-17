
import { useLens } from '../../shared/useLens';

export default function GlobalView() {
	const {concern, month, setLens} = useLens();
	
	return (
		<div>
			<h1>Global View</h1>
			<p>Concern: {concern} · Month: {month}</p>
			<button onClick={() => setLens({concern : 'payments'})}>
				Switch to payments
			</button>
		</div>
	);
}