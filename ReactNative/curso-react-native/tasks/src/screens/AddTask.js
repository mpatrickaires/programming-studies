import React, { useState, useReducer } from 'react';
import {
    Modal,
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Text,
    TextInput,
    TouchableOpacity,
    Platform,
} from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import DateTimePicker from '@react-native-community/datetimepicker';

import commonStyles from '../commonStyles';

export default (props) => {
    // const [desc, setDesc] = useState();
    // const [date, setDate] = useState(new Date());
    // const [showDatePicker, setShowDatePicker] = useState(false);

    const initialState = {
        desc: '',
        date: new Date(),
        showDatePicker: false,
    };

    const [state, dispatch] = useReducer(
        (state, action) => ({ ...state, ...action }),
        initialState
    );

    function save() {
        const newTask = {
            id: Math.random(),
            desc: state.desc,
            date: state.date,
        };

        props.onSave?.(newTask);
    }

    function getDatePicker() {
        let datePicker = (
            <DateTimePicker
                value={state.date}
                mode="date"
                onChange={(_, newDate) => {
                    dispatch({
                        date: newDate || state.date,
                        showDatePicker: false,
                    });
                    // setShowDatePicker(false);
                }}
            />
        );

        const dateString = moment(state.date)
            .locale('pt-br')
            .format('ddd, D [de] MMMM [de] YYYY');

        if (Platform.OS === 'android') {
            datePicker = (
                <View>
                    <TouchableOpacity
                        onPress={() => dispatch({ showDatePicker: true })}
                    >
                        <Text style={styles.date}>{dateString}</Text>
                    </TouchableOpacity>
                    {state.showDatePicker && datePicker}
                </View>
            );
        }

        return datePicker;
    }

    return (
        <Modal
            transparent={true}
            visible={props.isVisible}
            onRequestClose={props.onCancel}
            animationType="fade"
        >
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.background} />
            </TouchableWithoutFeedback>
            <View style={styles.container}>
                <Text style={styles.header}>Nova Tarefa</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Informe a Descrição"
                    value={state.desc}
                    onChangeText={(text) => dispatch({ desc: text })}
                />
                {getDatePicker()}
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={props.onCancel}>
                        <Text style={styles.button}>Cancelar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={save}>
                        <Text style={styles.button}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableWithoutFeedback onPress={props.onCancel}>
                <View style={styles.background} />
            </TouchableWithoutFeedback>
        </Modal>
    );
};

const styles = StyleSheet.create({
    background: {
        flexGrow: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
    container: {
        backgroundColor: 'white',
    },
    header: {
        fontFamily: commonStyles.fontFamily,
        backgroundColor: commonStyles.colors.today,
        color: commonStyles.colors.secondary,
        textAlign: 'center',
        padding: 20,
        fontSize: 18,
    },
    input: {
        fontFamily: commonStyles.fontFamily,
        height: 40,
        margin: 15,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6,
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    button: {
        margin: 20,
        marginRight: 30,
        color: commonStyles.colors.today,
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        fontSize: 20,
        marginLeft: 15,
    },
});
