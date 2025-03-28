import useCellData from '@/hooks/useCellData';
import { useRouter } from 'expo-router';
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
	const router = useRouter();

	const { data, loading, error } = useCellData(
		'http://192.168.1.101:3000/tester/experience?project_id=669bfe6c85ca32ecd8cecf43&cell_id=669bff2585ca32ecd8cecf45',
	);

	if (loading) {
		return <ActivityIndicator size='large' color='#0000ff' />;
	}

	if (error) {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: '#030014' }}>
				<Text className='text-3xl font-bold text-center text-light'>
					Error: {error.message}
				</Text>
			</SafeAreaView>
		);
	}

	if (!data) {
		return (
			<SafeAreaView style={{ flex: 1, backgroundColor: '#030014' }}>
				<Text className='text-3xl font-bold text-center text-light'>No data found.</Text>
			</SafeAreaView>
		);
	}

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#030014' }}>
			<ScrollView className='flex-1 bg-background'>
				<View className='flex-1 px-6 '>
					<View className='mb-8 mt-8'>
						<Text className='text-3xl font-bold text-center text-light'>
							Welcome to Eyesee Market Research
						</Text>
					</View>

					<View className='mb-6'>
						<Text className='text-xl font-semibold text-light'>Hello and Welcome!</Text>
						<Text className='text-base text-light mt-2'>
							Thank you for exploring Eyesee's interactive browsing experience. We're
							thrilled to have you here! Through this experience, we’ll guide you in
							discovering key insights, where you’ll interact with dynamic content and
							make choices that will help us improve our understanding of user needs.
						</Text>

						<Text className='text-base text-light mt-4'>
							Instead of traditional questions, you’ll browse through different
							scenarios and make selections. Your input will provide invaluable
							insights as we gather Key Performance Indicators (KPIs) to better
							understand user preferences.
						</Text>
					</View>

					<View className='mb-6'>
						<Text className='text-xl font-semibold text-light'>What to Expect</Text>
						<Text className='text-base text-light mt-2'>
							• Interactive Content: You’ll explore different scenarios and make
							decisions that reflect your preferences.
						</Text>
						<Text className='text-base text-light mt-1'>
							• No Right or Wrong Answers: Your feedback, based on your interactions,
							is all we need!
						</Text>
						<Text className='text-base text-light mt-1'>
							• Simple Navigation: Enjoy browsing through our content and feel free to
							interact with what interests you.
						</Text>
					</View>

					<View className='mb-6'>
						<Text className='text-xl font-semibold text-light'>
							Ready to Get Started?
						</Text>
						<Text className='text-base text-light mt-2'>
							To help you get the most out of this experience, we recommend you first
							review the instructions page. This will guide you through the
							interactive steps and explain how you can contribute effectively.
						</Text>
					</View>
					<View className='mt-8 mb-10 items-center'>
						<TouchableOpacity
							className='bg-accent py-5 px-10 rounded-full'
							onPress={() => router.push('/steps')}>
							<Text className='text-center text-light font-bold'>next</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
