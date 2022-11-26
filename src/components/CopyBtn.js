import React, { useState } from "react"
import * as styles from "../styles/copybtn.module.css"
export default function CopyBtn({ CopyText, children }) {
  const [isCopied, setisCopied] = useState(false)
  const copy = async () => {
    await navigator.clipboard.writeText(CopyText)
    setisCopied(true)
    setTimeout(() => {
      setisCopied(false)
    }, 1000)
  }
  return (
    <button onClick={copy} className={styles.btn}>
      {isCopied ? "Zkopírováno!" : children}
    </button>
  )
}
