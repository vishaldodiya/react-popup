import React from 'react';
import styled from 'styled-components'
import ImagePreview from "./ImagePreview";

const IMAGE_URLS: Array<string> = [
  "https://lh3.googleusercontent.com/YEcRcfKUaq3mA3vHN_VcE2G4TN8ZzvyTJnjfOXgVHjfCO3u2zKjJmK6xTdEUm6q5F8OTTcTB7EoiZ4ePpknxq8Jz",
  "https://lh3.googleusercontent.com/0jGB0WpcTOTGUAjSkLZFjV2lox-9rZ1WhduWJYdXlThaaowvZVm7RfvB0F7S6SkaRZTA1L3-O8Ik5x47d4bt8riR",
  "https://lh3.googleusercontent.com/BTmQVc1Rmcee-9JxVcqSeklCQyZbEStqdO43NSnfY-FzhARq66bqJl2LRsvRydmyLGFwn9kxnhCpTmsf5kiUZ5xR=s300",
  "https://lh3.googleusercontent.com/wWyUN_8wHRMxhanvt9jm0ZYFfv72jLArs3AgJVBmSRODdaZ8I9vr9CRxtB9LNWV5uYfw5Yxaqktc7tgDm_sp6V7aNA=s700",
  "https://lh3.googleusercontent.com/yeqH5r517R1hEsotL3Yfk00ntwFdxmFf5s6gU9fui9d1BSnJVojsWkWbOqRN2JlaCt3oRKcbEMfaHKwJATRgHIEy",
]

function App() {
  return (
    <DivContainer>
      <div className="App--instructions">
        Click an image below
      </div>
      <div className="App--items-container">
        {IMAGE_URLS.map(imageUrl =>
          <ImagePreview
            url={imageUrl}
            className="App--item"
            key={imageUrl} />
        )}
      </div>
    </DivContainer>
  );
}

const DivContainer = styled.div`
  width: 100%;
  padding: 20px;
  
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
