import styles from './OptionButton.module.css';

interface IOptionProps {
    name: string;
    onSelectOption: (name: string) => void;
}

export const OptionButton = ({ name, onSelectOption }: IOptionProps) => {
    return (
        <button
            className={styles.optionButton}
            data-name={name}
            onClick={() => onSelectOption(name)}
        >{name}</button>
    )
}