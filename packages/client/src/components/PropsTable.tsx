import { ComponentPropsType } from "@/defaultProps"
import { PropToForm, PropsToForms, mapPropsToForms } from "@/propsMap"
import { Form } from "antd"
import { isNil, keys, reduce } from "lodash-es"
import { Suspense } from "react"


interface PropsTableProps {
	props: ComponentPropsType
}

export default function PropsTable(props: PropsTableProps) {

	const finalProps = reduce(props.props, (result, value, key) => {
		const newKey = key as keyof ComponentPropsType
		const item = mapPropsToForms[newKey]
		if (item) {
			item.value = value as PropToForm['value']
			result[newKey] = item
		}
		return result
	}, {} as PropsToForms)


	return (
		<Form
			labelCol={{ span: 6 }}
			wrapperCol={{ span: 18 }}
		>
			{
				keys(finalProps).map((key) => {
					// 拿到 mapPropsToForms 中自定的对应字段的内容 PropToForm 类型
					const item = finalProps[key as keyof PropsToForms]
					// 如果 item 不存在则返回 null
					if (isNil(item)) return null
					// 否则渲染该组件
					const Component = item.component
					return (
						<Suspense
							key={key}
							fallback={<div>loading...</div>}
						>
							<Form.Item
								label={item.label}
							>
								{/* {item.label && <span>{item.label}</span>} */}
								<Component value={item?.value}  {...item.extraProps} />
							</Form.Item>
						</Suspense>
					)
				})
			}
		</Form>
	)
}