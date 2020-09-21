import React, { useEffect } from 'react';
import styled from 'styled-components'
import ImagePreview from "./ImagePreview";
import Popup from "./Popup";

const IMAGE_URLS: Array<string> = [
  "https://lh3.googleusercontent.com/YEcRcfKUaq3mA3vHN_VcE2G4TN8ZzvyTJnjfOXgVHjfCO3u2zKjJmK6xTdEUm6q5F8OTTcTB7EoiZ4ePpknxq8Jz",
  "https://lh3.googleusercontent.com/0jGB0WpcTOTGUAjSkLZFjV2lox-9rZ1WhduWJYdXlThaaowvZVm7RfvB0F7S6SkaRZTA1L3-O8Ik5x47d4bt8riR",
  "https://lh3.googleusercontent.com/BTmQVc1Rmcee-9JxVcqSeklCQyZbEStqdO43NSnfY-FzhARq66bqJl2LRsvRydmyLGFwn9kxnhCpTmsf5kiUZ5xR=s300",
  "https://lh3.googleusercontent.com/wWyUN_8wHRMxhanvt9jm0ZYFfv72jLArs3AgJVBmSRODdaZ8I9vr9CRxtB9LNWV5uYfw5Yxaqktc7tgDm_sp6V7aNA=s700",
  "https://lh3.googleusercontent.com/yeqH5r517R1hEsotL3Yfk00ntwFdxmFf5s6gU9fui9d1BSnJVojsWkWbOqRN2JlaCt3oRKcbEMfaHKwJATRgHIEy",
]

function App() {

  const [showDialog, toggleDialog] = React.useState(false);
  const [imgUrl, setImgUrl] = React.useState("");
  const [imgIndex, setImgIndex] = React.useState(0);

  const toggleImage = (e: KeyboardEvent) => {
    e.stopPropagation()
    if (!showDialog) return;

    if (e.keyCode === 39) {
      const index = imgIndex >= IMAGE_URLS.length - 1 ? 0 : imgIndex + 1
      setImgIndex(index);
      setImgUrl(IMAGE_URLS[index]);
    } else if (e.keyCode === 37) {
      const index = imgIndex <= 0 ? IMAGE_URLS.length - 1 : imgIndex - 1
      setImgIndex(index);
      setImgUrl(IMAGE_URLS[index]);
    } else if (e.keyCode === 27) {
      toggleDialog(false)
      setImgIndex(0)
      setImgUrl("")
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", toggleImage)

    return () => {
      window.removeEventListener("keydown", toggleImage)
    }
  })

  return (
    <DivContainer>
      <div className="App--instructions">
        Click an image below
      </div>
      <div className="App--items-container">
        {IMAGE_URLS.map((imageUrl, index) =>
          <ImagePreview
            url={imageUrl}
            className="App--item"
            key={imageUrl}
            onClick={() => {
              setImgUrl(imageUrl)
              setImgIndex(index)
              toggleDialog(!showDialog)
            }}
          />
        )}
      </div>
      {showDialog && (
        <Popup url={imgUrl} show={showDialog} toggleDialog={toggleDialog}></Popup>
      )}
    </DivContainer>
  );
}

const DivContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  
  .App--instructions {
    margin-bottom: 20px;
  }
  
  .App--items-container {
    display: flex;
    flex-wrap: wrap;
    
    .App--item {
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
`

export default App;
