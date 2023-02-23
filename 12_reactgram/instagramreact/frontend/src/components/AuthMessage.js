import "./AuthMessage.css"

import Message from "./Message"

const AuthMessage = ({actionName, msg, type, loading, error}) => {
  return (
    <div>
        {!loading && <input type="submit" value={actionName}/>}
        {loading && <input type="submit" value="Aguarde" disabled/>}
        {error && <Message msg={msg} type={type}/>}
    </div>
  )
}
export default AuthMessage