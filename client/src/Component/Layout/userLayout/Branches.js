import React,{useContext} from 'react'
import UserContext from '../../../context/user/userContext'

const Branches = () => {
    const userContext = useContext(UserContext)
    const {showBranches} = userContext
    
    return (
        <div className={`branches ${showBranches}`}>
            <div className="branches-header">
                <div className="branches-header-content">
                    <h4>Select your branch</h4>
                    <i class="fas fa-mouse-pointer"></i>
                </div>
            </div>
            <div className="branches-body">
                <ul>
                    <li>
                        <i class="fas fa-church"></i>
                        <a href="#">Church branch name</a>
                    </li>
                    <li>
                        <i class="fas fa-church"></i>
                        <a href="#">Church branch name</a>
                    </li>
                    <li>
                        <i class="fas fa-church"></i>
                        <a href="#">Church branch name</a>
                    </li>
                    <li>
                        <i class="fas fa-church"></i>
                        <a href="#">Church branch name</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Branches
