import "../../../output.css"
import { FaUser } from "react-icons/fa";

function ProfilePicture(props) {

    return (
        <div className="rounded-full px-3 py-3 text-lg font-bold text-black transition-all duration-150 bg-white hover:text-gray-500">
            <FaUser />
        </div>
    )
}

export default ProfilePicture