import { ColorsProvider } from '@Util/ColorsContext';
import { GridProvider } from '@Util/GridContext';


export default function ContextWrapper({ children }: { children: React.ReactNode }) {
    return (
        
        <ColorsProvider>
        <GridProvider>
            { children }
        </ GridProvider>
        </ColorsProvider>
    );
}