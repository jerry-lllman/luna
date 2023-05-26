
import useEditorStore from '@/store/editor'
import styles from './index.module.less'
import { useRef } from 'react'
import DragDot from '../DragDot'

interface Dots {
  top?: boolean,
  topRight?: boolean,
  right?: boolean,
  bottomRight?: boolean,
  bottom?: boolean,
  bottomLeft?: boolean,
  left?: boolean,
  leftTop?: boolean,
}

export default function DragBlock() {

  const {
    getCurrentComponent, updateComponent,
  } = useEditorStore((state) => {
    const {
      getCurrentComponent, updateComponent,
    } = state

    return {
      getCurrentComponent,
      updateComponent,
    }
  })

  const currentComponent = getCurrentComponent()

  const dragStyles = {
    top: currentComponent?.props.top,
    left: currentComponent?.props.left,
    width: currentComponent?.props.width,
    height: currentComponent?.props.height,
  }

  // 解决闭包问题
  const positionRef = useRef(dragStyles)

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    e.preventDefault()

    let { pageX: startX, pageY: startY } = e

    const mouseMove = (ev: MouseEvent) => {
      const { pageX: endX, pageY: endY } = ev
      const distanceX = endX - startX
      const distanceY = endY - startY
      const top = (parseFloat(positionRef.current.top!) + distanceY) + 'px'
      const left = (parseFloat(positionRef.current.left!) + distanceX) + 'px'
      updateComponent(currentComponent!.id, { top, left })
      positionRef.current = { ...positionRef.current, top, left }
      // 更新后续移动事件的相对起点
      startX = endX
      startY = endY
    }

    const mouseUp = () => {
      document.removeEventListener('mousemove', mouseMove)
      document.removeEventListener('mouseup', mouseUp)
    }

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
  }


  const dots: Dots = {
    top: true,
    topRight: true,
    right: true,
    bottomRight: true,
    bottom: true,
    bottomLeft: true,
    left: true,
    leftTop: true,
  }

  return (
    <div className={styles.drag_block} style={dragStyles} onMouseDown={onMouseDown}>
      {
        Object.keys(dots).map(key => <DragDot key={key} placement={key as keyof Dots} />)
      }
    </div>
  )
}