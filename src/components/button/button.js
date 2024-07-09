const ButtonComponent=(prop)=>{
    const buttonStyle={color:"red" ,backgroundCOlor:"green"}
    const{text,bgColor,onPress,width,height}=prop;
    return(
        <button onClick={onPress} 
        //  style={{backgroundColor:bgColor,width:width,height:height}}
        // class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-full"
        >click me</button>
    )
}
export default ButtonComponent;