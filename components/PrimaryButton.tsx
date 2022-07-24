import {
  StyleSheet,
  Text,
  View,
  Pressable,
  GestureResponderEvent,
} from "react-native";

export default function PrimaryButton(props: {
  children: any;
  onPress?: Function;
}) {
  const { children, onPress } = props;
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={(e: GestureResponderEvent) => (onPress ? onPress(e) : {})}
        android_ripple={{ color: "white" }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    overflow: "hidden",
    borderRadius: 28,
  },
  buttonInnerContainer: {
    backgroundColor: "blue",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
