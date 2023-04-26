import TemplateList from "@/components/TemplateList";
import { Layout } from "antd";
import { useState } from "react";

export default function Home() {

	// const [list, setList] = useState()

	const list = new Array(20).fill(1).map((_, index) => index)

	return (
		<div>
			<Layout className=" bg-white">
				<Layout.Header>
					<div>Luna</div>
				</Layout.Header>
				<Layout.Content>
					<div>
						<TemplateList list={list} />
					</div>
				</Layout.Content>
				<Layout.Footer>
					luna
				</Layout.Footer>
			</Layout >
		</div >
	)
}