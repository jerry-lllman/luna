import { defaultTemplates } from "@/defaultTemplates";
import ComponentRender from "../ComponentsRender";
import { ComponentData } from "@/store/editor";


interface ComponentListProps {
	onItemClick: (template: ComponentData) => void
}

export default function ComponentList(props: ComponentListProps) {

	const { onItemClick } = props

	return (
		<div>
			{
				defaultTemplates.map((template, index) => (
					<div key={index} className="component-item" onClick={() => onItemClick(template)}>
						 <ComponentRender {...template}  />
					</div>
				))
			}
		</div>
	)
}