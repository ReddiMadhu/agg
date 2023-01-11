import React from 'react';
import $ from 'jquery';
import Popper from 'popper.js';
import styles from '../styles/card.module.css';

import {
    Card,
    Button,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';
  

    class CarType extends React.Component {
        constructor(props) {
        super(props);
        this.state = {
            dropdownOpen: false
        };
        this.toggle = this.toggle.bind(this);
        }
    
        toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
        }
        render() {
            return (
              <Card className={styles.card}>
                <img className={styles.cardImage}src={this.props.imgSrc} alt={this.props.imgAlt} />
                <h4>{this.props.title}</h4>
                <p>{this.props.description}</p>
                <div className={styles.dropdown}>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                  <DropdownToggle caret>
                    More Options
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header>Header</DropdownItem>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                </div>
              </Card>

            
             
            );
          }
        }
export default CarType;
        