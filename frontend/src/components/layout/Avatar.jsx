const Avatar = ({name}) => {
    return (
        <div className="avatar center">
         <p>{name.slice(0,1).toUpperCase()}</p> 
        </div>
    )
}

export default Avatar;
