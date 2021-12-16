import React, { useState } from 'react';
import {
    FlatList,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

import * as CourseActions from '../store/actions/course';

/* REDUX */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
/* * */

const Sidebar = ({ modules, toggleLesson }) => {
    const renderModule = ({ item: module }) => (
        <View>
            <Text style={styles.moduleTitle}>{module.title}</Text>
            {module.lessons.map(lesson => (
                <View style={styles.lessonContainer} key={lesson.id}>
                    <Text style={styles.lessonText}>- {lesson.title}</Text>
                    <TouchableOpacity
                        style={styles.toggleLessonButton}
                        onPress={() => toggleLesson(module, lesson)}
                    >
                        <Text style={{ fontSize: 20 }}>Selecionar</Text>
                    </TouchableOpacity>
                </View>
            ))}
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={modules}
                keyExtractor={module => module.id}
                renderItem={renderModule}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    moduleTitle: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    lessonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 18,
    },
    lessonText: {
        alignSelf: 'center',
        fontSize: 20,
    },
    toggleLessonButton: {
        borderColor: '#e0e0e0',
        borderWidth: 1,
        padding: 5,
        fontSize: 20,
        marginBottom: 10,
    },
});

const mapStateToProps = state => ({
    modules: state.course.modules,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
