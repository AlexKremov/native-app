import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";

export const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState("")
    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue("")
        } else {
            Alert.alert('Название дела не может быть пустым')
        }

    }
    return (
        <View style={style.block}>
            <TextInput
                style={style.input}
                onChangeText={text => setValue(text)}
                value={value}
                placeholder="Введите название дела..."
                autoCorrect={false}
                autoCapitalize="none" />
                <Button onPress={pressHandler} name="pluscircleo">
                    Добавить
                </Button>
            {/* <Button title="Добавить" onPress={pressHandler} /> */}
        </View>
    )
}

const style = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    input: {
        width: "60%",
        borderStyle: "solid",
        borderColor: "#3949ab",
        borderBottomWidth: 2,
        padding: 10
    }
})