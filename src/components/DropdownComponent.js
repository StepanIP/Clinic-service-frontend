import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './styles/dropdown.css';

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
        href=" "
        ref={ref}
        onClick={(e) => {
            e.preventDefault();
            onClick(e);
        }}
        className='tx-gray '
    >
        {children}
        &#x25bc;
    </a>
));
const DropdownComponent = ({Toggle,Item,onItemSelected }) => {
    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (selectedItem) => {
        setSelectedItem(selectedItem);
        if (onItemSelected) {
            onItemSelected(selectedItem);
        }
    };

    return (
        <div className='Dropdown-block'>
            <Dropdown className='Body2 custom-dropdown'>
                <Dropdown.Toggle id="dropdown-basic" className='custom-dropdown'>
                    {selectedItem ? `Вибрано: ${selectedItem}` : Toggle}
                </Dropdown.Toggle>
                <Dropdown.Menu style={{height:200, overflowY:"scroll"}}>
                    {Item.map(item => {
                        return(
                            <Dropdown.Item className='dropdown-item' key={item} onClick={() => handleItemClick(item)}>
                                {item}
                            </Dropdown.Item>
                        )
                    })}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
};
export default DropdownComponent;
