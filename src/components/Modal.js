import { useState, useRef } from "react"
const Model =({setModalOpen, setSelectedImage, selectedImage, generateVariations}) => {
    const [error, setError] = useState(null)
    const ref = useRef(null)

    console.log('selectedImage', selectedImage)
    const closeModal = () => {
        setModalOpen(false)
        setSelectedImage(null)
    }

    const checkSize = () => {
        if(ref.current.width == 256 && ref.current.height == 256) {
            generateVariations()
        } else {
            setError('Error! Image must be 256x256')
        }

    }
    return (
        <div className="modal">
        <div onClick={closeModal}>✖</div>
            <div className="img-container">
                {selectedImage && <img ref={ref} src={URL.createObjectURL(selectedImage)} alt="uploaded image"/>}

            </div>
            <p>{error || "* Image must be 256x256"}</p>
            {! error && <button onClick={checkSize}>Generate</button>}
            {error && <button onClick={closeModal}>Close this and try again</button>}

        </div>

    )
}

export default Model