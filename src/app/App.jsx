import {HashRouter, Routes, Route} from 'react-router-dom';
import Layout from './Layout';
import GlobalView from '../features/global/GlobalView';
import PropertyView from '../features/property/PropertyView';
import LedgerView from '../features/ledger/LedgerView';


export default function App() {
	return (
		<HashRouter>
			<Routes>
				<Route element={<Layout />}>
					  <Route path="/" element={<GlobalView />} />
					  <Route path="/properties/:propertyId" element={<PropertyView />} />
					  <Route path="/tenants/:tenantId" element={<LedgerView />} />
				</Route>
			</Routes>
		</HashRouter>
	);
}
