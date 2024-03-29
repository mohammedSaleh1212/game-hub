interface Props {
    text:string 
    
}
const Heading = ({text}:Props) => {
  return (
    <h1 className="mb-3">{text?text:null} </h1>
  )
}

export default Heading