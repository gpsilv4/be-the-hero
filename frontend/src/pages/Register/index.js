import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsApp] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();

        const data = {
            name, 
            email, 
            whatsapp, 
            city , 
            district,
        };

        try {
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
            
        }  catch (err){
            alert('Erro na criação, tente novamente.')
        }

    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Criar User</h1>
                    <p>Faça a sua inscrição, entre na plataforma e ajude a encontrar os casos da sua ONG.</p>

                    <Link className="back-link" to="/">
                        <FiArrowLeft size={ 16} color="#E02041"/>
                        Não tenho conta
                    </Link>
                </section>

                <form onSubmit={ handleRegister }>
                    <input 
                        placeholder="Nome da ONG" 
                        value={ name }
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="E-mail" 
                        value={ email }
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="WhatsApp" 
                        value={ whatsapp }
                        onChange={e => setWhatsApp(e.target.value)}
                    />

                    <div className="input-group">
                        <input 
                            placeholder="Cidade" 
                            value={ city }
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="Distrito" 
                            style={{ width: 110 }} 
                            value={ district }
                            onChange={e => setDistrict(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Criar</button>
                </form>
            </div>
        </div>
    );

}