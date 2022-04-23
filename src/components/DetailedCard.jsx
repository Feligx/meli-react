import React from 'react';

const DetailedCard = (props) => {
    const { item } = props;

    const handlePurchaseSolicitude= () => {
        alert('Compra!');
    }

    return(
        <> 
            <div className="details--content">
                <img className='details--image' src={item.item.picture}/>
                <div className='details--body'>
                    <span className='details--body__conditions'>{item.item.condition} - {item.item.sold_quantity} vendidos</span>
                    <h2 className='details--body__product-name'>{item.item.title}</h2>
                    <h1 className='details--body__price'>{item.item.price.amount}</h1>
                    <button className='details--body__button' onClick={handlePurchaseSolicitude}>
                        Comprar
                    </button>
                </div>
            </div>
            <div className="details--description">
                <h3 className='details--description__title'>Descripción del producto</h3>
                <p className='details--description__text'>{item.item.description}</p>
            </div>
        </>
    );
}

export default DetailedCard;