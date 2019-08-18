import React from 'react'
import NewsItem from './news_item'

const NewsList = ({news}) => {
    let items = news.map((item) => {
        return (
            <div>
                <NewsItem key={item.id} item={item} />
            </div>
        )
    })
    return (
        <div>
            {items}
        </div>
    )
}

export default NewsList;