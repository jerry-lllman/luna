import { create } from 'zustand'
import { nanoid } from 'nanoid'

export interface EditorProps {
	// 渲染数组
	components: ComponentData[]
	// 当前编辑元素 id
	currentElement: string
}

interface ComponentData {
	props: { [key: string]: any }
	// 组件唯一 id
	id: string
	// 组件库名称 l-text、l-image 等
	name: string
}

const useEditorStore = create<EditorProps>((set) => ({
	components: [],
	currentElement: '',
}))

export default useEditorStore