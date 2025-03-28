import React, { useEffect, useRef, useState } from 'react';
import { WebView, Alert } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import Header from './webview-header';
import { webViewScript, defaultData } from './constants';
import { captureRef } from 'react-native-view-shot';
import * as MediaLibrary from 'expo-media-library';
import { useRouter } from 'expo-router';
import { useDispatch, useSelector } from 'react-redux';

const WebViewScreen = () => {
	const [webViewSource, setWebViewSource] = useState({ uri: 'https://www.amazon.com' });

	const [currentUrl, setCurrentUrl] = useState('');
	const [status, requestPermission] = MediaLibrary.usePermissions();
	const [canGoBack, setCanGoBack] = useState(false);
	const [canGoForward, setCanGoForward] = useState(false);
	const router = useRouter();
	const webViewContainerRef = useRef(null);
	const webViewRef = useRef(null);

	const data = useSelector((state) => state.global.dto);
	const userClicks = useSelector((state) => state.global.userClicks);
	const dispatch = useDispatch();

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
		setWebViewSource({ uri: 'https://www.google.com' });
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

	// useEffect(() => {
	//   console.log("user clikcs", userClicks);
	// }, [userClicks]);

	const handleWebViewNavigationStateChange = (navState) => {
		setCanGoBack(navState.canGoBack);
		setCanGoForward(navState.canGoForward);
		setCurrentUrl(navState.url);
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#030014' }} ref={webViewContainerRef}>
			<Header
				canGoBack={canGoBack}
				canGoForward={canGoForward}
				onGoBack={handleGoBack}
				onGoForward={handleGoForward}
				onFinishTask={handleFinishTask}
				onHelp={handleHelp}
			/>
			<WebView
				ref={webViewRef}
				source={webViewSource}
				style={{ flex: 1 }}
				onMessage={handleWebViewMessage}
				injectedJavaScript={webViewScript}
				onNavigationStateChange={handleWebViewNavigationStateChange}
				setSupportMul
				tipleWindows={false}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default WebViewScreen;
