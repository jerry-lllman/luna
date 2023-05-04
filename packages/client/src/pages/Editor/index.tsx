import { Layout } from "antd";

import Layouts from "@/layouts";
import useEditorStore from "@/store/editor";
import ComponentRender from "@/components/ComponentsRender";
import ComponentList from "@/components/ComponentList";

export default function Editor() {

	const { components, addComponent } = useEditorStore(state => ({
		components: state.components,
		addComponent: state.addComponent
	}))

	return (
		<Layouts showHeader title="Lunax">
			<Layout className="h-full">
				<Layout.Sider className=" bg-slate-500">
					<ComponentList onItemClick={addComponent} />
				</Layout.Sider>
				<Layout.Content className=" p-7 bg-red-200">
					<div>
						{
							components.map(component => <ComponentRender key={component.id} {...component} />)
						}
					</div>
				</Layout.Content>
				<Layout.Sider className="bg-blue-200">
					组件设置
				</Layout.Sider>
			</Layout>
		</Layouts>
	)
}