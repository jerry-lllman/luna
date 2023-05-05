import { Layout } from "antd";

import Layouts from "@/layouts";
import useEditorStore from "@/store/editor";
import ComponentRender from "@/components/ComponentsRender";
import ComponentList from "@/components/ComponentList";
import EditWrapper from "@/components/EditWrapper";
import PropsTable from "@/components/PropsTable";

export default function Editor() {

	const { components, addComponent, setActive, getCurrentComponent } = useEditorStore(state => {

		const { components, addComponent, setActive, getCurrentComponent } = state
		return {
			components, addComponent, setActive, getCurrentComponent
		}
	})

	const currentComponent = getCurrentComponent()

	return (
		<Layouts showHeader title="Lunax">
			<Layout className="h-full">
				<Layout.Sider className=" bg-slate-500">
					<ComponentList onItemClick={addComponent} />
				</Layout.Sider>
				<Layout.Content className=" p-7 bg-red-200">
					<div>
						{
							components.map(component => (
								<EditWrapper
									key={component.id}
									id={component.id}
									active={component.id === currentComponent?.id}
									setActiveId={setActive}
								>
									<ComponentRender  {...component} />
								</EditWrapper>
							))
						}
					</div>
				</Layout.Content>
				<Layout.Sider className="bg-blue-200">
				 { currentComponent && currentComponent.props && <PropsTable props={currentComponent.props} />}
				</Layout.Sider>
			</Layout>
		</Layouts>
	)
}