import React, { ReactElement } from 'react'
import cn from 'classnames'

import './style.scss'

type CardProps = {
    children: ReactElement;
    wrapper?: boolean;
    blogCard?: boolean;
    title?: string;
}

const Card = ({ children, title, blogCard, wrapper }: CardProps) => {

    return (
        <div
            className={cn('card', {
                'wrap': wrapper,

            })}
        >
            {title && <h4 className="card-title">{title}</h4>}
            {children}
        </div>
    )
}

export default Card
