import { Form } from 'antd'
import { isNil, keys, mapValues, reduce } from 'lodash-es'
import { Suspense, cloneElement, isValidElement } from 'react'
import { mapPropsToForms } from '@/propsMap'
import type { PropToForm, PropsToForms } from '@/propsMap'
import type { ComponentPropsType } from '@luna-cat/luna-components'

interface PropsTableProps {
  props: ComponentPropsType
  updateComponentProps: (value: ComponentPropsType) => void
}

function ItemComponentWrapper(props: { [x: string]: any; children: any }) {
  const { children, ...rest } = props
  return cloneElement(children, rest)
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
        // 如果 eventNames 不存在 则表示默认给其添加 onChange
        eventNames: item.eventNames || ['onChange'],
      }

      // 需要先判断一下是否为 React 组件
      if (isValidElement(newItem.component)) {
        // 给组件的 props 添加组件值，如果没有定义就以 value 作为key
        const itemComponentProps = {
          ...newItem.component.props, [item.valueProp || 'value']: value,
        }

        // 对事件进行包装成可以更新 store 的事件
        mapValues(itemComponentProps, (value, key) => {
          if (newItem.eventNames.includes(key)) {
            // 将事件进行包装为可以更新 store 的 事件
            itemComponentProps![key] = (e: any) => {
              let newValue = e
              newValue = value(e)
              const newProps = {
                ...componentProps, [newKey]: newValue,
              }
              // 更新 store 的 props
              updateComponentProps(newProps)
            }
            // 重写完成后将其从 eventNames 中移除
            newItem.eventNames = newItem.eventNames.filter(item => item !== key)
          }
        })

        // 因为 component 的 props 不能是只读属性，所以需要包装一下重新传递新的 props
        newItem.component = <ItemComponentWrapper {...itemComponentProps} >{item.component}</ItemComponentWrapper>
      }

      result[newKey] = newItem
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
          const item = finalProps[key]
          // 如果 item 不存在则返回 null
          if (isNil(item))
            return null
          // 否则渲染该组件
          const Component = item.component
          return (
            <Form.Item
              key={key}
              label={item.label}
            >
              <Suspense fallback={<div>loading...</div>}>
                {Component}
              </Suspense>
            </Form.Item>
          )
        })
      }
    </Form>
  )
}
