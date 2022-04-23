import React from 'react'

const Card = (props) => {
    const { item, index } = props;

    function toCommas(value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (
        <div key={item.id} className="card">
            <a href={"/items/"+item.id}>
                <img className='card--image' src={item.picture} alt={item.title}/>
            </a>
            <div className='card--body'>
                {
                    (item.free_shipping==true)
                    ?<a href={"/items/"+item.id} className='card--body__price--freeshipping'>{toCommas(item.price.amount)}</a>
                    :<a href={"/items/"+item.id} className='card--body__price'>{toCommas(item.price.amount)}</a>
                }
                <p className='card--body__title'>{item.title}</p>
            </div>
            <div className='card--state'>
                <span>
                    {item.address}
                </span>
            </div>
        </div>
    );
}

export default Card;