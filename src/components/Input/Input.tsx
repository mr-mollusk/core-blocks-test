import React, { createRef, useState } from 'react';
import styles from './Input.module.css';

export type InputProps = {
    placeholder?: string;
};

const Input: React.FC<InputProps> = ({ placeholder = '' }) => {
    const [value, setValue] = useState<string>('');
    const inputRef = createRef<HTMLInputElement>();

    return (
        <input
            type="text"
            value={value}
            placeholder={placeholder}
            className={styles.field}
            ref={inputRef}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
            }
        />
    );
};

export default Input;
