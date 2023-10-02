
const BGsvg = ({name,color}) =>{
    return(
        <>
            <svg width="100%" height="344" viewBox="0 0 2094 344" className={`${name}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="shadow-2xl shadow-dark" d="M1 342.601H2093V138.601C1993 3.10092 1832 81.6009 1665.5 160.101C1499 238.601 1485.5 229.101 1129 81.6009C772.5 -65.8991 699 10.6009 514 138.601C366 241.001 110.333 95.9343 1 10.6009V342.601Z" 
                // fill="rgb(23, 107, 135, 0.4)"
                fill={color}
                />
                <path d="M2093 98.1009V138.601M2093 138.601V342.601H1V10.6009C110.333 95.9343 366 241.001 514 138.601C699 10.6009 772.5 -65.8991 1129 81.6009C1485.5 229.101 1499 238.601 1665.5 160.101C1832 81.6009 1993 3.10092 2093 138.601Z" />
            </svg>

        </>
    )
}
export default BGsvg