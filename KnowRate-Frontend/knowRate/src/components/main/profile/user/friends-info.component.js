import React from 'react';

import { Card, Icon, Image, Item } from 'semantic-ui-react'
import { Rating, Button } from 'semantic-ui-react'

import ReactScrollbar from 'react-scrollbar-js';

import "../profile.style.sass";

export default class FriendsInfo extends React.Component {

    render() {
        const myScrollbar = {
            height: 500,
        };
        return (
            <div className="friends-wrp">
                Friends
                <hr />
                <ReactScrollbar style={myScrollbar}>
                    <Card.Group itemsPerRow="1" className="friends-scroll-wrp">
                        <Card>
                            <Card.Content>
                                <Image floated='right' size='mini' src='https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png' />
                                <Card.Header>
                                    Steve Sanders
                                </Card.Header>
                                <Card.Meta>
                                    Friends of Elliot
                                </Card.Meta>
                                <Card.Description>
                                    Steve wants to add you to the group <strong>best friends</strong>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Image floated='right' size='mini' src='https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png' />
                                <Card.Header>
                                    Molly Thomas
                                </Card.Header>
                                <Card.Meta>
                                    New User
                                </Card.Meta>
                                <Card.Description>
                                    Molly wants to add you to the group <strong>musicians</strong>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Image floated='right' size='mini' src='https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png' />
                                <Card.Header>
                                    Jenny Lawrence
                                </Card.Header>
                                <Card.Meta>
                                    New User
                                </Card.Meta>
                                <Card.Description>
                                    Jenny requested permission to view your contact details
                                </Card.Description>
                            </Card.Content>
                        </Card>

                        <Card>
                            <Card.Content>
                                <Image floated='right' size='mini' src='https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png' />
                                <Card.Header>
                                    Jenny Lawrence
                                </Card.Header>
                                <Card.Meta>
                                    New User
                                </Card.Meta>
                                <Card.Description>
                                    Jenny requested permission to view your contact details
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Image floated='right' size='mini' src='https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png' />
                                <Card.Header>
                                    Jenny Lawrence
                                </Card.Header>
                                <Card.Meta>
                                    New User
                                </Card.Meta>
                                <Card.Description>
                                    Jenny requested permission to view your contact details
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Image floated='right' size='mini' src='https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png' />
                                <Card.Header>
                                    Jenny Lawrence
                                </Card.Header>
                                <Card.Meta>
                                    New User
                                </Card.Meta>
                                <Card.Description>
                                    Jenny requested permission to view your contact details
                                </Card.Description>
                            </Card.Content>
                        </Card>
                        <Card>
                            <Card.Content>
                                <Image floated='right' size='mini' src='https://cdn0.iconfinder.com/data/icons/user-pictures/100/matureman1-512.png' />
                                <Card.Header>
                                    Jenny Lawrence
                                </Card.Header>
                                <Card.Meta>
                                    New User
                                </Card.Meta>
                                <Card.Description>
                                    Jenny requested permission to view your contact details
                                </Card.Description>
                            </Card.Content>
                        </Card>

                    </Card.Group>
                </ReactScrollbar>
            </div>
        );
    }

}