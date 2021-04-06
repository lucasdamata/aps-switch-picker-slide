import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker'
import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'


export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isResultsVisible: false,
      name: '',
      age: 0,
      selectedGenderIndex: 0,
      genders: [
        { id: 0, text: 'Selecione', enabled: false },
        { id: 1, text: 'Masculino' },
        { id: 2, text: 'Feminino' },
        { id: 3, text: 'Prefiro não dizer' }
      ],
      earnings: 0,
      selectedCourseIndex: 0,
      courses: [
        { id: 0, text: 'Selecione', enabled: false },
        { id: 1, text: 'Agronomia' },
        { id: 2, text: 'Engenharia de Produção' },
        { id: 3, text: 'Sistemas de Informação' }
      ],
      selectedPeriodIndex: 0,
      periods: [
        { id: 0, text: 'Selecione', enabled: false },
        { id: 1, text: '1º' },
        { id: 2, text: '2º' },
        { id: 3, text: '3º' },
        { id: 4, text: '4º' },
        { id: 5, text: '5º' },
        { id: 6, text: '6º' },
        { id: 7, text: '7º' },
        { id: 8, text: '8º' },
        { id: 8, text: '9º' },
        { id: 8, text: '10º' },
      ],
      selectedShiftIndex: 0,
      shifts: [
        { id: 0, text: 'Selecione', enabled: false },
        { id: 1, text: 'Manhã' },
        { id: 2, text: 'Tarde' },
        { id: 3, text: 'Noite' }
      ]
    }

    this.validateInfo = this.validateInfo.bind(this)
  }

  validateInfo () {
    if (
      this.state.name === '' ||
      this.state.age === 0 ||
      this.state.earnings === 0 ||
      this.state.selectedGenderIndex === 0 ||
      this.state.selectedCourseIndex === 0 ||
      this.state.selectedPeriodIndex === 0 ||
      this.state.selectedShiftIndex === 0
    ) {
      alert('Você deve preencher todos os campos obrigatórios!')
    } else {
      this.state.isResultsVisible = true
    }
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.logoText}>LOGO</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.formWrapper}>
            <Text style={styles.instruction}>
              Selecione os parâmetros:
            </Text>

            <Text style={styles.mandatoryLabel}>
              * = campo obrigatório
            </Text>

            <Text style={styles.label}>
              Nome* :
            </Text>
            <TextInput
              style={styles.inputText}
              placeholder="Nome completo"
              keyboardType="default"
              onChangeText={(value) => this.setState({ name: value })}
            />

            <Text style={styles.label}>
              Idade* :
            </Text>
            <TextInput
              style={styles.inputText}
              placeholder="21"
              keyboardType="numeric"
              onChangeText={(value) => this.setState({ age: value })}
            />

            <Text style={styles.label}>
              Gênero* :
            </Text>
            <Picker
              selectedValue={this.state.selectedCourseIndex}
              onValueChange={(value) => this.setState({ selectedGenderIndex: value })}
              style={styles.inputPicker}
            >
              {
                this.state.genders.map((item, index) => (
                  <Picker.Item key={item.id} value={index} label={item.text} enabled={item.enabled || true} />
                ))
              }
            </Picker>

            <Text style={styles.label}>
              Renda* : R$ {this.state.earnings.toFixed(2)}
            </Text>
            <Slider
              minimumValue={0}
              maximumValue={10000}
              step={100}
              thumbTintColor="pink"
              minimumTrackTintColor="pink"
              onValueChange={(value) => this.setState({ earnings: value })}
            />

            <Text style={styles.label}>
              Curso* :
            </Text>
            <Picker
              selectedValue={this.state.selectedCourseIndex}
              onValueChange={(value) => this.setState({ selectedCourseIndex: value })}
              style={styles.inputPicker}
            >
              {
                this.state.courses.map((item, index) => (
                  <Picker.Item key={item.id} value={index} label={item.text} enabled={item.enabled || true} />
                ))
              }
            </Picker>

            <Text style={styles.label}>
              Período* :
            </Text>
            <Picker
              selectedValue={this.state.selectedPeriodIndex}
              onValueChange={(value) => this.setState({ selectedPeriodIndex: value })}
              style={styles.inputPicker}
            >
              {
                this.state.periods.map((item, index) => (
                  <Picker.Item key={item.id} value={index} label={item.text} enabled={item.enabled || true} />
                ))
              }
            </Picker>

            <Text style={styles.label}>
              Turno* :
            </Text>
            <Picker
              selectedValue={this.state.selectedShiftIndex}
              onValueChange={(value) => this.setState({ selectedShiftIndex: value })}
              style={styles.inputPicker}
            >
              {
                this.state.shifts.map((item, index) => (
                  <Picker.Item key={item.id} value={index} label={item.text} enabled={item.enabled || true} />
                ))
              }
            </Picker>
          </View>

          <TouchableOpacity
            style={{
              width: '100%',
              height: 40,
              backgroundColor: 'pink',
              borderRadius: 3,
              padding: 12,
              alignItems: 'center',
            }}
            onPress={this.validateInfo}
          >
            <Text style={{ color: '#fff' }}>Salvar informações</Text>
          </TouchableOpacity>

          <View style={styles.insertedInformation}>
            <Text style={styles.insertedTitle}>
              Informações inseridas:
            </Text>

            <View style={styles.row}>
              <Text style={styles.label}> Nome: </Text>
              <Text style={styles.info}> {this.state.name} </Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.label}> Curso: </Text>
              <Text style={styles.info}>
                {this.state.courses[this.state.selectedCourseIndex].text}
              </Text>
            </View>

            <View style={[styles.row, styles.separated]}>
              <View style={styles.row}>
                <Text style={styles.label}> Período: </Text>
                <Text style={styles.info}>
                  {this.state.periods[this.state.selectedPeriodIndex].text}
                </Text>
              </View>

              <View style={styles.row}>
                <Text style={styles.label}> Turno: </Text>
                <Text style={styles.info}>
                  {this.state.shifts[this.state.selectedShiftIndex].text}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    maxHeight: 50,
    width: '100%',
    backgroundColor: 'pink',
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  logoText: {
    fontSize: 24,
    color: '#fff'
  },
  body: {
    flex: 1,
    width: '100%',
    padding: 16
  },
  formWrapper: {
    width: '100%',
    marginBottom: 16
  },
  instruction: {
    fontSize: 20
  },
  mandatoryLabel: {
    fontSize: 14,
    color: 'red',
    marginBottom: 8
  },
  inputText: {
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    marginVertical: 8,
    paddingHorizontal: 16
  },
  inputPicker: {
    height: 40,
    borderRadius: 4,
    borderWidth: 1,
    backgroundColor: '#fff',
    marginVertical: 8,
    paddingHorizontal: 8
  },
  insertedTitle: {
    fontSize: 20,
    marginBottom: 16
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 8
  },
  separated: {
    justifyContent: 'space-between'
  },
  label: {
    fontWeight: 'bold',
    fontSize: 14
  },
  info: {
    fontSize: 16
  }
});