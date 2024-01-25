import style from './Post.module.sass';

import { PostInfo } from 'src/entities/PostInfo';
import { Browse } from 'src/features/Browse';
import { postSlice } from 'src/app/Redux/slice/postSlice';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { IBrowseProps } from 'src/pages/MainPage';

const Post = () => {
	// состояние количества карточек
	const [PageLin, SetPageLin] = useState(5);
	// получение данных
	const { data, isLoading } = postSlice.useGetAllPostQuery({
		limit: PageLin,
		page: 1
	});
	// получения данных о виде последней карточки
	const { ref, inView } = useInView({
		threshold: 1
	});
	// загрузка данных
	useEffect(() => {
		if (inView) {
			SetPageLin(PageLin < 100 ? PageLin + 5 : PageLin);
			console.log(data);
		}
	}, [inView]);

	return (
		<>
			{isLoading ? (
				<>Loading</>
			) : data ? (
				data.map((el: IBrowseProps) => {
					return (
						<div ref={ref} className={style.MainCont} key={el.id}>
							<PostInfo elInfo={el}></PostInfo>
							<Browse elInfo={el}></Browse>
						</div>
					);
				})
			) : (
				<>Not Found</>
			)}
		</>
	);
};

export default Post;
