import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity,
    Alert,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Icon from 'react-native-vector-icons/FontAwesome';

import commonStyles from '../commonStyles';

import moment from 'moment';
import 'moment/locale/pt-br';

export default (props) => {
    const doneOrNotStyle = props.doneAt
        ? { textDecorationLine: 'line-through' }
        : {};

    const dateText = `${props.doneAt ? 'Feita em:' : 'Prevista para:'} ${moment(
        props.doneAt || props.estimateAt
    )
        .locale('pt-br')
        .format('dddd, D [de] MMMM')}`;

    function getRightContent() {
        return (
            <TouchableOpacity
                style={styles.right}
                onPress={() =>
                    Alert.alert(
                        'Excluir Tarefa',
                        `Deseja realmente excluir a tarefa ${props.desc}?`,
                        [
                            {
                                text: 'Sim',
                                onPress() {
                                    props.onDelete?.(props.id);
                                },
                            },
                            {
                                text: 'Não',
                            },
                        ]
                    )
                }
            >
                <Icon name="trash" size={30} color="#FFF" />
            </TouchableOpacity>
        );
    }

    function getLeftContent() {
        return (
            <View style={styles.left}>
                <Icon
                    name="trash"
                    size={20}
                    color="#FFF"
                    style={styles.excludeIcon}
                />
                <Text style={styles.excludeText}>Excluir</Text>
            </View>
        );
    }

    return (
        <Swipeable
            renderRightActions={getRightContent}
            renderLeftActions={getLeftContent}
            onSwipeableLeftOpen={() => props.onDelete?.(props.id)}
        >
            <View style={styles.container}>
                <TouchableWithoutFeedback
                    onPress={() => props.toggleTask(props.id)}
                >
                    <View style={styles.checkContainer}>
                        {getCheckView(props.doneAt)}
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={[styles.desc, doneOrNotStyle]}>
                        {props.desc}
                    </Text>
                    <Text style={styles.date}>{dateText + ''}</Text>
                </View>
            </View>
        </Swipeable>
    );
};

function getCheckView(doneAt) {
    if (doneAt != null) {
        return (
            <View style={styles.done}>
                <Icon name="check" size={20} color="white" />
            </View>
        );
    } else {
        return <View style={styles.pending} />;
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#AAA',
        borderBottomWidth: 1,
        paddingVertical: 10,
        backgroundColor: 'white',
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pending: {
        width: 25,
        height: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555',
    },
    done: {
        width: 25,
        height: 25,
        borderRadius: 13,
        backgroundColor: '#4D7031',
        justifyContent: 'center',
        alignItems: 'center',
    },
    desc: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.mainText,
        fontWeight: 'bold',
    },
    date: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.subText,
        fontSize: 12,
        fontWeight: 'bold',
    },
    right: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    left: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        flexGrow: 1,
    },
    excludeIcon: {
        marginLeft: 10,
    },
    excludeText: {
        fontFamily: commonStyles.fontFamily,
        color: 'white',
        fontSize: 20,
        margin: 10,
    },
});
