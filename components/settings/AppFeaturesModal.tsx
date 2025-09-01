import {
  View,
  Text,
  Modal,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import useAppTranslation from "@/hooks/useAppTranslation";
import FeatureItem from "./FeatureItem";
import { COLORS } from "@/theme/colors";
import { AppFeaturesModalProps } from "@/types/appFeaturesModal.types";

const AppFeaturesModal: React.FC<AppFeaturesModalProps> = ({
  visible,
  changeShow,
}) => {
  const { t, isEnLang } = useAppTranslation();

  const styles = createStyles(isEnLang);

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={() => changeShow(false)}
    >
      <SafeAreaView style={styles.modalContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              onPress={() => changeShow(false)}
              style={styles.closeButton}
            >
              <Ionicons name="close" size={24} color={COLORS.primary} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{t("app_features")}</Text>
            <Text style={styles.modalSubtitle}>
              {t("app_features_description")}
            </Text>
          </View>

          <View style={styles.featuresContainer}>
            <FeatureItem
              icon="language"
              title={t("multilingual_support")}
              description={t("multilingual_support_desc")}
            />
            <FeatureItem
              icon="restaurant"
              title={t("food_categories")}
              description={t("food_categories_desc")}
            />
            <FeatureItem
              icon="search"
              title={t("smart_search")}
              description={t("smart_search_desc")}
            />
            <FeatureItem
              icon="heart"
              title={t("favorites_system")}
              description={t("favorites_system_desc")}
            />
            <FeatureItem
              icon="document-text"
              title={t("detailed_recipes")}
              description={t("detailed_recipes_desc")}
            />
            <FeatureItem
              icon="library"
              title={t("heritage_preservation")}
              description={t("heritage_preservation_desc")}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default AppFeaturesModal;
const createStyles = (isEnLang: boolean) =>
  StyleSheet.create({
    modalContainer: {
      flex: 1,
      backgroundColor: COLORS.background,
    },
    modalHeader: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: "#eee",
      alignItems: "center",
    },
    closeButton: {
      position: "absolute",
      top: 20,
      left: isEnLang ? 20 : undefined,
      right: isEnLang ? undefined : 20,
      // textAlign: isEnLang? "left": "right",
      // flexDirection: isEnLang ? "row-reverse" : "row",

      zIndex: 1,
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: "bold",
      color: COLORS.primary,
      marginBottom: 8,
      textAlign: "center",
    },
    modalSubtitle: {
      fontSize: 16,
      color: "#666",
      textAlign: "center",
      // writingDirection: isEnLang ? "rtl" : "ltr",
      flexDirection: isEnLang ? "row-reverse" : "row",
    },
    featuresContainer: {
      padding: 20,
    },
  });
