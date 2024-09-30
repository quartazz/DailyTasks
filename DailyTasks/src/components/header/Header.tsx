import MyButton from '../general/MyButton'

import ListIcon from '../../assets/img/list.svg'
import PlusIcon from '../../assets/img/plus.svg'
import ProfileIcon from '../../assets/img/profile.svg'

function Header() {
	return (
		<>
			<div className='p-8'>
				<div className='justify-between flex'>
					<div className='gap-3 flex'>
						<MyButton name='Открыть списком' icon={ListIcon} />

						<MyButton name='Новая задача' icon={PlusIcon} />
					</div>

					<div className=''>
						<MyButton name='Профиль' icon={ProfileIcon} />
					</div>
				</div>
			</div>
		</>
	)
}

export default Header
