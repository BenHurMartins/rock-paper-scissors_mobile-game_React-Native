/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Topo from './src/components/topo.js';
import Icone from './src/components/icone.js';


class app3 extends Component {

    constructor(props) {
      super(props);

      this.state = { escolhaUsuario: '', escolhaComputador: '', resultado: '' };
    };

    jokenpo(escolhaUsuario) {

        //gera numero aleatorio
        var numeroAleatorio = Math.floor(Math.random() * 3);

        var escolhaComputador = '';

        switch (numeroAleatorio) {
          case 0: escolhaComputador = 'Pedra'; break;
          case 1: escolhaComputador = 'Papel'; break;
          case 2: escolhaComputador = 'Tesoura'; break;
        }

        var resultado = '';

        if (escolhaComputador == 'Pedra') {
          if (escolhaUsuario == 'Pedra') {
            resultado = 'Empate'
          }
          if (escolhaUsuario == 'Papel') {
            resultado = 'Vitória'
          }
          if (escolhaUsuario == 'Tesoura') {
            resultado = 'Derrota'
          }
        }

        if (escolhaComputador == 'Papel') {
          if (escolhaUsuario == 'Pedra') {
            resultado = 'Derrota'
          }
          if (escolhaUsuario == 'Papel') {
            resultado = 'Empate'
          }
          if (escolhaUsuario == 'Tesoura') {
            resultado = 'Vitória'
          }
        }

        if (escolhaComputador == 'Tesoura') {
          if (escolhaUsuario == 'Pedra') {
            resultado = 'Vitória'
          }
          if (escolhaUsuario == 'Papel') {
            resultado = 'Derrota'
          }
          if (escolhaUsuario == 'Tesoura') {
            resultado = 'Empate'
          }
        }

        this.setState( { escolhaUsuario : escolhaUsuario,
                         escolhaComputador : escolhaComputador,
                         resultado : resultado
                       } )
    }

    render(){
      return (
        <View>
          <Topo/>

          <View style={styles.painelAcoes}>
            <View style={styles.btnEscolha}>
              <Button title='Pedra' onPress={() => {this.jokenpo('Pedra')}}/>
            </View>
            <View style={styles.btnEscolha}>
              <Button title='Papel' onPress={() => {this.jokenpo('Papel')}}/>
            </View>
            <View style={styles.btnEscolha}>
              <Button title='Tesoura' onPress={() => {this.jokenpo('Tesoura')}}/>
            </View>
          </View>

          <View style={styles.palco}>
            <Text style={styles.txtResultado}>{this.state.resultado}</Text>
            <Icone escolha={this.state.escolhaComputador} jogador={'Computador'} ></Icone>
            <Icone escolha={this.state.escolhaUsuario} jogador={'Você'} ></Icone>
          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  btnEscolha : {
    width : 90
  },
  painelAcoes : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  palco : {
    alignItems: 'center',
    marginTop: 10
  },
  txtResultado : {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'red',
    height: 60
  }
});

AppRegistry.registerComponent('app3', () => app3);
