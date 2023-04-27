import Layouts from "@/layouts";
import useEditorStore from "@/store/editor";
import { Layout } from "antd";

export default function Editor() {

	const components = useEditorStore(state => state.components)

	return (
		<Layouts showHeader title="Lunax">
			<Layout className="h-full">
				<Layout.Sider className=" bg-slate-500">
					组件列表
				</Layout.Sider>
				<Layout.Content className=" p-7 bg-red-200">
					<div>
						{ 
							components.map(item => item.props.text)
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