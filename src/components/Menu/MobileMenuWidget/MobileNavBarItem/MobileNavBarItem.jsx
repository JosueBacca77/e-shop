import './MobileNavBarItem.css'


const MobileNavBarItem = ({name, myclass, onHandleNav}) => {

    return (
        <li>
            {
                <div onClick={onHandleNav}>
                {
                    myclass ==='user'
                    ?
                    <p className={myclass}>{name}</p>
                    :
                    <p className={myclass}>{name}</p>
                    }
                </div>
            }
        </li>
    )
}

export default MobileNavBarItem;