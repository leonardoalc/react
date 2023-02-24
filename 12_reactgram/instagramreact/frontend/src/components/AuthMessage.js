import "./AuthMessage.css"

import Message from "./Message"

const AuthMessage = ({actionName, msg, loading, error, success}) => {
  return (
    <div>
        {!loading && <input type="submit" value={actionName}/>}
        {loading && <input type="submit" value="Aguarde" disabled/>}
        {error && <Message msg={msg} type="error"/>}
        {success && <Message msg={msg} type="success"/>}
    </div>
  )
}
export default AuthMessage