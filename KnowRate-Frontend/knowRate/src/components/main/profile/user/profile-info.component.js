/**
 * Created by TaliZorah on 10.05.2017.
 */
import React from 'react';

import { Card, Icon, Image, Item } from 'semantic-ui-react'
import { Rating, Button } from 'semantic-ui-react'

import "../profile.style.sass";

export default class ProfileInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "Bogdan Oros",
                joined: "2015",
                interests: "Bogdan is a jedi living in Nashville."
            },
            friends: {
                count: 22
            }
        }
    }

    render() {
        return (
            <div className="info-wrp">
                <Card>
                    <Image className="user-img" src='https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png' />
                    <Card.Content>
                        <Card.Header>
                            {this.state.user.name}
                        </Card.Header>
                        <Card.Meta>
                            <span className='date'>
                              {this.state.user.joined}
                            </span>
                        </Card.Meta>
                        <Card.Description>
                            {this.state.user.interests}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='user' />
                            {this.state.friends.count}
                        </a>
                    </Card.Content>
                </Card>
            </div>
        );
    }

}