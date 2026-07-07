const LoadingSpinner = () => {
  return (
    <div class="text-center" >
      <div class="spinner-border spinner" role="status" style={{ width: "5rem", height: "5rem" }} >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}
export default LoadingSpinner;