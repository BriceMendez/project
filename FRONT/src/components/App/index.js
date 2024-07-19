import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import APropos from "../../pages/APropos";
import Contact from "../../pages/Contact";
import Campains from "../../pages/Campains";
import Campain from "../../pages/Campain";
import Command from "../../pages/Command";
import ConfirmationCommand from "../../pages/ConfirmationCommand";
import LegalNotices from "../../pages/LegalNotices";
import Login from "../../pages/Login";
import Panier from "../../pages/Panier";
import Payment from "../../pages/Payment";
import SignIn from "../../pages/SignIn";
import Home from '../../pages/Home';
import User from '../../pages/User';
import Trees from "../../pages/Trees";
import Tree from "../../pages/Tree";
import Header from '../Header';
import Footer from '../Footer';
import Administrateur from '../../pages/BackOffice/Administateur';
import { CartProvider } from './CardContext.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../fontawesome.js'

const App = () => {
    return (
        <>
            <Header />
            <BrowserRouter>
                <CartProvider>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/a-propos' element={<APropos />} />
                        <Route path='/campagnes' element={<Campains />} />
                        <Route path='/campagne/:campainId' element={<Campain />} />
                        <Route path='/arbres' element={<Trees />} />
                        <Route path='/arbre/:treeId' element={<Tree />} />
                        <Route path='/inscription' element={<SignIn />} />
                        <Route path='/connexion' element={<Login />} />
                        <Route path='/mentions-legales' element={<LegalNotices />} />
                        <Route path='/profil' element={<User />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/panier' element={<Panier />} />
                        <Route path='/paiement' element={<Payment />} />
                        <Route path='/commande' element={<Command />} />
                        <Route path='/confirmation-commande' element={<ConfirmationCommand />} />
                        <Route path='/admin' element={<Administrateur />} />
                    </Routes>
                    <ToastContainer />
                </CartProvider>
            </BrowserRouter>
            <Footer />
        </>
    );
};

export default App;
