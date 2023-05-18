import { useRef } from 'react';
import { useState } from 'react';
import useOnClickOutside from '../../utils/useOnClickOutside';
import './Dropdown.css';

type DropdownProps = {
    options: { label: string, value: any }[];
    onChange?: Function
}

const Dropdown = ({ options = [], onChange }: DropdownProps) => {

    const [selectedOption, setSelectedOption] = useState(options[0]);
    const [isOpened, setIsOpened] = useState(false);
    const dropdownRef = useRef(null);
    useOnClickOutside(dropdownRef, () => setIsOpened(false));

    const onChangeHandler = (option: { label: string, value: any }) => {
        setSelectedOption(option);
        setIsOpened(false);
        if (onChange) {
            onChange(option.value);
        }
    }
    return (
        <div className='dropdown_container' ref={dropdownRef}>
            <button type={'button'} onClick={() => setIsOpened(!isOpened)} className="dropdown_input">{selectedOption.label}</button>
            {isOpened && <ul className="dropdown_list">
                {options.map((option, index) =>
                    <li key={option.value + "_" + index} className="dropdown_list_item">
                        <button type={'button'} onClick={() => onChangeHandler(option)} className="dropdown_list_item_button">{option.label}</button>
                    </li>
                )}
            </ul>}
        </div>
    )
}
export default Dropdown