import { StyleSheet } from 'react-native';
import { useFonts } from "expo-font";



export const styles = StyleSheet.create({
  navbar:{
    height: '8%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D4B5E8',
    position: 'absolute',
    alignSelf: 'center'
  },
  tabBarItemStyle: {
    borderRadius: 40,
    overflow: 'hidden',
    marginVertical: 30, 
    height: 60,
  },
  chatHeader: {
    marginTop: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  chatLog: {
    marginLeft: '5%'
  },
  newchat: {
    marginRight: '5%'
  },
  chatlogBar:{
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '70%',
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    zIndex: 1000,
  },
  searchChat:{
    display: 'flex',
    flexDirection: 'row',
    width: 'auto',
    fontSize: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '15%',
    borderStyle: 'solid',
    borderColor: '#E0E0E0',
    borderRadius: 100,
    margin: '10%',
    height: 'auto',
    backgroundColor: '#fff',
    fontFamily: 'Kanit',
  },
  searchCharBar:{
    fontSize: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 3,
    marginLeft: 15,
    fontFamily: 'Kanit',
  },
  newChat:{
    display: 'flex',
    flexDirection: 'row',
    width: 'auto',
    fontSize: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: '0%',
    borderStyle: 'solid',
    borderColor: '#E0E0E0',
    borderRadius: 100,
    margin: '10%',
    height: 'auto',
    fontFamily: 'Kanit',
  },
  newChatBar:{
    fontSize: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 3,
    marginLeft: 15,
    fontFamily: 'Kanit',
  },
  mainChatInput:{
    display: 'flex',
    flexDirection: 'row',
    width: '95%',
    fontSize: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    borderStyle: 'solid',
    borderColor: '#E0E0E0',
    borderRadius: 100,
    margin: '8%',
    height: 'auto',
    backgroundColor: '#fff',
    fontFamily: 'Kanit',
    padding: 10,
    marginBottom: '10%'
  },
  mainChatInputItems:{
    fontFamily: 'Kanit',
    marginRight: 15,
  },
  mainChatArea:{
    height: '75%'
  },
  addAlertButton:{
    backgroundColor: '#A5C9E8',
    padding: 5,
    borderRadius: 100,
    width: 75,
    height: 75,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addAlert:{
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  medAlertList:{
    height: '90%',
    width: '100%'
  },
  chatLogsList:{
    height: '45%',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#575757'
  },
  threpistSearchbar:{
    display: 'flex',
    flexDirection: 'row',
    fontSize: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#E0E0E0',
    borderRadius: 100,
    height: 'auto',
    backgroundColor: '#fff',
    fontFamily: 'Kanit',
    padding: 10,
    width: '100%'    
  },
  navButtons:{
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '5%',
  },
  addTaskcontainer: {
  width: 300,
  height: 390,
  padding: 20,
  backgroundColor: '#fff',
  borderRadius: 16,
  elevation: 10,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 6,
},
centeredWrapper: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  alignSelf: 'center'
},
taskContainer01: {
  flexDirection: 'column',
  alignItems: 'flex-start', 
},
taskContainer02: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start', 
},
  inputContainer01:{
    fontFamily: 'Kanit',
    padding: 5,
    borderColor: '#808080',
    borderWidth: 2,
    width: 200,
    borderRadius: 8,
    margin: 8,
    height: 40
  },
  inputContainer02:{
    fontFamily: 'Kanit',
    padding: 5,
    borderColor: '#808080',
    borderWidth: 2,
    width: 60,
    borderRadius: 8,
    margin: 8,
    height: 40
  },
  buttonContainer:{
    margin: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  buttonItem:{
    margin: 5,
    borderRadius: 100,
    backgroundColor: '#A5C9E8'
  },
  AddCancelbutton:{
    borderRadius: 100,
    backgroundColor: '#A5C9E8',
    fontSize: 34,
    alignItems:'center',
    justifyContent: 'center',
    margin: 5,
    width: 120,
    height: 50
  },
  buttonText:{
    fontSize: 24,
    fontFamily: 'Kanit',
    color: '#fff',
    alignItems:'center',
    justifyContent: 'center'
  },
  testBox:{
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 20,
    height: 70,
    width: '90%',
    padding: 15,
    paddingBottom: 10,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  goToTest:{
    position: 'absolute',
    right: 25,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center'
  },

});

/*

*/ 