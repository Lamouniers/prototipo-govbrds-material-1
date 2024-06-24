import * as React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize } from "../GlobalStyles";
import { useNavigation } from '@react-navigation/native'; // Importe o hook useNavigation

const Crud4a = () => {
  const navigation = useNavigation(); // Use o hook useNavigation
  return (
    <View style={styles.crud4a}>
      <View style={[styles.list, styles.listPosition]}>
        <View style={styles.twoLine3WIconOrAvatar}>
          <View style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}>
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object.png")}
            />
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object1.png")}
            />
            
            <Text style={[styles.subtitle1, styles.subtitleTypo]}>
              Todos os Campi
            </Text>
            </TouchableOpacity>
            <Image
              style={[styles.statusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/status.png")}
            />
          </View>
          <Image
            style={[styles.avatarIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
          <View style={styles.chooseToUseAvatar} />
        </View>
        <View style={styles.twoLine3WIconOrAvatar}>
          <View style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}>
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object.png")}
            />
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object1.png")}
            />
            <Text style={styles.subtitle11}>Campina Verde</Text>
            <Image
              style={[styles.statusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/status1.png")}
            />
          </View>
          <Image
            style={[styles.avatarIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
          <View style={styles.chooseToUseAvatar} />
        </View>
        <View style={styles.twoLine3WIconOrAvatar}>
          <View style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}>
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object.png")}
            />
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object2.png")}
            />
            <Text style={[styles.subtitle12, styles.subtitleTypo]}>
              Ituiutaba
            </Text>
            <Image
              style={[styles.statusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/status.png")}
            />
          </View>
        </View>
        <View style={styles.twoLine3WIconOrAvatar}>
          <View style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}>
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object.png")}
            />
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object2.png")}
            />
            <Text style={styles.subtitle11}>Paracatu</Text>
            <Image
              style={[styles.statusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/status2.png")}
            />
          </View>
        </View>
        <View style={styles.twoLine3WIconOrAvatar}>
          <View style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}>
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object.png")}
            />
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object2.png")}
            />
            <Text style={[styles.subtitle14, styles.subtitleTypo]}>
              Patos de Minas
            </Text>
            <Image
              style={[styles.statusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/status.png")}
            />
          </View>
        </View>
        <View style={styles.twoLine3WIconOrAvatar}>
          <View style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}>
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object.png")}
            />
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object1.png")}
            />
            <Text style={styles.subtitle11}>Patrocínio</Text>
            <Image
              style={[styles.statusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/status3.png")}
            />
          </View>
          <Image
            style={[styles.avatarIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
          <View style={styles.chooseToUseAvatar} />
        </View>
        <View style={styles.twoLine3WIconOrAvatar}>
          <View style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}>
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object.png")}
            />
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object1.png")}
            />
            <Text style={styles.subtitle11}>Uberaba</Text>
            <Image
              style={[styles.statusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/status4.png")}
            />
          </View>
          <Image
            style={[styles.avatarIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
          <View style={styles.chooseToUseAvatar} />
        </View>
        <View style={styles.twoLine3WIconOrAvatar}>
          <View style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}>
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object.png")}
            />
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object1.png")}
            />
            <Text style={styles.subtitle11}>Uberaba Parque Tecnológico</Text>
            <Image
              style={[styles.statusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/status5.png")}
            />
          </View>
          <Image
            style={[styles.avatarIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
          <View style={styles.chooseToUseAvatar} />
        </View>
        <View style={styles.twoLine3WIconOrAvatar}>
          <View style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}>
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object.png")}
            />
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object1.png")}
            />
            <Text style={styles.subtitle11}>Uberlândia</Text>
            <Image
              style={[styles.statusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/status6.png")}
            />
          </View>
          <Image
            style={[styles.avatarIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
          <View style={styles.chooseToUseAvatar} />
        </View>
        <View style={styles.twoLine3WIconOrAvatar}>
          <View style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}>
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object.png")}
            />
            <View
              style={[styles.twoLine3WIconOrAvatar1, styles.iconPosition]}
            />
            <Image
              style={[styles.objectIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/object1.png")}
            />
            <Text style={styles.subtitle11}>Uberlândia Centro</Text>
            <Image
              style={[styles.statusIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/status7.png")}
            />
          </View>
          <Image
            style={[styles.avatarIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
          <View style={styles.chooseToUseAvatar} />
        </View>
      </View>
      <Image
        style={[styles.atomssystemBardarkIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/atomssystem-bardark.png")}
      />
      <View style={[styles.topARegularbRaised, styles.listPosition]}>
        <View style={[styles.elevation10, styles.iconPosition]} />
        <Image
          style={[styles.trailingIcon3, styles.trailingIconLayout]}
          contentFit="cover"
          source={require("../assets/trailing-icon-3.png")}
        />
        <Image
          style={[styles.trailingIcon2, styles.trailingIconLayout]}
          contentFit="cover"
          source={require("../assets/trailing-icon-2.png")}
        />
        <Image
          style={[styles.trailingIcon1, styles.trailingIconLayout]}
          contentFit="cover"
          source={require("../assets/trailing-icon-1.png")}
        />
        <Image
          style={styles.leadingIconLUseHighEmphas}
          contentFit="cover"
          source={require("../assets/-leading-icon-l-use-high-emphasis.png")}
        />
        <Text style={styles.pageTitle}>Campus</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listPosition: {
    left: 0,
    position: "absolute",
  },
  iconPosition: {
    left: "0%",
    top: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  subtitleTypo: {
    textAlign: "left",
    color: Color.onSurfaceHighEmphasis,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_base_8,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  trailingIconLayout: {
    opacity: 0.74,
    height: 24,
    width: 24,
    top: 16,
    position: "absolute",
  },
  twoLine3WIconOrAvatar1: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  objectIcon: {
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
  },
  subtitle1: {
    left: 73,
  },
  statusIcon: {
    width: "0.83%",
    right: "99.17%",
    left: "0%",
    top: "0%",
    bottom: "0%",
    height: "100%",
  },
  avatarIcon: {
    height: "33.33%",
    width: "6.67%",
    top: "33.33%",
    right: "86.67%",
    bottom: "33.33%",
    left: "6.67%",
  },
  chooseToUseAvatar: {
    marginTop: -20,
    width: 40,
    height: 40,
    left: 16,
    top: "50%",
    position: "absolute",
  },
  twoLine3WIconOrAvatar: {
    height: 72,
    width: 360,
  },
  subtitle11: {
    left: 72,
    textAlign: "left",
    color: Color.onSurfaceHighEmphasis,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    lineHeight: 24,
    letterSpacing: 0,
    fontSize: FontSize.size_base_8,
    top: "50%",
    marginTop: -12,
    position: "absolute",
  },
  subtitle12: {
    left: 74,
  },
  subtitle14: {
    left: 71,
  },
  list: {
    top: 80,
  },
  atomssystemBardarkIcon: {
    height: "3.74%",
    bottom: "96.26%",
    left: "0%",
    top: "0%",
    right: "0%",
    width: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
  },
  elevation10: {
    shadowColor: "rgba(0, 0, 0, 0.14)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
    backgroundColor: Color.onPrimaryPure0,
  },
  trailingIcon3: {
    right: 16,
    display: "none",
    opacity: 0.74,
  },
  trailingIcon2: {
    right: 64,
    display: "none",
    opacity: 0.74,
  },
  trailingIcon1: {
    right: 112,
  },
  leadingIconLUseHighEmphas: {
    height: 24,
    width: 24,
    top: 16,
    left: 16,
    position: "absolute",
  },
  pageTitle: {
    fontSize: FontSize.headline6_size,
    fontWeight: "600",
    fontFamily: FontFamily.headline6,
    top: 16,
    left: 72,
    textAlign: "left",
    color: Color.onSurfaceHighEmphasis,
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  topARegularbRaised: {
    top: 24,
    height: 56,
    width: 360,
  },
  crud4a: {
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.onPrimaryPure0,
  },
});

export default Crud4a;
