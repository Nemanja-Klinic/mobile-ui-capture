import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";

const Header = ({
    canGoBack,
    canGoForward,
    onGoBack,
    onGoForward,
    onFinishTask,
    onHelp,
}) => {
    return (
        <View className="flex-row justify-between items-center px-2 pb-1">
            <View className="flex-row gap-2 items-center">
                <TouchableOpacity
                    onPress={onGoBack}
                    className="p-2"
                    disabled={!canGoBack}
                >
                    <Image
                        source={require("../assets/icons/back-icon.png")}
                        className={`w-5 h-5 ${canGoBack ? "opacity-100" : "opacity-50"}`}
                        style={{
                            tintColor: '#ffffff',
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={onGoForward}
                    className="p-2"
                    disabled={!canGoForward}
                >
                    <Image
                        source={require("../assets/icons/forward-icon.png")}
                        className={`w-5 h-5 ${canGoForward ? "opacity-100" : "opacity-50"}`}
                        style={{
                            tintColor: '#ffffff',
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={onHelp} className="p-2">
                    <Text className={`text-2xl`}>?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={onFinishTask}
                className="bg-accent py-2 px-5 rounded-full"
            >
                <Text className="text-white">finish {"\u25B6"}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Header;
