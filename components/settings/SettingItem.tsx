import useAppTranslation from "@/hooks/useAppTranslation";
import { COLORS } from "@/theme/colors";
import { SettingItemProps } from "@/types/settingItemProps.types";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  title,
  onPress,
  rightComponent,
}) => {
  const { isEnLang } = useAppTranslation();

  const styles = createStyles(isEnLang);

  return (
    <TouchableOpacity
      style={styles.settingItem}
      onPress={onPress}
      disabled={!onPress}
    >
      <View style={styles.settingItemLeft}>
        <Ionicons name={icon as any} size={24} color={COLORS.primary} />
        <Text style={styles.settingItemText}>{title}</Text>
      </View>
      {rightComponent ||
        (onPress &&
          (isEnLang ? (
            <Ionicons name="chevron-forward" size={20} color="#999" />
          ) : (
            <Ionicons name="chevron-back" size={20} color="#999" />
          )))}
    </TouchableOpacity>
  );
};
export default SettingItem;

const createStyles = (isEnLang: boolean) =>
  StyleSheet.create({
    settingItem: {
      flexDirection: isEnLang ? "row" : "row-reverse",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 12,
      borderBottomWidth: 0.5,
      borderBottomColor: "#eee",
    },
    settingItemLeft: {
      flexDirection: isEnLang ? "row" : "row-reverse",
      alignItems: "center",
      flex: 1,
    },
    settingItemText: {
      fontSize: 16,
      marginHorizontal: 12,
      color: "#333",
      writingDirection: isEnLang ? "ltr" : "rtl",
    },
  });
