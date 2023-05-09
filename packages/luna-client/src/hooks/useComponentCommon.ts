import { pick, without } from 'lodash-es'
import type { ComponentPropsType } from '@/defaultProps'

const excludedTextProps = ['actionType', 'url', 'text'] as const

type StyleProps = Omit<ComponentPropsType, typeof excludedTextProps[number]>

// 排除一些特定属性后的到 style 相关的属性名称
function getStylePropNames(props: ComponentPropsType) {
  return without(Object.keys(props), ...excludedTextProps) as unknown as keyof StyleProps
}

// 获取样式
function getStyle(props: ComponentPropsType): StyleProps {
  return pick(props, getStylePropNames(props))
}

function useComponentCommon(props: Readonly<ComponentPropsType>) {
  const styleProps = getStyle(props)

  const handleClick = () => {
    if (props.actionType === 'url' && props.url) {
      debugger
      window.location.href = props.url
    }
  }

  return {
    styleProps,
    handleClick,
  }
}

export default useComponentCommon
