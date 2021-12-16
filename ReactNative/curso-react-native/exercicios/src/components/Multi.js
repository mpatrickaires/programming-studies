import React from 'react';
import { Text } from 'react-native';

import Estilo from './estilo';

function Comp() {
    return <Text style={Estilo.txtG}>Comp #Oficial</Text>;
}

function Comp1() {
    return <Text style={Estilo.txtG}>Comp #01</Text>;
}

function Comp2() {
    return <Text style={Estilo.txtG}>Comp #02</Text>;
}

export default Comp;
export { Comp1, Comp2 };

{
    /* 

    Maneira com o export diretamente ao lado das funções:

    export default () => <Text>Comp #Oficial</Text>;


    export function Comp1() {
       return <Text>Comp #01</Text>;
    }

    export function Comp2() {
        return <Text>Comp #02</Text>;
    }

    */
}
