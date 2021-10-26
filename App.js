import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Picker, CheckBox, Image } from 'react-native';

export default function App() {
  const [identificacion, setIdentificacion] = useState('');
  const [nombre, setNombre] = useState('');
  const [destino, setDestino] = useState("");
  const [nroPersonas, setNroPersonas] = useState("");
  const [nroDias, setNroDias] = useState('');
  const [barco, setBarco] = useState(false);
  const [discoteca, setDiscoteca] = useState(false);
  const [totalPago, setTotalPagar] = useState("");
  const [error, setError] = useState();

  let personasViaje = parseInt(nroPersonas);
  let diasViaje = parseInt(nroDias);
  let costoAdicional = 0;
  let total;
  let descuento = false;

  const viaje = () => {
    if (identificacion == '') {
      setError('Digite Identifiacion')
    } else if (nombre == '') {
      setError('Digite un Nombre')
    } else if (destino == '') {
      setError('Debe seleccionar un destino')
    } else if (nroPersonas == '') {
      setError('el numero de personas debe de ser mayor a 0')
    } else if (nroDias == '') {
      setError('el numero de Dias debe de ser mayor a 0')
    } else {

      if (barco) {
        costoAdicional += 100000;
      }

      if (discoteca) {
        costoAdicional += 120000;
      }

      if (personasViaje >= 10) {
        descuento = true;
      }

      switch (destino) {
        case 'ca':
          total = ((300000 * personasViaje) * diasViaje) + (costoAdicional * personasViaje);
          setTotalPagar((descuento) ? total - (total * 0.10) : total);
          setError('')
          costoAdicional = 0;
          break;

        case 'sm':
          total = ((250000 * personasViaje) * diasViaje) + (costoAdicional * personasViaje);
          setTotalPagar((descuento) ? total - (total * 0.10) : total);
          setError('')
          costoAdicional = 0;
          break;

        case 'sa':
          total = ((200000 * personasViaje) * diasViaje) + (costoAdicional * personasViaje);
          setTotalPagar((descuento) ? total - (total * 0.10) : total);
          setError('')
          costoAdicional = 0;
          break;
      }
    }
  };

  const limpiar = () => {
    setIdentificacion("");
    setBarco("");
    setDestino("");
    setDiscoteca('');
    setError('');
    setTotalPagar('');
    setNombre('');
    setNroDias('');
    setNroPersonas('')
  }

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
        <View>
          <Text>Identificación: </Text>
          <TextInput style={styles.inputs}style={{ borderBottomWidth: 1 }} onChangeText={setIdentificacion} value={identificacion}></TextInput>
        </View>
        <Text>{"\n"}</Text>
        <View>
          <Text>Nombre: </Text>
          <TextInput style={styles.inputs} style={{ borderBottomWidth: 1 }} onChangeText={setNombre} value={nombre}></TextInput>
        </View>
        <Text>{"\n"}</Text>
        <View>
          <Text>Destino</Text>
          <Picker
            selectedValue={destino}
            style={{ height: 35, width: 180, borderColor: "white" }}
            onValueChange={(itemValue, itemIndex) => setDestino(itemValue)}
          >
            <Picker.Item label="Selecciona viaje" value="" />
            <Picker.Item label="Cartagena" value="ca" />
            <Picker.Item label="Santa Marta" value="sm" />
            <Picker.Item label="San Andres" value="sa" />
          </Picker>
        </View>
        <Text>{"\n"}</Text>
        <View>
          <Text>personas: </Text>
          <TextInput style={styles.inputs} style={{ borderBottomWidth: 1 }} onChangeText={setNroPersonas} value={nroPersonas}></TextInput>
        </View>
        <Text>{"\n"}</Text>
        <View>
          <Text>dias: </Text>
          <TextInput style={styles.inputs} style={{ borderBottomWidth: 1 }} onChangeText={setNroDias} value={nroDias}></TextInput>
        </View>
        <Text>{"\n"}</Text>
        <View>
        <Text>Adicionales:</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <CheckBox
            value={barco}
            onValueChange={setBarco}
            style={{ alignSelf: "center" }}
          ></CheckBox>
          <Text> Barco</Text>
        </View>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <CheckBox
            value={discoteca}
            onValueChange={setDiscoteca}
            style={{ alignSelf: "center" }}
          ></CheckBox>
          <Text> Discoteca</Text>
        </View>
      </View>
      <Text>{"\n"}</Text>
        <View>
          <Text>Tota a pagar: 
          <TextInput style={{ borderBottomWidth: 1 }} value={totalPago}></TextInput>
          </Text>
        </View>

      </View>
      <Text style={{ color: 'red' }}>{error}</Text>

      <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
        <Button 
        title="Calcular" 
        onPress={viaje} />
      </View>
      <Text>{"\n"}</Text>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        <Button
          title="Limpiar"
          onPress={limpiar}
        />
      </View>
      <StatusBar style="auto" />
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
