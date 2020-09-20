import React from "react"
import styled from "styled-components"

interface Props {
  url: string
  className?: string
  onClick: () => void;
}

export default class ImagePreview extends React.Component<Props> {
  render() {
    const {
      url,
      className,
      onClick
    } = this.props

    return (
      <DivContainer className={className} onClick={() => onClick()}>
        <div
          className="ImagePreview--image"
          style={{backgroundImage: `url(${url})`}}  />
      </DivContainer>
    )
  }
}

const DivContainer = styled.div`
  border: 1px solid lightgray;
  padding: 20px;

  .ImagePreview--image {
    width: 200px;
    height: 200px;
    background-repeat:no-repeat;
    background-position: center;
    background-size: contain;
    background-color: white;
  }
`
