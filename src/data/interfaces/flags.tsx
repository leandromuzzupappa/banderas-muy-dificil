export interface IFlags {
    flags: IFlags;
    name: IFlagsName;
    translations: { [key: string]: Translation };
    isCorrect: boolean;
}

export interface IFlags {
    png: string;
    svg: string;
    alt: string;
}

export interface IFlagsName {
    common: string;
    official: string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common: string;
}
