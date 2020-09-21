import React from "react"
import styled from "styled-components"

interface Props {
  url: string,
  show: boolean,
  toggleDialog: React.Dispatch<React.SetStateAction<boolean>>
}

export default class Popup extends React.Component<Props> {
  render() {
    const {
      url,
      show,
      toggleDialog
    } = this.props

    return (
      <>
        {show && (
          <DivPopup className="popup">
            <DivImageWrapper className="popup__image">
              <Image src={url}></Image>
            </DivImageWrapper>
            <DivPopupOverlay className="popup__overlay" onClick={() => toggleDialog(!show)}></DivPopupOverlay>
          </DivPopup>
        )}
      </>
    )
  }
}

const DivPopup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`

const DivPopupOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: gray;
  opacity: 0.7;
  position: absolute;
  top: 0;
`

const DivImageWrapper = styled.div`
  width: 80vw;
  height: 80vw;

  @media (min-width:450px) {
    width: 40vw;
    height: 40vw;
  }

  background-color: #fff;
  display: flex;
  justify-content: center;
  z-index: 2;
`

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`