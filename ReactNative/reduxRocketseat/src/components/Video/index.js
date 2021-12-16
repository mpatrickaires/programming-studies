import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* REDUX */
import { connect } from 'react-redux';
/* * */

const Video = ({ activeLesson, activeModule }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.moduleText}>
                {activeModule?.title || 'Selecione uma Aula!'}
            </Text>
            <Text style={styles.lessonText}>
                {activeLesson?.title || false}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 50,
    },
    moduleText: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    lessonText: {
        fontSize: 20,
    },
});

const mapStateToProps = state => ({
    activeLesson: state.course?.activeLesson,
    activeModule: state.course?.activeModule,
});

export default connect(mapStateToProps)(Video);
