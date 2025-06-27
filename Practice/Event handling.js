function Eventhandling(){
    function displayMessage(num,e){
        alert("button clicked :"+num);
        console.dir(e.target)
    }
    return(
        <input type='text' onKeyUp={(e)=>{
            displayMessage(10,e)
        }}/>
    )
}
export default Eventhandling;