import React, {useState} from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';

import { COLORS } from '../../utils/colors'

const ActivityLoader = () => {
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <View>
      <Modal transparent={true} visible={modalVisible}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
              width: 100,
              height: 100,
              borderRadius: 20,
              justifyContent: 'center',
            }}>
            <ActivityIndicator size="large" color={COLORS.yellow} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ActivityLoader;
