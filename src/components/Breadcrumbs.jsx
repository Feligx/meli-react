import React from 'react';

const Breadcrumbs = (props) => {
    const breadcrumbs = props.breadcrumbs;
    const permalinks = props.permalinks;
    return (
        <div className="breadcrumbs">
                <ul>
                {
                        (breadcrumbs)?(breadcrumbs.map((item, index) => {
                            if(index != breadcrumbs.length-1)
                                return <li key={index}><a href={permalinks[index]}>{item}</a></li>
                            else
                                return <li key={index}>{item}</li>
                        })):<></>
                    } 
                </ul>
            </div>
    );
}

export default Breadcrumbs;