
import useEditorStore from '@/store/editor'
import styles from './index.module.less'
import { ComponentPropsType } from '@luna-cat/luna-components'



interface HoverBlockProps {
  componentProps: ComponentPropsType
}

export default function HoverBlock(props: HoverBlockProps) {

  const hoverBlockStyle = {
    top: props.componentProps.top,
    left: props.componentProps.left,
    width: props.componentProps.width,
    height: props.componentProps.height,
  }

  return (
    <div className={styles.hover_block} style={hoverBlockStyle}>

    </div>
  )
}