
const VersionItem = ({data}) => {
    const {date, ver, list} = data
    return (
        <div className='verLog'>
            <div className='version'>
                <div>{date}</div>
                <div>{ver}</div>
            </div>
            {
                list.map((i, idx) =>{
                    return <div key={idx}>
                        <div className='page'>{i.name}</div>
                        {
                            i.li.map((x, idx2)=>{
                                return <ul key={idx2}>
                                    <li>{x}</li>
                                </ul>
                            })
                        }
                    </div>
                })
            }
        </div>
    )
}

export default VersionItem;