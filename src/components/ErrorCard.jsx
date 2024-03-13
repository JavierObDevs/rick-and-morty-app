import "../components/ErrorCard.css";


const ErrorCard = () => {
  return (
    <div className="container_error">
        <p className="error_text">
        The location you are telling us does not exist 😣
        <br />
        💡Remember that you can only select between id 1 and 126. 
        </p>
    </div>
  )
}

export default ErrorCard