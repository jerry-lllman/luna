import { create } from 'zustand'
import { nanoid } from 'nanoid'
import { ComponentPropsType } from '@/defaultProps'
import { cloneDeep } from 'lodash-es'

const NAME_TYPES = ['LText'] as const

/**
 * @description 所有组件的类型
 */
export type ComponentTypes = typeof NAME_TYPES[number]

export interface EditorStoreProps {
	// 渲染数组
	components: ComponentData[]
	// 当前编辑元素 id
	currentElement: string

	// 添加组件
	addComponent: (props: ComponentData) => void
}

export interface ComponentData {
	props: ComponentPropsType
	// 组件唯一 id
	id?: string
	// 组件库名称 LText、LImage 等
	name: ComponentTypes
}


const useEditorStore = create<EditorStoreProps>((set) => ({
	components: [],
	currentElement: '',
	addComponent(component: ComponentData) {

		const newComponent = {
			id: nanoid(),
			...cloneDeep(component)
		}

		set((state) => ({
			components: [
				...state.components,
				newComponent
			],
		}))
	}
}))

export default useEditorStore