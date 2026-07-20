import {HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import Layout from './Layout';
import { useAuth } from './AuthContext';
import LoginView from '../features/auth/LoginView';
import GlobalView from '../features/global/GlobalView';
import PropertyView from '../features/property/PropertyView';
import LedgerView from '../features/ledger/LedgerView';


function RequireAuth({ children }) {
	const { token } = useAuth();
	return token ? children : <Navigate to="/login" replace />
}

export default function App() {
	return (
		<HashRouter>
			<Routes>
				<Route path="/login" element={<LoginView />} />
				<Route element={<RequireAuth><Layout/></RequireAuth>}>
					<Route path="/" element={<GlobalView />} />
					<Route path="/properties/:propertyId" element={<PropertyView />} />
					<Route path="/tenants/:tenantId" element={<LedgerView />} />
				</Route>
			</Routes>
		</HashRouter>
	);
}
