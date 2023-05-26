import { Layout } from 'antd'

import Layouts from '@/layouts'
import useEditorStore from '@/store/editor'
import ComponentRender from '@/components/ComponentsRender'
import ComponentList from '@/components/ComponentList'
import EditWrapper from '@/components/EditWrapper'
import PropsTable from '@/components/PropsTable'
import DragBlock from '@/components/DragBlock'

export default function Editor() {
	const {
		components,
		addComponent,
		setActive,
		getCurrentComponent,
		updateComponent,
	} = useEditorStore((state) => {
		const {
			components,
			addComponent,
			setActive,
			getCurrentComponent,
			updateComponent,
		} = state

		return {
			components,
			addComponent,
			setActive,
			getCurrentComponent,
			updateComponent,
		}
	})

	const currentComponent = getCurrentComponent()

	return (
		<Layouts showHeader title="Lunax">
			<Layout className="h-full">
				<Layout.Sider theme="light" width={320}>
					<ComponentList onItemClick={addComponent} />
				</Layout.Sider>
				<Layout.Content className="relative p-7 bg-slate-100">
					{
						components.map(component => (
							<EditWrapper
								key={component.id}
								id={component.id}
								setActiveId={setActive}
								componentProps={component.props}
							>
								<ComponentRender {...component} />
							</EditWrapper>
						))
					}
					{currentComponent && <DragBlock />}
				</Layout.Content>
				<Layout.Sider theme="light" width={320}>
					<div className="p-7">
						{
							currentComponent
							&& currentComponent.props
							&& <PropsTable props={currentComponent.props} updateComponentProps={value => updateComponent(currentComponent.id, value)} />
						}
					</div>
				</Layout.Sider>
			</Layout>
		</Layouts>
	)
}
