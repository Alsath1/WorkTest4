import { Link } from 'react-router-dom';
import { IBrowseProps } from '../ts';
import style from './Browse.module.sass';
import { useAppDispatch } from 'src/app/Redux/hooks/redux';
import { GlobalState } from 'src/app/Redux/slice/GlobalState';

const Browse = (props: IBrowseProps) => {
	const { addArrEl } = GlobalState.actions;
	const dispatch = useAppDispatch();

	return (
		<div
			className={style.MainCont}
			{...props}
			onClick={() => {
				dispatch(addArrEl(props.elInfo.id));
			}}
		>
			<Link to={'/MoreInfo'}>
				<button className={style.btn}>Просмотр</button>
			</Link>
		</div>
	);
};

export default Browse;
