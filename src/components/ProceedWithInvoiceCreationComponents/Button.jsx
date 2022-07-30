const Button = ({ isReadyForPrint, onClick, content }) =>
   <button 
   className={`bg-blue-300 text-white rounded p-1 ml-2 mt-10 ${isReadyForPrint ? 'invisible' : 'visible'}`} 
   onClick={onClick}>
      {content}
   </button>

export default Button;