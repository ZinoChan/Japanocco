import React from "react"
import "./styles.css"

interface Props {
  content: any
}

const FormatHtml: React.FC<Props> = ({ content }) => {
  return (
    <div
      className="format-html"
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  )
}

export default FormatHtml
