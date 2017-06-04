/**
 * Created by TaliZorah on 10.05.2017.
 */
import React from 'react';

import { Card, Icon, Image, Item } from 'semantic-ui-react'
import { Rating, Button } from 'semantic-ui-react'

import {
    ShareButtons,
    ShareCounts,
    generateShareIcon
} from 'react-share';

import "../profile.style.sass";

export default class SkillsInfo extends React.Component {

    render() {
        const GooglePlusIcon = generateShareIcon('google');
        const {
            GooglePlusShareButton
        } = ShareButtons;
        return (
            <div className="skills-wrp">
                <div className="skills-title">
                    <span>Skills</span>
                    <GooglePlusShareButton url="localhost:3000" >
                        <GooglePlusIcon size={30} round={true}/>
                    </GooglePlusShareButton>
                </div>
                <hr />
                <Item.Group>
                    <Item>
                        <Item.Image size='tiny' src='https://cdn0.iconfinder.com/data/icons/seo-development-services-glyph/614/3273_-_Brainstorming-512.png' />

                        <Item.Content verticalAlign='middle'>
                            <Item.Header>
                                Programming
                            </Item.Header>
                            <Item.Meta>
                                <span className='stay'>1 Month</span>
                                <Rating maxRating={5} rating={3} clearable />
                            </Item.Meta>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Image size='tiny' src='https://cdn0.iconfinder.com/data/icons/seo-development-services-glyph/614/3273_-_Brainstorming-512.png' />

                        <Item.Content verticalAlign='middle'>
                            <Item.Header>
                                Math
                            </Item.Header>
                            <Item.Meta>
                                <span className='stay'>1 Month</span>
                                <Rating maxRating={5} rating={3} clearable />
                            </Item.Meta>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Image size='tiny' src='https://cdn0.iconfinder.com/data/icons/seo-development-services-glyph/614/3273_-_Brainstorming-512.png' />

                        <Item.Content verticalAlign='middle'>
                            <Item.Header>
                                Music
                            </Item.Header>
                            <Item.Meta>
                                <span className='stay'>1 Month</span>
                                <Rating maxRating={5} clearable />
                            </Item.Meta>
                        </Item.Content>
                    </Item>
                </Item.Group>
                <Button circular icon='plus' />
            </div>
        );
    }

}