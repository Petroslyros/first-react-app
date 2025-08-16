const ProfilePicture = () => {


    const imgURL = './src/assets/profilepic.jpeg'

    const handleClick = (e) => e.target.style.display = "none"

    return (<img onClick={(e) => handleClick(e)} src={imgURL}></img>)

}

export default ProfilePicture