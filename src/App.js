

import { useState } from 'react'
import Modal from './components/Modal'

const App = () => {
    const [images, setImages] = useState(null)
    const [value, setValue] = useState(null)
    const [error, setError] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const[modalOpen, setModalOpen] = useState(false)
  const surpriseOption = [
      'A blue ostrich eating melon',
      'A massive style shark on the telephone',
      'A pineapple sunbathing on the beach'
  ]

    const surpriseMe = () => {
        setImages(null)
        const randomValue = surpriseOption[Math.floor(Math.random() * surpriseOption.length)]
        setValue(randomValue)
    }

    const getImages = async () => {
        setImages(null)
        if(value === null) {
            setError('Error! Must have a search term')
            return
        }
      try {
          const options = {
                method: 'POST',
                body: JSON.stringify({
                    message: value

                }),
                headers: {
                    'Content-Type': 'application/json'
                }
          }
          const response = await fetch('http://localhost:8002/images',  options)
          const data = await response.json()
          console.log(data)
          setImages(data)

      } catch(error) {
          console.error(error)
      }
    }

    const uploadImage = async (e) => {
        console.log(e.target.files[0])

        const formData = new FormData()
        formData.append('file', e.target.files[0])
        setModalOpen(true)
        setSelectedImage(e.target.files[0])
        e.target.value = null
        try {
            const options = {
                method: 'POST',
                body: formData
            }
            const response = await fetch('http://localhost:8002/upload', options)
            const data = await response.json()
            console.log(data)
        } catch(error) {
            console.error(error)

        }
    }

    const generateVariations = async () => {
        setImages(null)
        if(selectedImage === null) {
            setError('Error! Must have a search term')
            setModalOpen(false)
            return
        }
        try {
            const options = {
                method: 'POST',
            }
            const response = await fetch('http://localhost:8002/variations', options )
            const data = await response.json()
            console.log(data)
            setImages(data)
            setError(null)
            setModalOpen(false)

        } catch(error) {
            console.error(error)
        }
    }





  return (
    <div className="app">

      <section className="search-section">
        <p>Made by Sumaiya
          <span className="surprise" onClick={surpriseMe}>Surprise me</span>
        </p>
          <div className="input-container">
              <input
                  className="larger-input-font"
                  value={value}
                  placeholder="An impressionist oil painting of a sunflower in a purple verse..."
                  onChange={e => setValue(e.target.value)}
                  onKeyDown={e => {
                      if (e.keyCode === 13) {
                          getImages()
                      }
                  }}
              />
              <button onClick={getImages}>Generate</button>
          </div>


          <p className="extra-info">Or,
              <span>
                  <label htmlFor="files"> upload an image </label>
                  <input onChange={uploadImage} id="files" accept="image/*" type="file" hidden/>
              </span> to edit.
          </p>
          {error && <p>{error}</p>}
          {modalOpen && <div className="overlay">
              <Modal
                  setModalOpen={setModalOpen}
                  setSelectedImage={setSelectedImage}
                  selectedImage={selectedImage}
                  generateVariations={generateVariations}
              />
          </div>}
      </section>
        <section className="image-section">
            {images?.slice(0, 4).map((image, index) => (
                <img key={index} src={image.url} alt={`Generated image of ${value}`} />
            ))}
        </section>


    </div>
  )
}

export default App
