import { Layout } from "antd";

interface HeaderProps {
	title: React.ReactNode
}
export default function Header(props: HeaderProps) {
	const { title } = props

	return (
		<Layout.Header className=" text-white">
			<div>{title}</div>
		</Layout.Header>
	)
}