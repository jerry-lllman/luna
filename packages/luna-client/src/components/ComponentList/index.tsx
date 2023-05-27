import ComponentRender from '../ComponentsRender'
import { defaultTemplates } from '@/defaultTemplates'
import type { AddComponentData } from '@/store/editor'

import styles from './index.module.less'

interface ComponentListProps {
	onItemClick: (template: AddComponentData) => void
}

export default function ComponentList(props: ComponentListProps) {
	const { onItemClick } = props

	return (
		<div>
			{
				defaultTemplates.map((template, index) => (
					<div key={index} className={styles.component_item} onClick={() => onItemClick(template)}>
						<ComponentRender {...template} />
					</div>
				))
			}
		</div>
	)
}
