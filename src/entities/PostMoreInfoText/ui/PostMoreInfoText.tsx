import { postSlice } from 'src/app/Redux/slice/postSlice';

import style from './PostMoreInfoText.module.sass';
import { useAppSelector } from 'src/app/Redux/hooks/redux';
const PostMoreInfoText = () => {
	const { id } = useAppSelector(state => state.GlobalState);

	const { data, isLoading } = postSlice.useGetPostByIdQuery(id);

	return (
		<>
			{isLoading ? (
				<>Loading</>
			) : data ? (
				<div className={style.MainCont}>
					<h2>Пост №{data.id}</h2>
					<h2>{data.title}</h2>
					<p>{data.body}</p>
				</div>
			) : (
				<div className={style.Error}>Not Found</div>
			)}
		</>
	);
};

export default PostMoreInfoText;
