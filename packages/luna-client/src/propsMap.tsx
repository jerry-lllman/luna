import {
  Input, InputNumber, Radio, Select, Slider,
} from 'antd'
import type { ComponentPropsType } from './defaultProps'

const { TextArea } = Input
const { Group: RadioGroup } = Radio

export interface PropToForm {
  label?: string
  value?: string // 组件的值
  valueProp?: string // 自定义组件的值的属性名，默认用 value 作为组件的值的 key
  eventNames?: string[] // 更新组件的 store 事件名称，默认为 onChange
  component: React.ReactNode // 渲染的组件
}

export type PropsToForms = {
  [P in keyof ComponentPropsType]?: PropToForm
}

const fontFamilyOptions = [
  { label: '默认', value: 'sans-serif' },
  { label: '宋体', value: '"SimSun", "STSong", serif' },
  { label: '黑体', value: '"SimHei", "STHeiti", sans-serif' },
  { label: '微软雅黑', value: '"Microsoft YaHei", "STXihei", sans-serif' },
  { label: '楷体', value: '"KaiTi", "STKaiti", serif' },
  { label: '仿宋', value: '"FangSong", "STFangsong", serif' },
  { label: 'Arial', value: 'Arial, sans-serif' },
  { label: 'Times New Roman', value: '"Times New Roman", serif' },
  { label: 'Georgia', value: 'Georgia, serif' },
  { label: 'Verdana', value: 'Verdana, sans-serif' },
  { label: 'Courier New', value: '"Courier New", monospace' },
]

export const mapPropsToForms: PropsToForms = {
  text: {
    label: '文本',
    component: (
      <TextArea
        rows={3}
        placeholder="请输入内容"
        style={{ resize: 'none' }}
        onChange={(e: any) => e.target.value}
      />
    ),
  },
  color: {
    label: '颜色',
    component: '',
  },
  fontSize: {
    label: '字号',
    component: (
      <InputNumber
        min={12}
        max={100}
        step={1}
        formatter={value => `${value}px`}
        parser={value => value!.replace('px', '') as any}
        onChange={value => value}
      />
    ),
  },
  lineHeight: {
    label: '行高',
    component: <Slider min={0} max={3} step={0.1} onChange={(value: number) => value} />,
  },
  fontFamily: {
    label: '字体',
    component: <Select options={fontFamilyOptions.map(item => ({ ...item, label: <span style={{ fontFamily: item.value }}>{item.label}</span> }))} onChange={(value: number) => value} />,
  },
  textAlign: {
    label: '对齐',
    component: <RadioGroup optionType="button" options={[{ label: '左对齐', value: 'left' }, { label: '居中', value: 'center' }, { label: '右对齐', value: 'right' }]} onChange={(e: any) => e.target.value} />,
  },
}
