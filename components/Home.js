import React, {useCallback, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import EncryptionService from '../backend/domain/service/encryptionService';
import RegistrationService from '../backend/domain/service/registrationService';
import UserService from '../backend/domain/service/userService';
import SetupDatabase from '../backend/infrastructure/database/relational/sqlite/setupDatabase';
import SqliteContext from '../backend/infrastructure/database/relational/sqlite/sqliteContext';
import UserRepository from '../backend/infrastructure/repository/userRepository';
import YellowButtonComponent from './YellowButton';

const HomeComponent = ({navigation}) => {
  const context = new SqliteContext();
  const setupDatabase = new SetupDatabase(context);
  const userRepository = new UserRepository(context);
  const userService = new UserService(userRepository);
  const encryptionService = new EncryptionService();
  const registrationService = new RegistrationService(
    userService,
    encryptionService,
  );

  const setupDatabaseCallback = useCallback(async () => {
    await setupDatabase.createUserTable();
  }, []);

  useEffect(() => {
    setupDatabaseCallback();
  }, [setupDatabaseCallback]);

  const onPressRegisterButton = () => {
    navigation.navigate('RegisterUser', {
      userRegistrationService: registrationService,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Text>ALGUMA IMAGEM</Text>
      </View>
      <View style={styles.containerButtons}>
        <View style={styles.containerLoginButton}>
          <YellowButtonComponent label={'Login'} />
        </View>
        <View style={styles.containerRegisterButton}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={onPressRegisterButton}>
            <Text style={styles.textRegister}>Ou cadastre-se</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77477e',
  },
  containerImage: {
    flex: 3,
  },
  containerButtons: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  containerLoginButton: {
    height: 50,
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    height: '70%',
    width: '80%',
    backgroundColor: '#ffee4a',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogin: {
    fontSize: 20,
    color: '#77477e',
  },
  containerRegisterButton: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButton: {
    height: '70%',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRegister: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffee4a',
  },
});

export default HomeComponent;
