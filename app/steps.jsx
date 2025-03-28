import React from "react";
import { View, Text, ScrollView, Button, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const StepsScreen = () => {
  const router = useRouter();
  const instruction = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
  Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh 
  elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed 
  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
  himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
  Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
  Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas 
  porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. 
  Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, 
  ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. 
  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
  himenaeos. Nam nec ante.
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. 
  Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh 
  elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed 
  augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. 
  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
  himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
  Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
  Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas 
  porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. 
  Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, 
  ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. 
  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos 
  himenaeos. Nam nec ante.
`;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#030014" }}>
      <ScrollView className="flex-1">
        <View className="flex-1 px-6  bg-background">
          <View className="mb-8 mt-8">
            <Text className="text-3xl font-semibold text-light">
              How It Works
            </Text>
            <Text className="text-lg text-light mt-4">
              In the next step, you will be given one or more websites to browse. Your task will be to find {'taskText'}.
            </Text>

            <Text className="text-lg text-light mt-6">
              You will explore the provided websites, looking for the specific information we’ve assigned. You can take your time to carefully search and navigate through the content on the site.
            </Text>

            <Text className="text-lg text-light mt-6">
              Once you find the information, we’ll ask you to confirm or describe what you’ve found. Your input will be crucial for our market research and help us understand user interaction with websites.
            </Text>
          </View>

          <View className="mb-8">
            <Text className="text-3xl font-semibold text-light">
              What You Need to Do:
            </Text>
            <Text className="text-lg text-light mt-4">
              • Browse the websites provided to you on the next screen.
            </Text>
            <Text className="text-lg text-light mt-4">
              • Search for {'taskText'} using the available content on the site.
            </Text>
            <Text className="text-lg text-light mt-4">
              • Once you find it, make a note of where you found it, and how easily you could locate it.
            </Text>
            <Text className="text-lg text-light mt-4">
              • You may revisit the site as many times as needed.
            </Text>
          </View>

          <View className="mb-8">
            <Text className="text-3xl font-semibold text-light">
              Additional Tips:
            </Text>
            <Text className="text-lg text-light mt-4">
              • Focus on what you see and how the information is presented.
            </Text>
            <Text className="text-lg text-light mt-4">
              • Don’t worry if you can’t find the information immediately, just continue exploring.
            </Text>
            <Text className="text-lg text-light mt-4">
              • If you have any issues, you can always contact support for help.
            </Text>
          </View>
          <View className="flex-row justify-center mt-8 mb-10 items-center">
            {/* <TouchableOpacity
              className="bg-accent py-5 px-10 rounded-full"
              onPress={() => router.push("/")}
            >
              <Text className="text-center text-light font-bold">
                {`\u25C0`} back
              </Text>
            </TouchableOpacity> */}
            <TouchableOpacity
              className="bg-accent py-5 px-10 rounded-full"
              onPress={() => router.push("/webview")}
            >
              <Text className="text-center text-light font-bold">
                begin {`\u25B6`}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default StepsScreen;
