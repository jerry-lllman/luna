import classNames from "classnames"
import styles from './index.module.less'

interface DragDotProps {
  placement: 'top' | 'topRight' | 'right' | 'bottomRight' | 'bottom' | 'bottomLeft' | 'left' | 'leftTop'
}

const placementClass = {
  top: 'top-0 left-1/2 h-1 -translate-y-3/4',
  topRight: 'top-0 left-full',
  right: 'right-0 top-1/2 w-1 translate-x-3/4',
  bottomRight: 'left-full  top-full',
  bottom: 'top-full left-1/2 h-1',
  bottomLeft: 'left-0 top-full',
  left: 'left-0 top-1/2 w-1 ml-[-1px]',
  leftTop: 'left-0 top-0',
}

export default function DragDot(props: DragDotProps) {

  const dotClass = classNames(styles.dot_wrap, placementClass[props.placement])

  const dotContent = classNames('block w-full h-full rounded-full bg-white', styles.dot_content)
  return (
    <i className={dotClass}>
      <b className={dotContent}></b>
      {/* <b className=" translate-x-3/4"></b> */}
    </i>
  )
}