import { OptionButton } from "../OptionButton/OptionButton";
import styles from './OptionList.module.css'
import { IFlags } from "../../data/interfaces/flags";

interface IOptionListProps {
    options: IFlags[],
    onSelect: (name: string) => void
}

export const OptionList = ({ options, onSelect }: IOptionListProps) => {

    return (
        <ul className={styles.optionList}>
            {options.map((flag: IFlags) => (
                <li key={flag.name.common}>
                    <OptionButton name={flag.translations.spa.common} onSelectOption={onSelect} />
                </li>
            ))}
        </ul>
    )
}