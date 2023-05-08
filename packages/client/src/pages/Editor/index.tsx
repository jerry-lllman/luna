import { Layout } from 'antd'

import Layouts from '@/layouts'
import useEditorStore from '@/store/editor'
import ComponentRender from '@/components/ComponentsRender'
import ComponentList from '@/components/ComponentList'
import EditWrapper from '@/components/EditWrapper'
import PropsTable from '@/components/PropsTable'

export default function Editor() {
  const {
    components, addComponent, setActive, getCurrentComponent, updateComponent,
  } = useEditorStore((state) => {
    const {
      components, addComponent, setActive, getCurrentComponent, updateComponent,
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
				<Layout.Content className=" p-7 bg-slate-100">
					<div>
						{
							components.map(component => (
								<EditWrapper
									key={component.id}
									id={component.id}
									active={component.id === currentComponent?.id}
									setActiveId={setActive}
								>
									<ComponentRender {...component} />
								</EditWrapper>
							))
						}
					</div>
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
