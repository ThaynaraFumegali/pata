/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useEffect} from 'react';
// import type {Node} from 'react';
import {StyleSheet, Text, View} from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import RegistrationService from './backend/domain/service/registrationService';
// import UserService from './backend/domain/service/userService';
// import UserRepository from './backend/infrastructure/repository/userRepository';
// import SqliteContext from './backend/infrastructure/database/relational/sqlite/sqliteContext';
// import EncryptionService from './backend/domain/service/encryptionService';
// import UserRegistrationInput from './backend/domain/dto/input/userRegistrationInput';
// import SetupDatabase from './backend/infrastructure/database/relational/sqlite/setupDatabase';
// import AdoptionRegistrationService from './backend/domain/service/adoptionRegistrationService';
// import ImageService from './backend/domain/service/imageService';
// import AdoptionRegistrationRepository from './backend/infrastructure/repository/adoptionRegistrationRepository';
// import AdoptionRegistrationInput from './backend/domain/dto/input/adoptionRegistrationInput';
// import {EAnimalType} from './backend/domain/enums/animalType';
// import {ESizeType} from './backend/domain/enums/sizeType';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeComponent from './components/Home';
import RegisterUserComponent from './components/RegisterUser';
import SqliteContext from './backend/infrastructure/database/relational/sqlite/sqliteContext';
import SetupDatabase from './backend/infrastructure/database/relational/sqlite/setupDatabase';
import UserRepository from './backend/infrastructure/repository/userRepository';
import UserService from './backend/domain/service/userService';
import RegistrationService from './backend/domain/service/registrationService';
import EncryptionService from './backend/domain/service/encryptionService';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeComponent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterUser"
          component={RegisterUserComponent}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   // const context = new SqliteContext();
//   // const setupDatabase = new SetupDatabase(context);
//   // const load = useCallback(async () => {
//   //   try {
//   //     await setupDatabase.createUserTable();
//   //     await setupDatabase.createAdoptionRegistrationTable();
//   //   } catch (error) {
//   //     console.error(error);
//   //   }
//   // }, []);

//   // useEffect(() => {
//   //   load();
//   // }, [load]);

//   // const userRepository = new UserRepository(context);
//   // const userService = new UserService(userRepository);
//   // const encryptionService = new EncryptionService();
//   // const registrationService = new RegistrationService(
//   //   userService,
//   //   encryptionService,
//   // );

//   // const imageService = new ImageService();
//   // const adoptionRegistrationRepositoy = new AdoptionRegistrationRepository(
//   //   context,
//   // );
//   // const adoptionRegistrationService = new AdoptionRegistrationService(
//   //   imageService,
//   //   adoptionRegistrationRepositoy,
//   // );

//   // const userRegistrationInput = new UserRegistrationInput(
//   //   'mauricioandrad@gmail.com',
//   //   '123456',
//   //   'Maurício',
//   //   'Andrade Gomes',
//   //   '51',
//   //   '991503883',
//   // );

//   // const adoptionRegistrationInput = new AdoptionRegistrationInput(
//   //   1,
//   //   null,
//   //   EAnimalType.dog,
//   //   ESizeType.midsize,
//   //   'CANOAS',
//   //   'RIO GRANDE DO SUL',
//   // );

//   const [value, setValue] = useState('');

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <View style={styles.container}>
//         <Text style={styles.text}>ARROZ</Text>
//       </View>
//       {/* <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <TouchableOpacity
//             onPress={async () => {
//               await registrationService.register(userRegistrationInput);
//               console.log('Criou usuário');
//               await adoptionRegistrationService.add(adoptionRegistrationInput);
//             }}>
//             <Text>Adicionar Usuário</Text>
//           </TouchableOpacity>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView> */}
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     backgroundColor: 'white',
//   },
//   text: {
//     height: 20,
//     backgroundColor: 'pink',
//     fontSize: 25,
//   },
//   // value: {
//   //   flex: 1,
//   //   paddingHorizontal: 7,
//   //   fontSize: 12,
//   // },
// });

// // const styles = StyleSheet.create({
// //   sectionContainer: {
// //     marginTop: 32,
// //     paddingHorizontal: 24,
// //   },
// //   sectionTitle: {
// //     fontSize: 24,
// //     fontWeight: '600',
// //   },
// //   sectionDescription: {
// //     marginTop: 8,
// //     fontSize: 18,
// //     fontWeight: '400',
// //   },
// //   highlight: {
// //     fontWeight: '700',
// //   },
// // });

export default App;
