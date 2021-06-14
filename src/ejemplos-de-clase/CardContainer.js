import { render } from '@testing-library/react';
import React from 'react';
import Card from './Card';



const referensData = [
            {
                message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
                user: {
                    name: 'Nataly G',
                    course: 'Desarrollo React'
                }
            },
            {
                message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
                user: {
                    name: 'Juan Pablo',
                    course: 'Desarrollo React'
                }
            },
            {
                message: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
                user: {
                    name: 'Matias',
                    course: 'Desarrollo React'
                }
            },
        ]

class CardContainer extends React.Component {
state = {
    referens: referensData,
}

render() {
    return(
        <div>
            Container Card
            {this.state.referens.map((item) => <Card {... item}/>)}
        </div>
    )
}
}

export default CardContainer;
