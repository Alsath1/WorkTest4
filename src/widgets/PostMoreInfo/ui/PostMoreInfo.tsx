import style from './PostMoreInfo.module.sass';
import { PostMoreInfoText } from 'src/entities/PostMoreInfoText';
import { BackBtn } from 'src/features/BackBtn';

const PostMoreInfo = () => {
	return (
		<div className={style.MainCont}>
			<PostMoreInfoText></PostMoreInfoText>
			<BackBtn></BackBtn>
		</div>
	);
};

export default PostMoreInfo;
