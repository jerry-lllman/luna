import { Layout } from 'antd'

interface HeaderProps {
  title: React.ReactNode
}
export default function Header(props: HeaderProps) {
  const { title } = props

  return (
		<Layout.Header className="bg-white border-b border-b-slate-300">
			<div>{title}</div>
		</Layout.Header>
  )
}
