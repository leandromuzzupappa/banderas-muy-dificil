import { IFlags } from "../data/interfaces/flags";

export const getRandom = (max: number) => {
    return Math.floor(Math.random() * max)
}

export const getFlags = async (): Promise<IFlags[]> => {
    const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,translations');
    const data = await response.json();
    return data;
}

export const getRandomFlags = async (): Promise<IFlags[]> => {
    const flagsData = await getFlags();

    const flagsLimit = 4;
    const isCorrect = getRandom(flagsLimit);

    const flags = [];

    for (let i = 0; i < flagsLimit; i++) {
        const randomFlag = flagsData[getRandom(flagsData.length)];
        randomFlag.isCorrect = i === isCorrect;

        flags.push(randomFlag);
    }


    return flags;
}