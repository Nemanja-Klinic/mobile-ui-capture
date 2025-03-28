import React, { useEffect, useRef, useState } from 'react';
import { WebView, Alert } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import Header from './webview-header';
import { webViewScript, defaultData } from './constants';
import { captureRef } from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';
import { addUserClick, setActiveTaskIndex } from '../store/globalSlice';

const WebViewScreen = () => {
	const [webViewSource, setWebViewSource] = useState(null);

	// react state variables
	const [currentUrl, setCurrentUrl] = useState('');
	const [status, requestPermission] = MediaLibrary.usePermissions();
	const [isLoading, setIsLoading] = useState(true);
	const [canGoBack, setCanGoBack] = useState(false);
	const [canGoForward, setCanGoForward] = useState(false);
	const [finishTask, setFinishTask] = useState(false);
	const router = useRouter();
	const webViewContainerRef = useRef(null);
	const webViewRef = useRef(null);

	// redux state variables and dispatch
	const data = useSelector((state) => state.global.dto);
	const activeTaskIndex = useSelector((state) => state.global.activeTaskIndex);
	const userClicks = useSelector((state) => state.global.userClicks);

	const dispatch = useDispatch();

	useEffect(() => {
		if (data && data.cell && Array.isArray(data.cell.tasks) && data.cell.tasks.length > 0) {
			setWebViewSource({ uri: data.cell.tasks[activeTaskIndex]?.url });
		}
	}, [data, activeTaskIndex]);

	const handleGoBack = () => {
		if (webViewRef.current && canGoBack) {
			webViewRef.current.goBack();
		}
	};

	const handleHelp = () => {
		router.push('/steps');
	};

	const handleGoForward = () => {
		if (webViewRef.current && canGoForward) {
			webViewRef.current.goForward();
		}
	};

	const handleFinishTask = () => {
		if (data && data.cell && Array.isArray(data.cell.tasks)) {
			const nextTaskIndex = activeTaskIndex + 1;

			if (nextTaskIndex < data.cell.tasks.length) {
				router.push('/steps');
				dispatch(setActiveTaskIndex(nextTaskIndex));
			} else {
				setWebViewSource({ uri: 'https://www.google.com' });
				setFinishTask(true);
			}
		} else {
			console.error('No tasks available in data.cell.tasks');
		}
	};

	if (status === null) {
		requestPermission();
	}
	const handleWebViewMessage = async (event) => {
		event.persist(); // Persist the event to avoid it being nullified

		try {
			const ss = await onSaveImageAsync();
			const data = JSON.parse(event.nativeEvent.data);
			const { x, y, tagName, id, className, innerHTML, outerHTML } = data;
			const clickInfo = {
				tagName,
				id,
				className,
				x,
				y,
				url: currentUrl,
				innerHTML,
				outerHTML,
				screenshot: ss,
				activeTaskIndex,
			};

			dispatch(addUserClick(clickInfo));
		} catch (error) {
			console.error('Error parsing document object:', error);
		}
	};

	const onSaveImageAsync = async () => {
		try {
			const localUri = await captureRef(webViewContainerRef, {
				format: 'png',
				quality: 1,
			});

			// const base64Screenshot = await captureRef( webViewContainerRef, {
			//   format: 'png',
			//   quality: 1,
			//   result: 'base64',
			// });

			await MediaLibrary.saveToLibraryAsync(localUri);

			return localUri;
		} catch (e) {
			console.log(e);
		}
	};

	useEffect(() => {
		console.log('user clikcs', userClicks);
	}, [userClicks]);

	const handleWebViewNavigationStateChange = (navState) => {
		setCanGoBack(navState.canGoBack);
		setCanGoForward(navState.canGoForward);
		setCurrentUrl(navState.url);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#030014' }} ref={webViewContainerRef}>
			{!finishTask && (
				<Header
					canGoBack={canGoBack}
					canGoForward={canGoForward}
					onGoBack={handleGoBack}
					onGoForward={handleGoForward}
					onFinishTask={handleFinishTask}
					onHelp={handleHelp}
				/>
			)}
			<View className='flex-1'>
				{isLoading && (
					<View className='absolute inset-0 flex items-center justify-center z-10'>
						<ActivityIndicator size='large' color='#fb144a' className='scale-150' />
					</View>
				)}
				{webViewSource && (
					<WebView
						ref={webViewRef}
						source={webViewSource}
						style={{ flex: 1 }}
						onMessage={handleWebViewMessage}
						injectedJavaScript={webViewScript}
						onNavigationStateChange={handleWebViewNavigationStateChange}
						setSupportMultipleWindows={false}
						onLoadStart={() => setIsLoading(true)}
						onLoadEnd={() => setIsLoading(false)}
						allowsInlineMediaPlayback={true}
						onShouldStartLoadWithRequest={(request) => {
							// Only allow navigation to the task URL
							const taskUrl = data.cell.tasks[activeTaskIndex]?.url;
							if (
								!request.url.includes(taskUrl) &&
								activeTaskIndex + 1 < data.cell.tasks.length
							) {
								console.log('Blocked navigation to:', request.url);
								return false;
							}
							return true; // Allow the navigation
						}}
					/>
				)}
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default WebViewScreen;
