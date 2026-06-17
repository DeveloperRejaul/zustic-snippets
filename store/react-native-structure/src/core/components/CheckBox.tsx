import { Pressable, type ViewProps, type ViewStyle } from 'react-native';
import CheckBoxCheckIcon from '../assets/icons/check-box-check';
import useQueryState from '../hooks/useQueryState';

interface ICheckBox extends ViewProps {
    onChange?: (value: string | number) => void;
    defaultIsChecked?: boolean;
    isDisabled?: boolean
    borderColor?: string
    size?: number
    boxStyle?: ViewStyle
    boxActiveStyle?: ViewStyle
    boxInactiveStyle?: ViewStyle
    boxStyleClassName?: string;
    checkStyleClassName?: string;
    value: string | number
    checkColor?: string
}

export function CheckBox(props: ICheckBox) {
  const {
    defaultIsChecked = false,
    isDisabled = false,
    borderColor = 'black',
    size = 20,
    boxStyle,
    boxActiveStyle,
    boxInactiveStyle,
    boxStyleClassName,
    onChange,
    value,
    checkColor,
  } = props;

  const [select, setSelect] = useQueryState<boolean>(defaultIsChecked);

  return (
    <Pressable
      pointerEvents={isDisabled ? 'none' : 'auto'}
      style={[{
        borderWidth: 1,
        borderColor,
        height: size,
        width: size,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        opacity: isDisabled ? 0.5 : 1,
        ...boxStyle,
      }, select ? boxActiveStyle : boxInactiveStyle]}
      onPress={() => setSelect((pre) => {
        onChange?.(value);
        return !pre;
      })}
      {...{ className: boxStyleClassName }}
    >
      {select ? <CheckBoxCheckIcon color={checkColor || 'black'} /> : null}
    </Pressable>
  );
}

  