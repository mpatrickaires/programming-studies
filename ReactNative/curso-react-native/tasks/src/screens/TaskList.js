import React, { useState, useReducer, useEffect } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    ImageBackground,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
} from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';

import todayImage from '../../assets/imgs/today.jpg';
import commonStyles from '../commonStyles';
import Task from '../components/Task';
import AddTask from './AddTask';

export default (props) => {
    let initialState = {
        tasks: [],
        showDoneTasks: true,
        showAddTask: false,
    };

    const [state, dispatch] = useReducer(
        (state, action) => ({ ...state, ...action }),
        initialState
    );

    useEffect(() => {
        async function fetchData() {
            const stateString = await AsyncStorage.getItem('tasksState');
            dispatch(JSON.parse(stateString) || state);
        }
        fetchData();
    }, []);

    useEffect(() => {
        AsyncStorage.setItem('tasksState', JSON.stringify(state));
    });

    const today = moment()
        .locale('pt-br')
        .format('dddd, D [de] MMMM');

    // const [tasks, setTasks] = useState(state.tasks);
    // const [showDoneTasks, setShowDoneTasks] = useState(state.showDoneTasks);
    // const [showAddTask, setShowAddTask] = useState(false);

    function toggleTask(taskId) {
        const tasks = state.tasks.map((task) => {
            if (task.id === taskId) {
                task.doneAt = task.doneAt ? null : new Date();
            }
            return task;
        });
        dispatch({ tasks });
    }

    function showNoTasksMessage() {
        let doneTasksCounter = 0;
        if (!state.showDoneTasks) {
            doneTasksCounter = state.tasks.reduce((counter, task) => {
                if (task.doneAt) {
                    ++counter;
                }
                return counter;
            }, 0);
        }

        return (
            state.tasks.length === 0 ||
            (!state.showDoneTasks && state.tasks.length === doneTasksCounter)
        );
    }

    function addTask(newTask) {
        if (!newTask.desc.trim()) {
            return Alert.alert('Dados inválidos', 'Descrição não informada!');
        }
        dispatch({
            tasks: [
                ...state.tasks,
                {
                    id: newTask.id,
                    desc: newTask.desc,
                    estimateAt: newTask.date,
                    doneAt: null,
                },
            ],
            showAddTask: false,
        });
    }

    function deleteTask(taskId) {
        dispatch({ tasks: state.tasks.filter((task) => task.id !== taskId) });
    }

    return (
        <SafeAreaView style={styles.container}>
            {showNoTasksMessage()}
            <AddTask
                isVisible={state.showAddTask}
                onCancel={() => dispatch({ showAddTask: false })}
                onSave={addTask}
            />

            <ImageBackground style={styles.background} source={todayImage}>
                <View style={styles.iconBar}>
                    <TouchableOpacity
                        onPress={() =>
                            dispatch({ showDoneTasks: !state.showDoneTasks })
                        }
                    >
                        <Icon
                            name={state.showDoneTasks ? 'eye' : 'eye-slash'}
                            size={20}
                            color={commonStyles.colors.secondary}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.titleBar}>
                    <Text style={styles.title}>Hoje</Text>
                    <Text style={styles.subtitle}>{today}</Text>
                </View>
            </ImageBackground>

            <View style={styles.taskList}>
                <FlatList
                    data={state.tasks}
                    keyExtractor={(task) => `${task.id}`}
                    renderItem={({ item }) => {
                        if (state.showDoneTasks || !item.doneAt) {
                            return (
                                <Task
                                    {...item}
                                    toggleTask={toggleTask}
                                    onDelete={deleteTask}
                                />
                            );
                        }
                    }}
                />
                {showNoTasksMessage() && (
                    <View style={styles.noTasksMessageContainer}>
                        <Text style={styles.noTaskMessage}>
                            Crie uma nova tarefa!
                        </Text>
                        <View style={styles.addButtonContainer}>
                            <TouchableOpacity
                                style={styles.addButton}
                                activeOpacity={0.7}
                                onPress={() => dispatch({ showAddTask: true })}
                            >
                                <Icon
                                    name="plus"
                                    size={20}
                                    color={commonStyles.colors.secondary}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            </View>

            {!showNoTasksMessage() && (
                <TouchableOpacity
                    style={[styles.addButton, styles.addButtonAbsolute]}
                    activeOpacity={0.7}
                    onPress={() => dispatch({ showAddTask: true })}
                >
                    <Icon
                        name="plus"
                        size={20}
                        color={commonStyles.colors.secondary}
                    />
                </TouchableOpacity>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3,
    },
    taskList: {
        flex: 7,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20,
        letterSpacing: 3,
    },
    subtitle: {
        fontFamily: commonStyles.fontFamily,
        color: commonStyles.colors.secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30,
    },
    iconBar: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 20,
        marginTop: 10,
    },
    addButtonContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: commonStyles.colors.today,
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    addButtonAbsolute: {
        position: 'absolute',
        right: 30,
        bottom: 30,
    },
    noTasksMessageContainer: {
        flex: 5,
    },
    noTaskMessage: {
        fontFamily: commonStyles.fontFamily,
        textAlign: 'center',
        fontSize: 26,
    },
});
