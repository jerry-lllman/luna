import { ComponentPropsType } from "@/defaultProps"
import { PropToForm, PropsToForms, mapPropsToForms } from "@/propsMap"
import { Form } from "antd"
import { isNil, keys, mapValues, reduce } from "lodash-es"
import { Suspense } from "react"

interface PropsTableProps {
	props: ComponentPropsType
	updateComponentProps: (value: ComponentPropsType) => void
}

export default function PropsTable(props: PropsTableProps) {

	const { props: componentProps, updateComponentProps } = props

	// 组件的配置项字段对应的 PropToForm 类型
	const finalProps = reduce(componentProps, (result, value, key) => {
		const newKey = key as keyof ComponentPropsType
		const item = mapPropsToForms[newKey]
		if (item) {

			const newItem: PropToForm & { eventNames: string[] } = {
				...item,
				// 如果 eventNames 为 undefined 则表示默认给其添加 onChange
				eventNames: item.eventNames || ['onChange'],
				extraProps: {
					...item.extraProps,
					// 组件取值字段，如果没有定义就以 value 为准
					[item.valueProp || 'value']: value,
				}
			}

			result[newKey] = newItem

			// // 对事件进行包装成可以更新 store 的事件
			mapValues(newItem.extraProps, (value, key) => {
				// 如果该字段没有被包装过，则将其进行包装
				if (newItem.eventNames.includes(key)) {
					// 判定为 Function，将 Function 进行包装为可以更新 store 的 事件
					newItem.extraProps![key] = (e: any) => {
						let newValue = e
						newValue = value(e)
						const newProps = { ...componentProps, [newKey]: newValue }
						// 更新 store 的 props
						updateComponentProps(newProps)
					}
					// 已经包装过了则将其从 eventNames 中移除
					newItem.eventNames = newItem.eventNames.filter(item => item !== key)
				}
			})
		}
		return result
	}, {} as PropsToForms)


	return (
		<Form
			labelCol={{ span: 4 }}
			wrapperCol={{ span: 20 }}
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
								key={key}
								label={item.label}
							>
								<Suspense fallback={<div>loading...</div>}>
									<Component  {...item.extraProps} />
								</Suspense>
							</Form.Item>
						</Suspense>
					)
				})
			}
		</Form>
	)
}