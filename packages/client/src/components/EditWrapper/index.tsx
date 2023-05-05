import classnames from 'classnames'
import styles from './index.module.less'

interface EditWrapperProps {
	id: string
	active?: boolean
	setActiveId: (id: string) => void
	children: React.ReactNode
}

export default function EditWrapper(props: EditWrapperProps) {
	const { id, active = false, setActiveId, children } = props

	const editWrapperClassName = classnames(styles.edit_wrapper, [
		 active && styles.active
])

	return (
		<div className={editWrapperClassName} onClick={() => setActiveId(id)}>
			{children}
		</div>
	)
}