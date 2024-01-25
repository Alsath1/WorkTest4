import { Route, Routes } from 'react-router-dom';
import { MainPage } from 'src/pages/MainPage';
import { PostInfoMore } from 'src/pages/PostInfoMore';

export const App = () => {
	return (
		<Routes>
			<Route path='/' element={<MainPage />} />
			<Route path='/MoreInfo' element={<PostInfoMore />} />
		</Routes>
	);
};
