import type { ComponentData } from '@/store/editor'

export const defaultTemplates: Omit<ComponentData, 'id'>[] = [
  {
    name: 'LText',
    props: {
      text: '大标题',
      tag: 'h2',
      // fontSize: '30px',
      // lineHeight: '1',
      // fontWeight: 'bold',
      // fontFamily: 'sans-serif'
    },
  },
  {
    name: 'LText',
    props: {
      text: '正文内容',
      tag: 'p',
      fontSize: '14',
      lineHeight: '2',
      fontFamily: 'sans-serif',
      textAlign: 'left',
    },
  },
  {
    name: 'LText',
    props: {
      text: '链接',
      color: '#1890ff',
      textDecoration: 'underline',
      tag: 'a',
    },
  },
  {
    name: 'LText',
    props: {
      background: '#1890ff',
      borderRadius: '5px',
      paddingTop: '3px',
      paddingBottom: '3px',
      paddingLeft: '5px',
      paddingRight: '5px',
      color: 'white',
      text: '按钮',
      tag: 'button',
    },
  },
]
