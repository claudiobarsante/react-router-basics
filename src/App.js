import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';

//*-- https://example.com.products -> path:'/products'

// -- Alternative way - more similar to older versions of react-router-dom < 6.4.1
// const routeDefinitions = createRoutesFromElements(
// 	<Route>
// 	<Route path='/' element={<HomePage />} />
// 	<Route path='/products' element={<ProductsPage />} />
// 	</Route>
// )
// -  <RouterProvider router={routeDefinitions} />;
const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/products', element: <ProductsPage /> },
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
