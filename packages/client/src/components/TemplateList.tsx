import { Card, Col, Row } from 'antd'

interface TemplateListProps {
  list: any[]
}

export default function TemplateList(props: TemplateListProps) {
  return (
		<div>
			<Row gutter={[16, 16]}>
				{
					props.list.map(item => (
						<Col span={6}>
							<Card>
								{item}
							</Card>
						</Col>
					))
				}
			</Row>
		</div>
  )
}
