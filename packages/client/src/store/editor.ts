import { create } from 'zustand'
import { nanoid } from 'nanoid'
import { cloneDeep } from 'lodash-es'
import type { ComponentPropsType } from '@/defaultProps'

const NAME_TYPES = ['LText'] as const

/**
 * @description 所有组件的类型名称
 */
export type ComponentTypes = typeof NAME_TYPES[number]

export interface ComponentData {
  props: ComponentPropsType
  // 组件唯一 id
  id: string
  // 组件库名称 LText、LImage 等
  name: ComponentTypes
}

export type AddComponentData = Omit<ComponentData, 'id'>

export interface EditorStoreProps {
  // 渲染数组
  components: ComponentData[]
  // 当前编辑元素 id
  currentComponentId: string
  addComponent: (props: AddComponentData) => void
  setActive: (id: string) => void
  getCurrentComponent: () => ComponentData | null
  updateComponent: (id: string, props: ComponentPropsType) => void
}

const useEditorStore = create<EditorStoreProps>((set, get) => ({
  components: [],
  currentComponentId: '',
  /**
   * @description 添加组件
   */
  addComponent(component) {
    const newComponent = {
      id: nanoid(),
      ...cloneDeep(component),
    }

    set(state => ({
      components: [
        ...state.components, newComponent,
      ],
    }))
  },
  /**
   * @description 设置选中的 currentComponentId
   */
  setActive(id) {
    set(() => ({ currentComponentId: id }))
  },

  /**
   * @description 获取当前 active 的组件
   */
  getCurrentComponent() {
    const { components, currentComponentId } = get()
    return components.find(item => item.id === currentComponentId) || null
  },

  /**
   * @description 更新组件的 props
   * @param id 组件 id
   * @param props 组件 props
   */
  updateComponent(id, props) {
    const { components } = get()
    const component = components.find(item => item.id === id)!
    component.props = {
      ...component.props,
      ...props,
    }
    set(() => ({ components }))
  },

}))

export default useEditorStore
