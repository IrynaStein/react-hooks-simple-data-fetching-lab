// create your App component here
import { useEffect, useState } from "react"
function App() {
    const [dogs, setDogs] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const URL = "https://dog.ceo/api/breeds/image/random"

    useEffect(() => {
        fetch(URL)
            .then(resp => resp.json())
            .then(data => {
                setDogs(data.message)
                setIsLoaded(true)
            })

    }, [])

if(!isLoaded) return <p>Loading...</p>


    return (
        <div>
            <img alt="A Random Dog" src={dogs} />
        </div>
    )
}
export default App;