/* eslint-disable import/no-anonymous-default-export */
import './App.css';
import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aleatorio from './components/basicos/Aleatorio'
import Card from './components/layout/Card'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import ListaAlunos from './components/repeticao/ListaAlunos'
import TabelaProdutos from './components/repeticao/TabelaProdutos'
import ParOuImpar from './components/condicional/ParOuImpar'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import DiretaPai from './components/comunicacao/DiretaPai'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import Input from './components/formulario/Input'

export default _ =>

    <div className="App">

        <h1>Fundamentos React</h1>
        
        <div className="Cards">

            <Card titulo="#12 - Componente Controlado (Input)" color="#9B539C">
                <Input />
            </Card>

            <Card titulo="#11 - Comunicação Indireta" color="#BCCF02">
                <IndiretaPai />
            </Card>

            <Card titulo="#10 - Comunicação Direta" color="#1FDA9A">
                <DiretaPai />
            </Card>

            <Card titulo="#09 - Renderização Condicional" color="#542733">
                <UsuarioInfo usuario={{nome: 'Rodrigo'}}/>
                {/* <UsuarioInfo usuario={{email: 'ro@drigo.com'}}/>
                <UsuarioInfo usuario={{}}/>
                <UsuarioInfo /> */}
            </Card>

            <Card titulo="#08 - Renderização Condicional" color="#542733">
                <ParOuImpar numero={1}/>
            </Card>

            <Card titulo="#07 - Desafio Repetição" color="#92B06A">
                <TabelaProdutos />
            </Card>

            <Card titulo="#06 - Repetição" color="#354458">
                <ListaAlunos />
            </Card>

            <Card titulo="#05 - Componente com filho" color="#DE4D4E">
                <Familia sobrenome="Figueira">                
                    <FamiliaMembro nome="Rodrigo"/>
                    <FamiliaMembro nome="Mayara"/>
                    <FamiliaMembro nome="Gabriel"/>
                </Familia>
            </Card>

            <Card titulo="#04 - Valor aleatório" color="#69D2E7">
                <Aleatorio min={1} max={10} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#542733">
                <Fragmento />
            </Card>

            <Card titulo="#02 - Com Parâmetro" color="#588C73">
                <ComParametro
                    titulo="Boletim"
                    aluno="Rodrigo"
                    nota={9.9}
                />
            </Card>

            <Card titulo="#01 - Primeiro" color="#E9514C">
                <Primeiro></Primeiro>
            </Card>

        </div>

    </div>