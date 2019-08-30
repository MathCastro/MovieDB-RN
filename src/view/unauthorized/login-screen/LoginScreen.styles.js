import {StyleSheet} from 'react-native';
import Colors from '../../../util/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.secondaryColor,
    padding: 20,
  },
  card: {
    marginTop: 70,
    borderRadius: 8,
    backgroundColor: Colors.primaryWhite,
  },
  input: {
    padding: 10,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: Colors.secondatyWhite,
  },
  cardHeader: {
    fontSize: 24,
    marginLeft: 20,
    marginTop: 20,
  },
  button: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    backgroundColor: Colors.secondaryColor,
    borderRadius: 8,
    justifyContent: 'center',
  },
  registerButton: {
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
  },
  textButton: {
    textAlign: 'center',
    color: Colors.primaryWhite,
  },
  registerTextButton: {
    textAlign: 'center',
    color: Colors.secondaryColor,
  },
});

export default styles;
