import { StatusBar } from "expo-status-bar";
import React, { Component, useState, Fragment } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Picker,
  CheckBox,
  Button,
} from "react-native";

export default function App() {
  const [Destino, setDestino] = useState("Seleccione");
  const [Nropersonas, setNropersonas] = useState("");
  const [Nrodias, setNrodias] = useState("");
  const [Adicionales, setAdicionales] = useState("");
  const [Total, setTotal] = useState("");

  const calcTotal = () => {
    if (Nrodias != "" && Nropersonas != "") {
      let total = 0;
      switch (Destino) {
        case "cartajena": {
          if (Nropersonas > 10) {
            total = 300000 * Nrodias * 270000;
          } else {
            total = 300000 * Nrodias;
          }
          break;
        }
        case "santa_marta": {
          if (Nropersonas > 10) {
            total = 250000 * Nrodias * 225000;
          } else {
            total = 225000 * Nrodias;
          }
          break;
        }
        case "san_andres": {
          if (Nropersonas > 10) {
            total = 200000 * Nrodias * 180000;
          } else {
            total = 200000 * Nrodias;
          }
          break;
        }
        case "c":
          mresultado = 0;
          setValor1("");
          setValor2("");
          break;
      }
      setTotal(total);
    }

    if ((Adicionales = Barco)) {
      total = Destino * 100000;
    } else {
      if ((Adicionales = Discoteca)) {
        total = Destino * 120000;
      }
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Cabezera_texto}>Agencia de turismo</Text>
        <Text>{"\n"}</Text>
        <Image
          source={require("./image/viajar.jpg")}
          style={{ width: 375, height: 200, borderRadius: 5 }}
        ></Image>
      </View>
      <Text>{"\n"}</Text>
      <View>
        <Text>
          Identificacion:{" "}
          <TextInput style={{ borderBottomWidth: 1 }} placeholder="" />
        </Text>
      </View>
      <Text>{"\n"}</Text>
      <View>
        <Text>
          Nombre: <TextInput style={{ borderBottomWidth: 1 }} placeholder="" />
        </Text>
      </View>
      <Text>{"\n"}</Text>
      <View>
        <Text>
          Destino:
          <Picker
            selectedValue={Destino}
            style={{ height: 35, width: 180, borderColor: "white" }}
            onValueChange={(itemValue, itemIndex) => setDestino(itemValue)}
          >
            <Picker.Item label="Seleccione tu detino" value="Seleccione" />
            <Picker.Item label="Cartajena" value="cartajena" />
            <Picker.Item label="Santa marta" value="santa_marta" />
            <Picker.Item label="San Andres" value="san_andres" />
          </Picker>
        </Text>
      </View>
      <Text>{"\n"}</Text>
      <View>
        <Text>
          Numero de personas:
          <TextInput
            style={{ borderBottomWidth: 1 }}
            onChangeText={(Nropersonas) => setNropersonas(Nropersonas)}
            value={Nropersonas}
          />
        </Text>
      </View>
      <Text>{"\n"}</Text>
      <View>
        <Text>
          Numero de dias:
          <TextInput
            style={{ borderBottomWidth: 1 }}
            onChangeText={(Nrodias) => setNrodias(Nrodias)}
            value={Nrodias}
          />
        </Text>
      </View>
      <Text>{"\n"}</Text>
      <View>
        <Text>Adicionales:</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <CheckBox
            value={Adicionales}
            itemvalue={Barco}
            onValueChange={setAdicionales}
            style={{ alignSelf: "center" }}
          ></CheckBox>
          <Text> Barco</Text>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <CheckBox
            value={Adicionales}
            itemValue={Discoteca}
            onValueChange={setAdicionales}
            style={{ alignSelf: "center" }}
          ></CheckBox>
          <Text> Discoteca</Text>
        </View>
      </View>
      <View>
        <Text>
          Total:
          <TextInput style={{ borderBottomWidth: 1 }} value={Total} />
        </Text>
      </View>

      <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
        <Button title="Calcular" onPress={() => calcTotal()} />
      </View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Button
          title="Limpiar"
          onPress={() => calcTotal("c")}
          style={{ marginLeft: 100 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  Cabezera_texto: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "a",
  },
});
