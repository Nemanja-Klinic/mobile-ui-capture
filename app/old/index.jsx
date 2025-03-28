import { Text, Button, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import React from "react";

export default function AppRouter() {
  const { data, loading, error } = useCellData(
    "https://localhost:3000/endpoint"
  );

  const router = useRouter();
  const description = `
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

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  if (!data) {
    return (
      <View style={styles.container}>
        <Text>No data found.</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 px-6 pt-10">
      <Text className="text-2xl font-psemibold mt-6 mb-4 text-center">
        Welcome to the instruction screen
      </Text>
      <View className="border-b border-gray-300" />
      <ScrollView className="flex-1">
        <Text className="text-base font-pregular text-left">{description}</Text>
      </ScrollView>
      <View className="mt-8 mb-10 items-center">
        <TouchableOpacity
          className="bg-secondary py-3 px-6 rounded-full"
          onPress={() => router.push("/steps")}
        >
          <Text className="text-white text-center text-base">next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
