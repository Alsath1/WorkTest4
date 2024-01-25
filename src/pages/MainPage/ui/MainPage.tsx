import { Post } from 'src/widgets/Post';
import style from './MainPage.module.sass';

const MainPage = () => {
	return (
		<div className={style.MainCont}>
			<Post></Post>
		</div>
	);
};

export default MainPage;
