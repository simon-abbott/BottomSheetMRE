import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors, Header} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {color: isDarkMode ? Colors.white : Colors.black},
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {color: isDarkMode ? Colors.light : Colors.dark},
        ]}>
        {children}
      </Text>
    </View>
  );
};

const MainScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  console.log(Object.keys(Colors));

  const navigation = useNavigation();
  const goToInner = useCallback(() => {
    // @ts-ignore
    navigation.navigate('Secondary');
  }, [navigation]);

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{backgroundColor: isDarkMode ? Colors.black : Colors.white}}>
          <Section title="Hello!">This is the primary screen.</Section>
          <Section title="Navigation">
            <Button title="Go to inner" onPress={goToInner} />
          </Section>
          <View style={{height: 10}} />
        </View>
      </ScrollView>

      <BottomSheet
        snapPoints={['15%', '50%', '90%']}
        backgroundStyle={{
          backgroundColor: isDarkMode ? Colors.dark : Colors.light,
        }}>
        <BottomSheetScrollView>
          <Section title="In the sheet">This is the primary screen.</Section>
          <Section title="Navigation">Tap me!</Section>
        </BottomSheetScrollView>
      </BottomSheet>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export {MainScreen};
