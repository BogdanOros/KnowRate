import React from 'react';
import { Divider, Form, Label, Input } from 'semantic-ui-react'
import { Image, Item } from 'semantic-ui-react'
import ReactPaginate from 'react-paginate';
import ReactModal from 'react-modal';

import GoogleMapReact from 'google-map-react';

import './main.style.sass';

export default class MainComponent extends React.Component {

    companies = [
        {
            name: "Google",
            image: "https://madeby.google.com/static/images/google_g_logo.svg",
            description: "Lets work",
            address: {
                value: "Ashburn",
                coordinates: {
                    lat: 59.955413,
                    lon: 30.337844
                }
            },
            skills: [
                {
                    name: "C++"
                },
                {
                    name: "GoLang"
                }
            ]
        },
        {
            name: "EPAM",
            image: "https://madeby.google.com/static/images/google_g_logo.svg",
            description: "Lets work",
            address: {
                value: "Ashburn",
                coordinates: {
                    lat: 59.955413,
                    lon: 30.337844
                }
            },
            skills: [
                {
                    name: "C++"
                },
                {
                    name: "GoLang"
                }
            ]
        }, {
            name: "MICROSOFT",
            image: "https://madeby.google.com/static/images/google_g_logo.svg",
            description: "Lets work",
            address: {
                value: "Ashburn",
                coordinates: {
                    lat: 59.955413,
                    lon: 30.337844
                }
            },
            skills: [
                {
                    name: "C++"
                },
                {
                    name: "GoLang"
                }
            ]
        },
    ];

    constructor(props) {
        super(props);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            modalIsOpen: false,
            companies: this.companies,
            size: 2,
            offset: 2,
            center: {lat: 59.95, lng: 30.33},
            zoom: 11
        };
        this.showCompanies = this.showCompanies.bind(this);
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    showCompanies() {
        return this.state.companies.map(function (company) {
            let customStyle = {
                overlay : {
                    position          : 'fixed',
                    top               : 0,
                    left              : 0,
                    right             : 0,
                    bottom            : 0,
                    backgroundColor   : 'rgba(240,240,240, 0.75)'
                },
                content : {
                    width: "400px",
                    height: "300px",
                    top                   : '50%',
                    left                  : '50%',
                    right                 : 'auto',
                    bottom                : 'auto',
                    marginRight           : '-50%',
                    transform             : 'translate(-50%, -50%)'
                }
            };
           return (
               <div>
                   <Item className="company-item">
                       <Item.Image className="item-image" size='small' src={company.image} />

                       <Item.Content className="item-content">
                           <Item.Header className="item-header" as='p'>{company.name}</Item.Header>
                           <Item.Description>
                               <span className="item-description">{company.description}</span>
                               <a className="item-address">
                                   <span onClick={() => this.setState({modalIsOpen: true})} >{company.address.value}</span>
                                   <ReactModal
                                       contentLabel="Log In"
                                       style={customStyle}
                                       onRequestClose={this.closeModal}
                                       isOpen={this.state.modalIsOpen}>
                                       <div className="map-holder">
                                           <GoogleMapReact
                                               bootstrapURLKeys={{key: "AIzaSyBnbf7Lt8bolrSroW6dHA87yCx65lzJnxE"}}
                                               defaultCenter={this.state.center}
                                               defaultZoom={this.state.zoom}
                                           >
                                               <AnyReactComponent
                                                   lat={company.address.coordinates.lat}
                                                   lng={company.address.coordinates.lon}
                                                   text={company.address.value}
                                               />
                                           </GoogleMapReact>
                                       </div>
                                   </ReactModal>
                               </a>
                           </Item.Description>
                       </Item.Content>
                   </Item>
               </div>
           )
        }, this);
    };

    search = (event) => {
        let result = this.companies.filter(function (company) {
            return company.name.includes(event.target.value);
        });
        this.setState({companies: result});
    };

    handlePageClick = (event) => {

    };

    render() {
        return (
            <div>
                <Form>
                    <Form.Field>
                        <Label pointing="below">Please enter a company name</Label>
                        <Input onChange={this.search} icon='search' placeholder='Search...' />
                    </Form.Field>
                    <Divider />
                    <Item.Group>
                        {this.showCompanies()}
                    </Item.Group>
                    <ReactPaginate previousLabel={"previous"}
                                   nextLabel={"next"}
                                   breakLabel={<a href="">...</a>}
                                   breakClassName={"break-me"}
                                   pageCount={10}
                                   marginPagesDisplayed={2}
                                   pageRangeDisplayed={5}
                                   onPageChange={this.handlePageClick}
                                   containerClassName={"pagination"}
                                   subContainerClassName={"pages pagination"}
                                   activeClassName={"active"} />
                </Form>
            </div>
        );
    }
}
const AnyReactComponent = ({ text }) => <div>{text}</div>;