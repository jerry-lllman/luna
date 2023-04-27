import { Layout, LayoutProps } from "antd";
import { Outlet } from 'react-router-dom'
import Header from "./Header";

interface LayoutBaseProps {
  title?: React.ReactNode;
  showHeader?: boolean;
  showFooter?: boolean;
	children: React.ReactNode
}

type LayoutPropsWithTitle = {
  showHeader: true;
  title: React.ReactNode;
} & LayoutBaseProps;

type LayoutPropsWithoutTitle = {
  showHeader?: false | undefined;
  title?: React.ReactNode;
} & LayoutBaseProps;

type LayoutsProps = (LayoutPropsWithTitle | LayoutPropsWithoutTitle) & LayoutProps

export default function Layouts(props: LayoutsProps) {
	const { title, showHeader, showFooter = false, ...layoutProps } = props

	return (
		<Layout className="h-screen bg-white" {...layoutProps}>
			{
				showHeader &&
				<Header title={title} />
			}
			<Layout.Content>
				{props.children}
			</Layout.Content>
			{
				showFooter &&
				<Layout.Footer>
					Footer
				</Layout.Footer>
			}
		</Layout >
	)
}

