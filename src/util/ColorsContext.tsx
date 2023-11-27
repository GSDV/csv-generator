import { createContext, useState } from 'react';

const LETTERS = '789ABCD'.split('');

export interface Color {
    code: string
}


interface ColorsContextProps {
    colors: Color[];
    makeColor: () => void;
    removeColor: () => void;
    userSelection: number;
    setSelection: React.Dispatch<React.SetStateAction<number>>;
    updateColor: (val: string) => void;
}

export const ColorsContext = createContext<ColorsContextProps>({
    colors: [],
    makeColor: () => {},
    removeColor: () => {},
    userSelection: 0,
    setSelection: () => {},
    updateColor: (val: string) => {}
});

export const ColorsProvider = ({ children }: { children: React.ReactNode }) => {
    let startCols: Color[] = [{code: '#c7c7c7'}, {code: '#858585'}];
    const [colors, setColors] = useState<Color[]>(startCols);

    const [userSelection, setSelection] = useState<number>(0);

    const makeColor = () => {
        let newColors = colors.slice();
        let c = '#';
        for(var i=0; i<6; i++){  c += LETTERS[Math.floor(Math.random() * LETTERS.length)];  }
        newColors.push({ code: c });
        setColors(newColors);
    }

    const removeColor = () => {
        if (colors.length <= 2) return;
        let newColors = colors.slice(0, colors.length-1);
        setColors(newColors);

        if (userSelection==newColors.length) setSelection(newColors.length-1);
    }

    const updateColor = (val: string) => {
        let newColors = colors.slice();
        newColors[userSelection] = { code: val };
        setColors(newColors);
    }


    return (
        <ColorsContext.Provider value={{ colors, makeColor, removeColor, userSelection, setSelection, updateColor }}>
            {children}
        </ColorsContext.Provider>
    );
};
