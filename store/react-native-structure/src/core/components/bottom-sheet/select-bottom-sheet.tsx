import { ScrollView, StyleSheet, Text, type TextStyle, TouchableOpacity, type ViewStyle, } from 'react-native'
import CircleSelectIcon from '../../assets/icons/tick-circle';

import { HEIGHT } from '../../constance/size';
import { bottomSheet } from '../BottomSheet';
import { s } from '../../utils/size';
import CircleUnSelectIcon from '../../assets/icons/tick-circle_un_select';

export interface SelectBottomSheetProps {
  active?: number | string,
  data: {id:string|number, title:string}[],
  onChange : (id: number | string, value?:any) => void
  style?: ViewStyle,
  textStyle?: TextStyle,
}


export default function SelectBottomSheet(props:SelectBottomSheetProps) {
  const {active, data, onChange, style, textStyle} = props;
  
  return (
    <ScrollView
      style={{
        maxHeight: HEIGHT - 180,
      }}                   
      contentContainerStyle={styles.container}
    >
      {(data|| []).map((item, index)=> {
        return (
          <TouchableOpacity
            key={index}
            style={{...styles.item, ...style}}
            onPress={() => {
              onChange?.(item?.id, item);
              bottomSheet.hide()
            }}
          >
            <Text style={{...styles.itemText, ...textStyle}}>{item?.title}</Text>
            {active?.toString() === item?.id.toString() ? <CircleSelectIcon/> : <CircleUnSelectIcon/> } 
          </TouchableOpacity>
        )
      })}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    padding: 20
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  itemText: {
    width:200,
    fontSize: s(13),
    color: '#000',
  },
});