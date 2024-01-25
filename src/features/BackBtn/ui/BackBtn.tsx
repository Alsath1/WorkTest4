import { Link } from 'react-router-dom';
import { IBackBtnProps } from '../ts';

import style from './BackBtn.module.sass';

const BackBtn = ({ ...props }: IBackBtnProps) => {
	return (
		<div className={style.MainCont} {...props}>
			<Link to={'/'}>
				<button className={style.btn}>Назад</button>
			</Link>
		</div>
	);
};

export default BackBtn;
