import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";



const Dashboard = () => {


  return (
    <View style={styles.dashboard3}>
      <View style={styles.cards}>
        <View style={styles.imageTopbOutlinedaResti}>
          <View style={styles.imageTopbOutlinedaResti1}>
            <View style={[styles.object, styles.objectPosition]}>
              <View style={[styles.elevation, styles.statesPosition]} />
              <View style={[styles.colorLContainer, styles.statesPosition]} />
              <View style={[styles.states, styles.statesPosition]} />
              <Text style={styles.todosOsCampi}>Todos os Campi</Text>
            </View>
            <Text
              style={[styles.formaoAcadmicaDe, styles.observatrioIftmTypo]}
            >{`Formação Acadêmica
de Docentes por Campus`}</Text>
          </View>
          <View style={styles.groupParent}>
            <View style={styles.retngulo1Parent}>
              <Image
                style={[styles.retngulo1Icon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/retngulo-1.png")}
              />
              <Text style={[styles.administrao, styles.agronomiaTypo]}>
                Administração
              </Text>
              <View style={[styles.fontType, styles.fontPosition]}>
                <Text style={[styles.text, styles.textClr]}>170</Text>
              </View>
            </View>
            <View style={[styles.retngulo2Parent, styles.fontSpaceBlock]}>
              <Image
                style={[styles.retngulo2Icon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/retngulo-2.png")}
              />
              <Text style={styles.agronomiaTypo}>Agronomia</Text>
              <View style={[styles.fontType1, styles.fontPosition]}>
                <Text style={[styles.text, styles.textClr]}>60</Text>
              </View>
            </View>
            <View style={[styles.fontType2, styles.fontSpaceBlock]}>
              <View style={[styles.object, styles.objectPosition]}>
                <Image
                  style={[styles.retngulo3Icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/retngulo-3.png")}
                />
                <Text style={styles.cinciaDaComputao}>
                  Ciência da computação
                </Text>
                <Text style={[styles.text2, styles.textClr]}>50</Text>
              </View>
            </View>
            <View style={[styles.fontType3, styles.fontSpaceBlock]}>
              <View style={[styles.object, styles.objectPosition]}>
                <Image
                  style={[styles.retngulo4Icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/retngulo-4.png")}
                />
                <Text style={styles.cinciaDaComputao}>ciênciaseconômicas</Text>
                <Text style={[styles.text3, styles.textClr]}>37</Text>
              </View>
            </View>
            <View style={[styles.fontType4, styles.fontSpaceBlock]}>
              <View style={[styles.object, styles.objectPosition]}>
                <Image
                  style={[styles.retngulo5Icon, styles.iconLayout1]}
                  contentFit="cover"
                  source={require("../assets/retngulo-5.png")}
                />
                <Text style={styles.cinciaDaComputao}>odontologia</Text>
                <Text style={[styles.text4, styles.textClr]}>28</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.fiveUpaOnPrimary, styles.elevationShadowBox]}>
        <View style={styles.tab}>
          <Text style={styles.caption}>Inicial</Text>
          <View style={[styles.icon, styles.iconLayout]}>
                <Image
                  style={[styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/iconn.png")}
                />
          </View>
        </View>
        <View style={styles.tab}>
          <Text style={[styles.caption1, styles.captionTypo]}>Meus Dados</Text>
          <View style={[styles.icon1, styles.iconLayout]}>
                <Image
                  style={[styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/iconnn.png")}
                />
          </View>
        </View>
        <View style={styles.tab}>
          <Text style={[styles.caption2, styles.captionTypo]}>Usuários</Text>
          <View style={[styles.icon1, styles.iconLayout]}>
                <Image
                  style={[styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/iconnnn.png")}
                />
          </View>
        </View>
      </View>
      <Image
        style={[styles.atomssystemBardarkIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/atomssystem-bardark1.png")}
      />
      <View style={[styles.topBExtendedaFlat, styles.objectPosition]}>
        <View style={[styles.object, styles.objectPosition]}>
          <View style={[styles.elevation1, styles.elevationShadowBox]} />
          <Image
            style={[styles.trailingIcon3, styles.trailingIconPosition]}
            contentFit="cover"
            source={require("../assets/trailing-icon-3.png")}
          />
          <Image
            style={[styles.trailingIcon2, styles.trailingIconPosition]}
            contentFit="cover"
            source={require("../assets/trailing-icon-2.png")}
          />      

            <Image
              style={[styles.leadingIconLUseHighEmphas, styles.observatrioIftmPosition]}
              contentFit="cover"
              source={require("../assets/-leading-icon-l-use-high-emphasis.png")}
            />
 
          <Text
            style={[styles.observatrioIftm, styles.observatrioIftmPosition]}
          >
            Observatório IFTM
          </Text>
          <Image
            style={[styles.avatarIcon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/-avatar.png")}
          />
        </View>
      </View>
      <Text style={[styles.iftmCampusAvanado, styles.iftmCampusAvanadoTypo]}>
        IFTM Campus Avançado Uberaba Parque Tecnológico
      </Text>
      <Text style={[styles.ministrioDaEducao, styles.iftmCampusAvanadoTypo]}>
        MINISTÉRIO DA EDUCAÇÃO
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  objectPosition: {
    left: "0%",
    right: "0%",
    width: "100%",
  },
  statesPosition: {
    borderRadius: Border.br_9xs,
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  observatrioIftmTypo: {
    fontFamily: FontFamily.headline6,
    fontWeight: "600",
    fontSize: FontSize.headline6_size,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 24,
    letterSpacing: 0,
  },
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  agronomiaTypo: {
    color: Color.colorDarkslategray,
    textTransform: "uppercase",
    lineHeight: 16,
    letterSpacing: 2,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  fontPosition: {
    bottom: "34.38%",
    height: "40.63%",
    top: "25%",
    position: "absolute",
  },
  // textClr: {
  //   color: Color.onPrimaryPure0,
  //   textAlign: "left",
  //   position: "absolute",
  // },
  fontSpaceBlock: {
    marginTop: 16,
    height: 32,
  },
  elevationShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  captionTypo: {
    color: Color.onPrimaryMediumEmphasis,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: "50%",
    top: "50%",
    marginTop: 4,
    fontSize: FontSize.size_xs_7,
    lineHeight: 16,
    letterSpacing: 0,
    position: "absolute",
  },
  trailingIconPosition: {
    opacity: 0.74,
    top: 7,
    height: 24,
    width: 24,
    position: "absolute",
  },
  observatrioIftmPosition: {
    left: 17,
    position: "absolute",
  },
  iftmCampusAvanadoTypo: {
    fontSize: FontSize.size_3xs,
    left: 17,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    position: "absolute",
  },
  elevation: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    elevation: 1,
    shadowRadius: 1,
    backgroundColor: Color.onPrimaryPure0,
  },
  colorLContainer: {
    borderStyle: "solid",
    borderColor: "rgba(0, 0, 0, 0.12)",
    borderWidth: 1,
  },
  states: {
    display: "none",
  },
  todosOsCampi: {
    top: 81,
    fontSize: FontSize.size_base_8,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 0,
    left: 11,
    position: "absolute",
  },
  object: {
    bottom: "0%",
    height: "100%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  formaoAcadmicaDe: {
    top: 12,
    left: 11,
    fontWeight: "600",
    fontSize: FontSize.headline6_size,
    position: "absolute",
  },
  imageTopbOutlinedaResti1: {
    top: 0,
    left: 0,
    width: 344,
    height: 385,
    position: "absolute",
  },
  retngulo1Icon: {
    width: "63.46%",
    left: "36.54%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    right: "0%",
    maxWidth: "100%",
  },
  administrao: {
    width: "36.54%",
  },
  text: {
    fontSize: FontSize.size_2xs,
    color: Color.onPrimaryPure0,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
  },
  fontType: {
    width: "6.41%",
    right: "4.81%",
    left: "88.78%",
  },
  retngulo1Parent: {
    width: 312,
    height: 32,
  },
  retngulo2Icon: {
    width: "41.84%",
    left: "58.16%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    right: "0%",
    maxWidth: "100%",
  },
  fontType1: {
    width: "7.65%",
    right: "4.08%",
    left: "88.27%",
  },
  retngulo2Parent: {
    width: 196,
  },
  retngulo3Icon: {
    width: "35.59%",
    left: "64.41%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    right: "0%",
    maxWidth: "100%",
  },
  cinciaDaComputao: {
    fontSize: FontSize.size_xs_7,
    color: Color.colorDarkslategray,
    textTransform: "uppercase",
    lineHeight: 16,
    letterSpacing: 2,
    textAlign: "left",
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text2: {
    left: "85.88%",
    top: "25%",
    color: Color.onPrimaryPure0,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  fontType2: {
    width: 177,
  },
  retngulo4Icon: {
    width: "31.33%",
    left: "68.67%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    right: "0%",
    maxWidth: "100%",
  },
  text3: {
    left: "86.14%",
    top: "25%",
    color: Color.onPrimaryPure0,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  fontType3: {
    width: 166,
  },
  retngulo5Icon: {
    width: "26.45%",
    left: "73.55%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    right: "0%",
    maxWidth: "100%",
  },
  text4: {
    left: "81.29%",
    top: "25%",
    color: Color.onPrimaryPure0,
    fontSize: FontSize.size_2xs,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
  },
  fontType4: {
    width: 155,
  },
  groupParent: {
    top: 125,
    left: 16,
    height: 244,
    position: "absolute",
  },
  imageTopbOutlinedaResti: {
    width: 344,
    height: 385,
  },
  cards: {
    top: 137,
    left: 8,
    alignItems: "center",
    height: 385,
    position: "absolute",
  },
  caption: {
    marginLeft: -17,
    textAlign: "center",
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    left: "50%",
    top: "50%",
    marginTop: 4,
    fontSize: FontSize.size_xs_7,
    color: Color.onPrimaryPure0,
    lineHeight: 16,
    letterSpacing: 0,
    position: "absolute",
  },
  // home: {
  //   top: "4.17%",
  //   left: "4.17%",
  //   fontSize: FontSize.size_xl,
  //   fontFamily: FontFamily.interRegular,
  // },
  icon: {
    marginLeft: -12,
    marginTop: -20,
    height: 24,
    width: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tab: {
    backgroundColor: Color.primaryBlueWarmVivid90,
    height: 56,
    flex: 1,
  },
  caption1: {
    marginLeft: -36,
  },
  icon1: {
    opacity: 0.5,
    marginLeft: -12,
    marginTop: -20,
    height: 24,
    width: 24,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  caption2: {
    marginLeft: -26,
  },
  fiveUpaOnPrimary: {
    top: 787,
    shadowRadius: 10,
    elevation: 10,
    width: 393,
    height: 26,
    flexDirection: "row",
    justifyContent: "center",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    left: 0,
    alignItems: "center",
    position: "absolute",
  },
  atomssystemBardarkIcon: {
    height: "1.13%",
    bottom: "98.87%",
    left: "0%",
    right: "0%",
    width: "100%",
    top: "0%",
    maxWidth: "100%",
  },
  elevation1: {
    elevation: 1,
    shadowRadius: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.14)",
    backgroundColor: Color.onPrimaryPure0,
    left: "0%",
    right: "0%",
    width: "100%",
    bottom: "0%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  trailingIcon3: {
    right: 84,
  },
  trailingIcon2: {
    right: 132,
  },
  leadingIconLUseHighEmphas: {
    top: 4,
    height: 24,
    width: 24,
  },
  observatrioIftm: {
    top: 50,
    fontFamily: FontFamily.headline6,
    fontWeight: "600",
    fontSize: FontSize.headline6_size,
    textAlign: "left",
    color: Color.colorBlack,
    lineHeight: 24,
    letterSpacing: 0,
  },
  avatarIcon: {
    height: "84.15%",
    width: "8.06%",
    top: "8.2%",
    right: "6.11%",
    bottom: "7.65%",
    left: "85.83%",
  },
  topBExtendedaFlat: {
    height: "6.02%",
    top: "5.15%",
    bottom: "92.83%",
    position: "absolute",
  },
  iftmCampusAvanado: {
    top: 75,
  },
  ministrioDaEducao: {
    top: 110,
    width: 139,
    height: 22,
  },
  dashboard3: {
    height: 608,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.onPrimaryPure0,
    flex: 1,
  },
});

export default Dashboard;
