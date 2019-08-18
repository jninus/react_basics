import React from 'react'
import { css } from 'glamor'



const NewsItem = ({item})=>{

    let new_item = css({
        padding : '20px',
        boxSizing : 'border-box',
        borderBottom : '1px solid grey',
        ':hover' : {
            color : 'red'
        }
    })

    let item_grey = css({
        background : 'lightgrey'
    })

    return (
        <div className ={ `${new_item} ${item_grey}`}>
            <h3>{item.title}</h3>
            <div>
                <p>
                    {item.feed}
                </p>
            </div>
        </div>
    )
}

export default NewsItem