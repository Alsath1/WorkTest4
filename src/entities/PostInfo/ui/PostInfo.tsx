import { ObfJix } from '../ts';
import style from './PostInfo.module.sass';

const PostInfo = (props: ObfJix) => {
	return (
		<div className={style.MainCont}>
			<h3 className={style.NumPost}>Пост № {props.elInfo.id}</h3>
			<h2 className={style.tytles}>{props.elInfo.title}</h2>
			<p>{props.elInfo.body}</p>
		</div>
	);
};
export default PostInfo;
