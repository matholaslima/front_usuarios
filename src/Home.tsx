import React from 'react';
import "./CSS/Home.css";
import {Button, Card, PageHeader} from "antd";
import NavBar from "./Components/NavBar";
import { Link } from 'react-router-dom';
import {Authenticate} from "./config";

function Home() {
    Authenticate();

    return (
        <div className="telaHome">
            <NavBar/>
            <div className="card">
                <Card className="cardolas1">
                    <PageHeader
                        ghost={false}
                        title="Home"
                        subTitle="Selecione a ação desejada"
                    />
                    <hr/>
                    <div className="btngroup">
                        <Link to="/inserir" className="btn">
                            <Button size="large" >
                                INSERIR
                            </Button>
                        </Link>
                        <Link to="/Venda" className="btn">
                            <Button size="large" >
                                VENDA
                            </Button>
                        </Link>
                        <Link to="/carrinho" className="btn">
                            <Button size="large" >
                                CARRINHO
                            </Button>
                        </Link>
                        <Link to="/HistVendas" className="btn">
                            <Button size="large" >
                                HISTÓRICO DE VENDAS
                            </Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
     );
}

export default Home;
