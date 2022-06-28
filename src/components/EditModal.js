import React, { useState } from "react";

import { View, StyleSheet, TextInput, Button, Modal, Alert } from "react-native";
import { THEME } from "../theme";
import { AppButton } from "./ui/AppButton";


export const EditModal = ({ visible, onCancel, value, onSave }) => {
    const [title, setTitle] = useState(value)

    const saveHandler = () => {
        if (title.trim().length < 3) {
            Alert.alert('Ошибка', `Минимальная длина названия 3 символов. Сейчас 
            ${title.trim().length + 1}  символов`)
        } else {
            onSave(title)
        }
    }

    return (
        <Modal visible={visible} animationType="fade" transparent={false}>
            <View style={styles.wrap}>
                <TextInput
                    value={title}
                    onChangeText={setTitle}
                    style={styles.input}
                    placeholder="ВВедите название"
                    autoCapitalize="none"
                    autoCorrect={false}
                    maxLength={64}
                />
                <View style={styles.buttons}>
                    <AppButton title="Отменить" onPress={onCancel} color={THEME.DANGER_COLOR} >Отменить</AppButton>
                <AppButton title="Сохранить" onPress={saveHandler}>Сохранить</AppButton>
            </View>
        </View>
        </Modal >
    )
}

const styles = StyleSheet.create({
    wrap: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    input: {
        padding: 10,
        borderBottomColor: THEME.MAIN_COLOR,
        borderBottomWidth: 2,
        width: "80%"
    },
    buttons: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-around"
    }
})