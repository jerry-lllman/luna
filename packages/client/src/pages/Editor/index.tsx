import Layouts from "@/layouts";
import { Layout } from "antd";

export default function Editor() {
	return (
		<Layouts showHeader title="Lunax">
			<Layout className="h-full">
				<Layout.Sider className=" bg-slate-500">
					组件列表
				</Layout.Sider>
				<Layout.Content className=" p-7 bg-red-200">
					内容
				</Layout.Content>
				<Layout.Sider className="bg-blue-200">
					组件设置
				</Layout.Sider>
			</Layout>
		</Layouts>
	)
}