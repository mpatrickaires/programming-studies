import React from 'react';
import { View, Button} from 'react-native';

export default (props) => {
    return (
        <View style={{ flex: 1 }}>
            <View>
                {props.voltar && (
                    <Button
                        title="Voltar"
                        onPress={() => props.navigation.goBack()}
                    />
                )}
                {props.avancar && (
                    <Button
                        title="Avançar"
                        onPress={() =>
                            props.navigation.push(props.avancar, {
                                numero: parseInt(Math.random() * 100),
                            })
                        }
                    />
                )}
            </View>
            <View style={{ flex: 1 }}>{props.children}</View>
        </View>
    );
};
