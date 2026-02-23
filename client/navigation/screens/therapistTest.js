import { View, Text, TextInput, TouchableOpacity, Animated, ScrollView } from 'react-native'
import {useEffect, useState} from 'react'
import { styles } from '../../styles'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Sidebar from '../sidebar';
import TherapistSearchbar from '../therapistSearchbar'
import { SafeAreaView } from 'react-native-safe-area-context';

const TherapistTest = ({ navigation, sidebarVisible, setSidebarVisible }) => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
          <View style={{ position: 'absolute',  left: 16, zIndex: 1001, marginTop: '15%' }}>
            <TouchableOpacity style={styles.chatLog} onPress={() => setSidebarVisible(true)}>
              <FontAwesome6 name="bars" size={30} color="#575757" />
            </TouchableOpacity>
          </View>

          <ScrollView style={{ flex: 1, marginTop: '10%' }}>
            <View style={styles.testBox}>
              <View>
                <Text style={{ fontFamily: 'Kanit', fontSize: 20 }}>แบบทดสอบเพื่อตั้งค่าAIแชท</Text>
              </View>
              <View style={styles.goToTest}>
                <TouchableOpacity>
                  <FontAwesome name="angle-right" size={24} color="black" />
                </TouchableOpacity>
              </View>              
            </View>      

            <View style={styles.testBox}>
              <View>
                <Text style={{ fontFamily: 'Kanit', fontSize: 20 }}>แบบประเมินโรคซึมเศร้า 9Q</Text>
              </View>
              <View style={styles.goToTest}>
                <TouchableOpacity>
                  <FontAwesome name="angle-right" size={24} color="black" />
                </TouchableOpacity>
              </View>              
            </View> 

            <View style={styles.testBox}>
              <View>
                <Text style={{ fontFamily: 'Kanit', fontSize: 20 }}>แบบประเมินการฆ่าตัวตาย 8Q</Text>
              </View>
              <View style={styles.goToTest}>
                <TouchableOpacity>
                  <FontAwesome name="angle-right" size={24} color="black" />
                </TouchableOpacity>
              </View>              
            </View> 

            <View style={styles.testBox}>
              <View>
                <Text style={{ fontFamily: 'Kanit', fontSize: 20 }}>แบบประเมินโรควิตกกังวล GAD-7</Text>
              </View>
              <View style={styles.goToTest}>
                <TouchableOpacity>
                  <FontAwesome name="angle-right" size={24} color="black" />
                </TouchableOpacity>
              </View>              
            </View> 

            <View style={styles.testBox}>
              <View>
                <Text style={{ fontFamily: 'Kanit', fontSize: 18 }}>แบบประเมินความรุนแรงโรคแพนิค PDSS</Text>
              </View>
              <View style={styles.goToTest}>
                <TouchableOpacity>
                  <FontAwesome name="angle-right" size={24} color="black" />
                </TouchableOpacity>
              </View>              
            </View> 

            <View style={styles.testBox}>
              <View>
                <Text style={{ fontFamily: 'Kanit', fontSize: 20 }}>แบบประเมินความเครียด</Text>
              </View>
              <View style={styles.goToTest}>
                <TouchableOpacity>
                  <FontAwesome name="angle-right" size={24} color="black" />
                </TouchableOpacity>
              </View>              
            </View> 

            <View style={styles.testBox}>
              <View>
                <Text style={{ fontFamily: 'Kanit', fontSize: 20 }}>แบบประเมินโรคย้ำคิดย้ำทำ (OCI)</Text>
              </View>
              <View style={styles.goToTest}>
                <TouchableOpacity>
                  <FontAwesome name="angle-right" size={24} color="black" />
                </TouchableOpacity>
              </View>              
            </View> 

            <View style={styles.testBox}>
              <View>
                <Text style={{ fontFamily: 'Kanit', fontSize: 15 }}>แบบประเมินโรคเครียดหลังเผชิญเหตุการณ์รุนแรง (PTSD)</Text>
              </View>
              <View style={styles.goToTest}>
                <TouchableOpacity>
                  <FontAwesome name="angle-right" size={24} color="black" />
                </TouchableOpacity>
              </View>              
            </View> 


          </ScrollView>


      </SafeAreaView>

      <Sidebar
          isVisible={sidebarVisible}
          onClose={() => setSidebarVisible(false)}
          navigation={navigation}
      />      
    </View>
  )
}

export default TherapistTest