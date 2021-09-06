import React, {useEffect, useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import Colors from '../../constants/Colors';
import styles from './styles';

const Home = () => {
  const [selectedBtn, setSelectedBtn] = useState(1);
  const [ambPressed, setAmbPressed] = useState(false);
  const [intialTime, setInitalTime] = useState('10');
  const [ambIntialTime, setAmbInitalTime] = useState('10');
  const [timer, setTimer] = useState('10');
  const [duration, setDuration] = useState(1000);
  const [ambDuration, setAmbDuration] = useState(1000);
  const [ambTimer, setAmbTimer] = useState('10');
  const [modalVisible, setModalVisible] = useState(false);
  const [type, setType] = useState(1);

  const leftToRight = [0, 4, 2, 4, 2];
  const antiClockWise = [0, 4, 3, 2, 1];
  const topToBottom = [0, 1, 3, 1, 3];

  useEffect(() => {
    setTimeout(() => {
      if (!modalVisible) {
        if (!ambPressed) {
          if (timer !== 1) {
            setTimer(timer - 1);
          } else if (timer === 1) {
            if (selectedBtn === 4) {
              setSelectedBtn(1);
            } else {
              setSelectedBtn(selectedBtn + 1);
            }
            setTimer(intialTime);
          }
        } else {
          setTimer(intialTime);
        }
      } else {
        setTimer(intialTime);
      }
    }, duration);
  }, [timer]);

  useEffect(() => {
    setTimeout(() => {
      if (ambPressed) {
        if (ambTimer !== 1) {
          setAmbTimer(ambTimer - 1);
        } else if (ambTimer === 1) {
          setAmbPressed(false);
          setSelectedBtn(selectedBtn + 1);
          setTimer(intialTime - 1);
          setAmbTimer(ambIntialTime);
        }
      } else {
        setAmbTimer(ambIntialTime);
        // setSelectedBtn(selectedBtn + 1);
        // setTimer(intialTime - 1);
      }
    }, ambDuration);
  }, [ambTimer]);

  const ambBtnClick = pos => {
    setSelectedBtn(pos);
    setAmbPressed(true);
    setAmbTimer(ambIntialTime - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Traffic Signal</Text>

      <TouchableOpacity
        onPress={() => {
          if (modalVisible) {
            setSelectedBtn(1);
            setAmbPressed(false);
            setTimer(intialTime - 1);
          }
          setModalVisible(!modalVisible);
        }}
        style={styles.settingImage}>
        <Image
          source={require('../../assets/images/settings.png')}
          style={styles.imageStyle}
        />
      </TouchableOpacity>
      {!modalVisible ? (
        <View style={styles.container}>
          {/** Top Signal */}
          <View style={styles.aliginItemCenter}>
            <TouchableOpacity
              onPress={() => ambBtnClick(1)}
              style={styles.ambBtn}>
              <Text>AMB</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.aBtn,
                type == 1 &&
                  selectedBtn == 1 && {backgroundColor: Colors.green},
                type == 2 &&
                  antiClockWise[selectedBtn] == 1 && {
                    backgroundColor: Colors.green,
                  },
                type == 4 &&
                  topToBottom[selectedBtn] == 1 && {
                    backgroundColor: Colors.green,
                  },
              ]}>
              <Text>A</Text>
            </TouchableOpacity>

            {type == 1 &&
              (ambPressed ? (
                <Text>{selectedBtn == 1 ? ambTimer : intialTime}</Text>
              ) : (
                <Text>{selectedBtn == 1 ? timer : intialTime}</Text>
              ))}
            {type == 2 &&
              (ambPressed ? (
                <Text>
                  {antiClockWise[selectedBtn] == 1 ? ambTimer : intialTime}
                </Text>
              ) : (
                <Text>
                  {antiClockWise[selectedBtn] == 1 ? timer : intialTime}
                </Text>
              ))}
            {type == 3 &&
              (ambPressed ? (
                <Text>
                  {leftToRight[selectedBtn] == 1 ? ambTimer : intialTime}
                </Text>
              ) : (
                <Text>
                  {leftToRight[selectedBtn] == 1 ? timer : intialTime}
                </Text>
              ))}
            {type == 4 &&
              (ambPressed ? (
                <Text>
                  {topToBottom[selectedBtn] == 1 ? ambTimer : intialTime}
                </Text>
              ) : (
                <Text>
                  {topToBottom[selectedBtn] == 1 ? timer : intialTime}
                </Text>
              ))}
          </View>

          {/** Center Signals */}
          <View style={styles.rowJustifyContent}>
            {/** Left Signal */}
            <View style={styles.rowAlignItems}>
              <TouchableOpacity
                onPress={() => ambBtnClick(4)}
                style={styles.ambBtnHorizontal}>
                <Text>AMB</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.aBtnHorizontal,
                  type == 1 &&
                    selectedBtn == 4 && {backgroundColor: Colors.green},
                  type == 2 &&
                    antiClockWise[selectedBtn] == 4 && {
                      backgroundColor: Colors.green,
                    },
                  type == 3 &&
                    leftToRight[selectedBtn] == 4 && {
                      backgroundColor: Colors.green,
                    },
                ]}>
                <Text>D</Text>
              </TouchableOpacity>
              {type == 1 &&
                (ambPressed ? (
                  <Text>{selectedBtn == 4 ? ambTimer : intialTime}</Text>
                ) : (
                  <Text>{selectedBtn == 4 ? timer : intialTime}</Text>
                ))}
              {type == 2 &&
                (ambPressed ? (
                  <Text>
                    {antiClockWise[selectedBtn] == 4 ? ambTimer : intialTime}
                  </Text>
                ) : (
                  <Text>
                    {antiClockWise[selectedBtn] == 4 ? timer : intialTime}
                  </Text>
                ))}
              {type == 3 &&
                (ambPressed ? (
                  <Text>
                    {leftToRight[selectedBtn] == 4 ? ambTimer : intialTime}
                  </Text>
                ) : (
                  <Text>
                    {leftToRight[selectedBtn] == 4 ? timer : intialTime}
                  </Text>
                ))}
              {type == 4 &&
                (ambPressed ? (
                  <Text>
                    {topToBottom[selectedBtn] == 4 ? ambTimer : intialTime}
                  </Text>
                ) : (
                  <Text>
                    {topToBottom[selectedBtn] == 4 ? timer : intialTime}
                  </Text>
                ))}
            </View>

            {/** Right Signal */}
            <View style={styles.rowAlignItems}>
              {type == 1 &&
                (ambPressed ? (
                  <Text>{selectedBtn == 2 ? ambTimer : intialTime}</Text>
                ) : (
                  <Text>{selectedBtn == 2 ? timer : intialTime}</Text>
                ))}
              {type == 2 &&
                (ambPressed ? (
                  <Text>
                    {antiClockWise[selectedBtn] == 2 ? ambTimer : intialTime}
                  </Text>
                ) : (
                  <Text>
                    {antiClockWise[selectedBtn] == 2 ? timer : intialTime}
                  </Text>
                ))}
              {type == 3 &&
                (ambPressed ? (
                  <Text>
                    {leftToRight[selectedBtn] == 2 ? ambTimer : intialTime}
                  </Text>
                ) : (
                  <Text>
                    {leftToRight[selectedBtn] == 2 ? timer : intialTime}
                  </Text>
                ))}
              {type == 4 &&
                (ambPressed ? (
                  <Text>
                    {topToBottom[selectedBtn] == 2 ? ambTimer : intialTime}
                  </Text>
                ) : (
                  <Text>
                    {topToBottom[selectedBtn] == 2 ? timer : intialTime}
                  </Text>
                ))}
              <TouchableOpacity
                style={[
                  styles.aBtnHorizontal,
                  type == 1 &&
                    selectedBtn == 2 && {backgroundColor: Colors.green},
                  type == 2 &&
                    antiClockWise[selectedBtn] == 2 && {
                      backgroundColor: Colors.green,
                    },
                  type == 3 &&
                    leftToRight[selectedBtn] == 2 && {
                      backgroundColor: Colors.green,
                    },
                ]}>
                <Text>B</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => ambBtnClick(2)}
                style={styles.ambBtnHorizontal}>
                <Text>AMB</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/** Bottom Signal */}
          <View style={styles.aliginItemCenter}>
            {type == 1 &&
              (ambPressed ? (
                <Text>{selectedBtn == 3 ? ambTimer : intialTime}</Text>
              ) : (
                <Text>{selectedBtn == 3 ? timer : intialTime}</Text>
              ))}
            {type == 2 &&
              (ambPressed ? (
                <Text>
                  {antiClockWise[selectedBtn] == 3 ? ambTimer : intialTime}
                </Text>
              ) : (
                <Text>
                  {antiClockWise[selectedBtn] == 3 ? timer : intialTime}
                </Text>
              ))}
            {type == 3 &&
              (ambPressed ? (
                <Text>
                  {leftToRight[selectedBtn] == 3 ? ambTimer : intialTime}
                </Text>
              ) : (
                <Text>
                  {leftToRight[selectedBtn] == 3 ? timer : intialTime}
                </Text>
              ))}
            {type == 4 &&
              (ambPressed ? (
                <Text>
                  {topToBottom[selectedBtn] == 3 ? ambTimer : intialTime}
                </Text>
              ) : (
                <Text>
                  {topToBottom[selectedBtn] == 3 ? timer : intialTime}
                </Text>
              ))}
            <TouchableOpacity
              style={[
                styles.aBtn,
                type == 1 &&
                  selectedBtn == 3 && {backgroundColor: Colors.green},
                type == 2 &&
                  antiClockWise[selectedBtn] == 3 && {
                    backgroundColor: Colors.green,
                  },
                type == 4 &&
                  topToBottom[selectedBtn] == 3 && {
                    backgroundColor: Colors.green,
                  },
              ]}>
              <Text>C</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => ambBtnClick(3)}
              style={styles.ambBtn}>
              <Text>AMB</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <Text>Rotation Type:</Text>
          <TouchableOpacity
            onPress={() => {
              setType(1);
              alert('Type Set');
            }}>
            <Text>Clock Wise</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setType(2);
              alert('Type Set');
            }}>
            <Text>Anti Clock Wise</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setType(3);
              alert('Type Set');
            }}>
            <Text>Left To Right</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setType(4);
              alert('Type Set');
            }}>
            <Text>Top To Bottom</Text>
          </TouchableOpacity>
          <Text>Traffic Time</Text>
          <TextInput
            onChangeText={text => {
              if (text < 121 && text > 9) {
                setInitalTime(text);
              } else {
                alert('Value range is > 121 and < 9.');
              }
            }}
            keyboardType="number-pad"
            value={intialTime}
          />
          <Text>Ambulance Time</Text>
          <TextInput
            onChangeText={text => {
              if (text < 121 && text > 9) {
                setAmbInitalTime(text);
              } else {
                alert('Value range is > 121 and < 9.');
              }
            }}
            keyboardType="number-pad"
            value={ambIntialTime}
          />
        </View>
      )}
    </View>
  );
};

export default Home;
