import { PostMoreInfo } from 'src/widgets/PostMoreInfo';

import style from './PostInfo.module.sass';

const PostInfoMore = () => {
	return (
		<div className={style.MainCont}>
			<PostMoreInfo></PostMoreInfo>
		</div>
	);
};

export default PostInfoMore;
