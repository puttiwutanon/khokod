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
    width: 'auto',
    fontSize: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#E0E0E0',
    borderRadius: 100,
    margin: '10%',
    marginTop: '0%',
    height: 'auto',
    backgroundColor: '#fff',
    fontFamily: 'Kanit',
    padding: 10,
    width: '90%'    
  },
  navButtons:{
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: '5%',
  }

});

/*

*/ 