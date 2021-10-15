import React, { Component } from "react";
import axios from 'axios';
import MenuItem from "./MenuItem";

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sectionsData: [],
            sectionsLength: null,
            menu: [],
        };
        this.sectionsType_id = 1;
        this.amount_id = 10;
        this.APISections = "https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/sections";
        this.APIMenuItems = `https://port-3000-aincbootcampapi-ianrios529550.codeanyapp.com/api/menu/type_amount/${this.sectionsType_id}/${this.amount_id}`;
        this.APIImages = "https://foodish-api.herokuapp.com/api/";
    }
    componentDidUpdate() {

    }

    async componentDidMount() {
        let menuSelect1 = [];
        let menuSelect2 = [];
        let menuImages = [];

        await axios.get(this.APISections)
            .then(sections => {
                this.setState({ sectionsData: sections.data })
                this.setState({ sectionsLength: sections.data.length })
                //console.log(response.data);
            }).catch(error => {
                console.log(error);
            });

        await axios.get(this.APIMenuItems)
            .then(menuItems1 => {
                // menuItems.data.map((item) => {
                //    menuSelect1.push(item);
                //})
                //console.log(menuSelect1);
                axios.get(this.APIMenuItems)
                    .then(menuItems2 => {
                        // menuItems.data.map(item => {
                        //     menuSelect2.push(item);
                        // })
                        //console.log(menuSelect2);

                        this.removeDuplicatesByObjectId(menuItems1.data, menuItems2.data)

                        //console.log(this.menuSelect1);
                        //console.log(this.menuSelect2);

                        let menuSelect = menuItems1.data.concat(menuItems2.data);
                        for (let i = 0; i < menuSelect.length; i++) {
                            //axios.all(this.state.menu.map(() => {
                            axios.get(this.APIImages)
                                //}))
                                .then(image => {
                                    // console.log(image);
                                    // console.log(image.data);
                                    menuSelect[i]["imageData"] = image.data;
                                    //this.menuImages.push(image.data);
                                    this.setState({ menu: menuSelect });
                                }).catch(error => {
                                    console.log(error);
                                })
                        }

                        //console.log('Menu = ' + this.state.menu[0].name);
                        //console.log(this.menuImages);

                    }).catch(error => {
                        console.log(error);
                    });
            }).catch(error => {
                console.log(error);
            });


    }

    removeDuplicatesByObjectId(arr1, arr2) {
        arr1.map(item1 => {
            arr2.map((item2, i) => {
                if (item1.id === item2.id) {
                    arr2.splice(i, 1);
                }
            })
        })
    }

    generateRandomPrice(min = 7, max = 20) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let price = Math.floor(Math.random() * (max - min) + min);
        return `$${price}.99`;
    }

    render() {
        return (
            <>
                <main id='menu'>
                    {
                        this.state.sectionsData.map((item) => {
                            //console.log(item);
                            if (item.id === 1) {
                                return (
                                    <>
                                        <section className="container">
                                            <div className="row bg-white p-5 shadow-lg">
                                                <h3 className="text-capitalize cursive display-2">{item.type}</h3>
                                                {
                                                    this.state.menu.map((menuItem, i) => {
                                                        console.log(menuItem.imageData)
                                                        return (
                                                            <MenuItem
                                                                key={menuItem.id}
                                                                id={menuItem.id}
                                                                name={menuItem.name}
                                                                imageData={menuItem.imageData}
                                                                description={menuItem.description}
                                                                price={this.generateRandomPrice()}
                                                            />
                                                        )
                                                    })
                                                }
                                            </div>
                                        </section>
                                    </>
                                )
                            }
                        })
                    }
                </main>
            </>
        );
    }
}